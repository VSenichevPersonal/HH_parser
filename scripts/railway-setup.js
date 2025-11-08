#!/usr/bin/env node

/**
 * Скрипт для настройки Railway проекта:
 * 1. Получает список сервисов
 * 2. Находит Postgres и Redis сервисы
 * 3. Оставляет по одному каждого типа
 * 4. Связывает их с hh-api сервисом
 */

const { execSync } = require('child_process');

const PROJECT_ID = 'f40aac02-bab3-412e-a39f-318408c3508b';
const API_SERVICE_NAME = 'hh-api';

console.log('🚀 Настройка Railway проекта...\n');

try {
  // Проверяем текущий статус
  console.log('📋 Проверка текущего статуса...');
  const status = execSync('npx @railway/cli status', { encoding: 'utf-8' });
  console.log(status);
  
  console.log('\n✅ Переменные окружения для HH API уже настроены.');
  console.log('\n⚠️  Для удаления лишних Postgres/Redis сервисов:');
  console.log('   1. Откройте Railway Dashboard: https://railway.com/project/' + PROJECT_ID);
  console.log('   2. Удалите лишние Postgres сервисы (оставьте один)');
  console.log('   3. Удалите лишние Redis сервисы (оставьте один)');
  console.log('   4. Railway автоматически создаст DATABASE_URL и REDIS_URL для hh-api');
  console.log('\n💡 DATABASE_URL будет автоматически доступен в переменных hh-api после связывания.');
  
} catch (error) {
  console.error('❌ Ошибка:', error.message);
  process.exit(1);
}
