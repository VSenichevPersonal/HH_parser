#!/bin/bash

# Скрипт для настройки DATABASE_URL в Railway
# Использует Railway CLI для получения переменных из Postgres

echo "🔍 Поиск Postgres сервиса и получение DATABASE_URL..."
echo ""

# Пробуем разные варианты имен Postgres сервисов
POSTGRES_NAMES=("postgres" "Postgres" "postgresql" "PostgreSQL" "hh-postgres" "database")

for name in "${POSTGRES_NAMES[@]}"; do
  echo "Проверка сервиса: $name"
  if npx @railway/cli variables --service "$name" 2>/dev/null | grep -q "DATABASE_URL\|PGDATABASE\|POSTGRES_URL"; then
    echo "✅ Найден Postgres сервис: $name"
    DATABASE_URL=$(npx @railway/cli variables --service "$name" --json 2>/dev/null | grep -o '"DATABASE_URL":"[^"]*"' | cut -d'"' -f4)
    
    if [ -z "$DATABASE_URL" ]; then
      # Пытаемся собрать из отдельных переменных
      PGHOST=$(npx @railway/cli variables --service "$name" --json 2>/dev/null | grep -o '"PGHOST":"[^"]*"' | cut -d'"' -f4)
      PGPORT=$(npx @railway/cli variables --service "$name" --json 2>/dev/null | grep -o '"PGPORT":"[^"]*"' | cut -d'"' -f4 || echo "5432")
      PGUSER=$(npx @railway/cli variables --service "$name" --json 2>/dev/null | grep -o '"PGUSER":"[^"]*"' | cut -d'"' -f4)
      PGPASSWORD=$(npx @railway/cli variables --service "$name" --json 2>/dev/null | grep -o '"PGPASSWORD":"[^"]*"' | cut -d'"' -f4)
      PGDATABASE=$(npx @railway/cli variables --service "$name" --json 2>/dev/null | grep -o '"PGDATABASE":"[^"]*"' | cut -d'"' -f4)
      
      if [ -n "$PGHOST" ] && [ -n "$PGUSER" ] && [ -n "$PGPASSWORD" ] && [ -n "$PGDATABASE" ]; then
        # URL-encode password
        PGPASSWORD_ENCODED=$(printf '%s' "$PGPASSWORD" | jq -sRr @uri)
        DATABASE_URL="postgresql://${PGUSER}:${PGPASSWORD_ENCODED}@${PGHOST}:${PGPORT}/${PGDATABASE}"
      fi
    fi
    
    if [ -n "$DATABASE_URL" ]; then
      echo "✅ DATABASE_URL получен"
      echo ""
      echo "📝 Добавление DATABASE_URL в переменные hh-api..."
      npx @railway/cli variables --service hh-api --set "DATABASE_URL=${DATABASE_URL}"
      echo ""
      echo "✅ DATABASE_URL успешно добавлен в переменные hh-api!"
      exit 0
    fi
  fi
done

echo "❌ Не удалось автоматически найти DATABASE_URL"
echo ""
echo "💡 Выполните вручную:"
echo "   1. Откройте Railway Dashboard: https://railway.com/project/f40aac02-bab3-412e-a39f-318408c3508b"
echo "   2. Выберите Postgres сервис"
echo "   3. Перейдите в Variables"
echo "   4. Скопируйте DATABASE_URL"
echo "   5. Выполните команду:"
echo "      npx @railway/cli variables --service hh-api --set \"DATABASE_URL=<ваш_DATABASE_URL>\""
exit 1
