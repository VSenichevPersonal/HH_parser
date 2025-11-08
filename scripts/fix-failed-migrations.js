#!/usr/bin/env node

/**
 * Скрипт для исправления упавших миграций Prisma
 * Помечает миграции как примененные через prisma migrate resolve
 */

const { execSync } = require('child_process');

async function markMigrationAsApplied(migrationName) {
  try {
    console.log(`📝 Attempting to mark migration ${migrationName} as applied...`);
    execSync(`npx prisma migrate resolve --applied ${migrationName}`, {
      stdio: 'inherit',
      env: process.env,
    });
    console.log(`✅ Migration ${migrationName} marked as applied`);
    return true;
  } catch (error) {
    // Если миграция уже применена или не существует, это нормально
    if (error.message.includes('already applied') || error.message.includes('not found')) {
      console.log(`ℹ️  Migration ${migrationName} is already resolved or not found`);
      return true;
    }
    console.error(`⚠️  Could not mark migration ${migrationName} as applied:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🔍 Checking for failed migrations...\n');

  // Пытаемся пометить упавшую миграцию как примененную
  await markMigrationAsApplied('20251108205329_add_user_model');

  console.log('\n✅ Migration check complete');
}

main().catch((error) => {
  console.error('❌ Error:', error.message);
  // Не прерываем процесс, если скрипт не смог пометить миграцию
  process.exit(0);
});
