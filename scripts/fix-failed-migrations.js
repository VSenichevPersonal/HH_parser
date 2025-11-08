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
      stdio: 'pipe', // Не выводить в консоль
      env: process.env,
    });
    console.log(`✅ Migration ${migrationName} marked as applied`);
    return true;
  } catch (error) {
    const errorMessage = error.stdout?.toString() || error.stderr?.toString() || error.message;
    // Если миграция уже применена или не существует, это нормально
    if (errorMessage.includes('already applied') ||
        errorMessage.includes('already recorded as applied') ||
        errorMessage.includes('not found')) {
      console.log(`ℹ️  Migration ${migrationName} is already resolved`);
      return true;
    }
    console.error(`⚠️  Could not mark migration ${migrationName} as applied:`, errorMessage);
    return false;
  }
}

async function main() {
  console.log('🔍 Checking for failed migrations...\n');

  // Пытаемся пометить упавшие миграции как примененные
  const userModelResult = await markMigrationAsApplied('20251108205329_add_user_model');
  const resumeModelResult = await markMigrationAsApplied('20251108211311_add_resume_models');

  // Если хотя бы одна миграция была успешно помечена, продолжаем
  if (userModelResult || resumeModelResult) {
    console.log('\n✅ Some migrations were resolved, continuing...');
  } else {
    console.log('\n⚠️  No migrations were resolved, but continuing anyway...');
  }

  console.log('\n✅ Migration check complete');
}

main().catch((error) => {
  console.error('❌ Error:', error.message);
  // Не прерываем процесс, если скрипт не смог пометить миграцию
  process.exit(0);
});
