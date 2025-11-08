#!/usr/bin/env node

/**
 * Скрипт для получения DATABASE_URL из Postgres сервиса
 * и добавления его в переменные hh-api
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_ID = 'f40aac02-bab3-412e-a39f-318408c3508b';

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

async function getPostgresVariables() {
  const fetch = (await import('node-fetch')).default;
  const RAILWAY_API = 'https://backboard.railway.app/graphql/v1';

  // Получаем все сервисы проекта
  const query = `
    query GetProject($projectId: String!) {
      project(id: $projectId) {
        services {
          edges {
            node {
              id
              name
              serviceType
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(RAILWAY_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables: { projectId: PROJECT_ID } }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.errors) {
      throw new Error(JSON.stringify(data.errors));
    }

    const services = data.data.project.services.edges.map(edge => edge.node);
    const postgresService = services.find(s => 
      s.name?.toLowerCase().includes('postgres') || 
      s.serviceType === 'POSTGRES'
    );

    if (!postgresService) {
      console.error('❌ Postgres сервис не найден');
      return null;
    }

    console.log(`✅ Найден Postgres сервис: ${postgresService.name} (${postgresService.id})`);

    // Получаем переменные Postgres сервиса
    const varsQuery = `
      query GetServiceVariables($serviceId: String!) {
        service(id: $serviceId) {
          variables {
            edges {
              node {
                name
                value
              }
            }
          }
        }
      }
    `;

    const varsResponse = await fetch(RAILWAY_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        query: varsQuery, 
        variables: { serviceId: postgresService.id } 
      }),
    });

    if (!varsResponse.ok) {
      throw new Error(`HTTP error! status: ${varsResponse.status}`);
    }

    const varsData = await varsResponse.json();
    if (varsData.errors) {
      throw new Error(JSON.stringify(varsData.errors));
    }

    const variables = varsData.data.service.variables.edges.map(edge => edge.node);
    const databaseUrl = variables.find(v => 
      v.name === 'DATABASE_URL' || 
      v.name === 'PGDATABASE' ||
      v.name === 'POSTGRES_URL'
    );

    if (databaseUrl) {
      return databaseUrl.value;
    }

    // Пытаемся собрать DATABASE_URL из отдельных переменных
    const pgHost = variables.find(v => v.name === 'PGHOST')?.value;
    const pgPort = variables.find(v => v.name === 'PGPORT')?.value || '5432';
    const pgUser = variables.find(v => v.name === 'PGUSER')?.value;
    const pgPassword = variables.find(v => v.name === 'PGPASSWORD')?.value;
    const pgDatabase = variables.find(v => v.name === 'PGDATABASE')?.value;

    if (pgHost && pgUser && pgPassword && pgDatabase) {
      return `postgresql://${pgUser}:${encodeURIComponent(pgPassword)}@${pgHost}:${pgPort}/${pgDatabase}`;
    }

    return null;
  } catch (error) {
    console.error('❌ Ошибка при получении переменных:', error.message);
    return null;
  }
}

async function main() {
  console.log('🔍 Поиск DATABASE_URL из Postgres сервиса...\n');
  
  const databaseUrl = await getPostgresVariables();
  
  if (!databaseUrl) {
    console.error('❌ Не удалось получить DATABASE_URL');
    console.log('\n💡 Попробуйте получить DATABASE_URL вручную:');
    console.log('   1. Откройте Railway Dashboard');
    console.log('   2. Выберите Postgres сервис');
    console.log('   3. Скопируйте DATABASE_URL из Variables');
    console.log('   4. Добавьте его в переменные hh-api через CLI:');
    console.log('      npx @railway/cli variables --service hh-api --set "DATABASE_URL=..."');
    process.exit(1);
  }

  console.log(`✅ DATABASE_URL получен: ${databaseUrl.substring(0, 30)}...`);
  console.log('\n📝 Добавление DATABASE_URL в переменные hh-api...\n');

  try {
    execSync(
      `npx @railway/cli variables --service hh-api --set "DATABASE_URL=${databaseUrl}"`,
      { stdio: 'inherit' }
    );
    console.log('\n✅ DATABASE_URL успешно добавлен!');
  } catch (error) {
    console.error('❌ Ошибка при добавлении переменной:', error.message);
    console.log('\n💡 Попробуйте добавить вручную:');
    console.log(`   npx @railway/cli variables --service hh-api --set "DATABASE_URL=${databaseUrl}"`);
    process.exit(1);
  }
}

main().catch(error => {
  console.error('❌ Критическая ошибка:', error);
  process.exit(1);
});
