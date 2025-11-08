-- Пометить упавшую миграцию как примененную
-- Выполнить через: npx @railway/cli connect Postgres
-- Затем: \i scripts/mark-migration-applied.sql

-- Проверяем, существует ли запись о миграции
INSERT INTO "_prisma_migrations" (
    "id",
    "checksum",
    "finished_at",
    "migration_name",
    "logs",
    "rolled_back_at",
    "started_at",
    "applied_steps_count"
)
SELECT 
    gen_random_uuid(),
    'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6', -- checksum (можно получить из Prisma)
    NOW(),
    '20251108205329_add_user_model',
    NULL,
    NULL,
    NOW(),
    1
WHERE NOT EXISTS (
    SELECT 1 FROM "_prisma_migrations" 
    WHERE "migration_name" = '20251108205329_add_user_model'
);

-- Или обновляем существующую запись, если она есть
UPDATE "_prisma_migrations"
SET 
    "finished_at" = NOW(),
    "rolled_back_at" = NULL,
    "applied_steps_count" = 1
WHERE "migration_name" = '20251108205329_add_user_model'
  AND "finished_at" IS NULL;
