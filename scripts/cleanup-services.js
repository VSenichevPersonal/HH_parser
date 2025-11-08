#!/usr/bin/env node

/**
 * Скрипт для очистки лишних сервисов в Railway проекте
 * Удаляет дубликаты Postgres и Redis, оставляя по одному каждого типа
 */

const fs = require('fs');
const path = require('path');

const PROJECT_ID = 'f40aac02-bab3-412e-a39f-318408c3508b';
const RAILWAY_API = 'https://backboard.railway.app/graphql/v1';

// Читаем токен из конфига Railway
const configPath = path.join(process.env.HOME, '.railway', 'config.json');
let token = null;

try {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  token = config.user?.token;
} catch (error) {
  console.error('❌ Не удалось прочитать Railway конфиг:', error.message);
  process.exit(1);
}

if (!token) {
  console.error('❌ Токен Railway не найден');
  process.exit(1);
}

async function queryRailway(query, variables = {}) {
  const fetch = (await import('node-fetch')).default;
  
  const response = await fetch(RAILWAY_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  if (data.errors) {
    throw new Error(JSON.stringify(data.errors));
  }
  return data.data;
}

async function getServices() {
  const query = `
    query GetProject($projectId: String!) {
      project(id: $projectId) {
        services {
          edges {
            node {
              id
              name
              serviceType
              createdAt
            }
          }
        }
      }
    }
  `;

  const data = await queryRailway(query, { projectId: PROJECT_ID });
  return data.project.services.edges.map(edge => edge.node);
}

async function deleteService(serviceId) {
  const mutation = `
    mutation DeleteService($serviceId: String!) {
      serviceDelete(id: $serviceId) {
        id
      }
    }
  `;

  try {
    await queryRailway(mutation, { serviceId });
    return true;
  } catch (error) {
    console.error(`❌ Ошибка при удалении сервиса ${serviceId}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🔍 Получение списка сервисов...\n');
  
  const services = await getServices();
  
  console.log(`📋 Найдено сервисов: ${services.length}\n`);
  
  // Группируем по типам
  const postgresServices = services.filter(s => 
    s.name?.toLowerCase().includes('postgres') || 
    s.serviceType === 'POSTGRES'
  );
  
  const redisServices = services.filter(s => 
    s.name?.toLowerCase().includes('redis') || 
    s.serviceType === 'REDIS'
  );
  
  const otherServices = services.filter(s => 
    !postgresServices.includes(s) && !redisServices.includes(s)
  );

  console.log(`🗄️  Postgres сервисов: ${postgresServices.length}`);
  console.log(`🔴 Redis сервисов: ${redisServices.length}`);
  console.log(`📦 Других сервисов: ${otherServices.length}\n`);

  // Оставляем самый старый Postgres (первый созданный)
  if (postgresServices.length > 1) {
    const sorted = postgresServices.sort((a, b) => 
      new Date(a.createdAt) - new Date(b.createdAt)
    );
    const toKeep = sorted[0];
    const toDelete = sorted.slice(1);
    
    console.log(`✅ Оставляем Postgres: ${toKeep.name} (${toKeep.id})`);
    console.log(`🗑️  Удаляем ${toDelete.length} лишних Postgres сервисов:\n`);
    
    for (const service of toDelete) {
      console.log(`   Удаление: ${service.name} (${service.id})...`);
      const success = await deleteService(service.id);
      if (success) {
        console.log(`   ✅ Удален\n`);
      } else {
        console.log(`   ❌ Ошибка\n`);
      }
    }
  }

  // Оставляем самый старый Redis
  if (redisServices.length > 1) {
    const sorted = redisServices.sort((a, b) => 
      new Date(a.createdAt) - new Date(b.createdAt)
    );
    const toKeep = sorted[0];
    const toDelete = sorted.slice(1);
    
    console.log(`✅ Оставляем Redis: ${toKeep.name} (${toKeep.id})`);
    console.log(`🗑️  Удаляем ${toDelete.length} лишних Redis сервисов:\n`);
    
    for (const service of toDelete) {
      console.log(`   Удаление: ${service.name} (${service.id})...`);
      const success = await deleteService(service.id);
      if (success) {
        console.log(`   ✅ Удален\n`);
      } else {
        console.log(`   ❌ Ошибка\n`);
      }
    }
  }

  if (postgresServices.length <= 1 && redisServices.length <= 1) {
    console.log('✅ Лишних сервисов не найдено. Всё в порядке!');
  }

  console.log('\n✨ Готово!');
}

main().catch(error => {
  console.error('❌ Критическая ошибка:', error);
  process.exit(1);
});
