#!/bin/bash
# Скрипт для исправления упавшей миграции в Railway

echo "Исправление упавшей миграции..."

# Подключаемся к базе данных через Railway CLI и помечаем миграцию как примененную
npx @railway/cli run --service hh-api -- npx prisma migrate resolve --applied 20251108205329_add_user_model

echo "Миграция помечена как примененная!"
