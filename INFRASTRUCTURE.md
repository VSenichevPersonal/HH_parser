# HH Parser Infrastructure

## 📋 Обзор

Проект HH Parser - система для сбора и анализа вакансий с HeadHunter API.

- **Backend**: NestJS + TypeScript
- **Database**: PostgreSQL (Railway)
- **Cache**: Redis (Railway)
- **Deployment**: Railway
- **ORM**: Prisma

## 🚀 Railway Project

### Project Details
- **Project ID**: `f40aac02-bab3-412e-a39f-318408c3508b`
- **Project Name**: HH parser
- **Environment**: production
- **Environment ID**: `73e73761-29c6-4fa0-82cf-f36df57ca3de`
- **Dashboard URL**: https://railway.com/project/f40aac02-bab3-412e-a39f-318408c3508b

### Services

#### 1. hh-api (Main Application)
- **Service ID**: `2797fac2-9d05-4dd1-88f6-009bb0ed3983`
- **Service Name**: hh-api
- **Type**: Node.js/NestJS
- **Public URL**: `https://hh-api.up.railway.app`
- **Private Domain**: `hh-api.railway.internal`

#### 2. Postgres (Database)
- **Service ID**: `dda25c1f-e82c-45ef-b656-d0bb043e7dc9`
- **Service Name**: Postgres
- **Type**: PostgreSQL
- **Private Domain**: `postgres.railway.internal`
- **Volume**: `postgres-volume` (ID: `3bcb4a11-e271-4d15-8653-70620a7fe581`)

#### 3. Redis (Cache)
- **Service ID**: `37b89c0d-f7f8-48a3-88f8-840c92d1fc7d`
- **Service Name**: Redis
- **Type**: Redis
- **Private Domain**: `redis.railway.internal`
- **Volume**: `redis-volume` (ID: `b6c8b7b8-7b5b-4b5b-8b5b-7b5b7b5b7b5b`)

## 🔑 Credentials & Connection Strings

### PostgreSQL
```bash
DATABASE_URL="postgresql://postgres:SeDtwtppaoUXhvszSvqsZLfAEeiwFnVl@postgres.railway.internal:5432/railway"
```

**Individual Variables:**
- `PGHOST`: `postgres.railway.internal`
- `PGPORT`: `5432`
- `PGUSER`: `postgres`
- `PGPASSWORD`: `SeDtwtppaoUXhvszSvqsZLfAEeiwFnVl`
- `PGDATABASE`: `railway`

**Public URL** (для внешнего доступа):
```
postgresql://postgres:SeDtwtppaoUXhvszSvqsZLfAEeiwFnVl@shinkansen.proxy.rlwy.net:22076/railway
```

### Redis
```bash
REDIS_URL="redis://default:ytYScvJIHgNEDyElUrgQoaiTXmFsCNHk@redis.railway.internal:6379"
```

**Individual Variables:**
- `REDISHOST`: `redis.railway.internal`
- `REDISPORT`: `6379`
- `REDISUSER`: `default`
- `REDISPASSWORD`: `ytYScvJIHgNEDyElUrgQoaiTXmFsCNHk`

**Public URL** (для внешнего доступа):
```
redis://default:ytYScvJIHgNEDyElUrgQoaiTXmFsCNHk@metro.proxy.rlwy.net:12575
```

### HeadHunter API
```bash
HH_CLIENT_ID="Q36BV9RAJVHMU3QOUS4OLRC9HPCHLNP60Q5LTQTOF452NU8DU1DIHJU68PKB1GDB"
HH_CLIENT_SECRET="SEJ9EEGM07HFDA35G8KFTJH0620N0MKTU5I63L382E0JQEOL974V7T20TH634T1K"
HH_ACCESS_TOKEN="USERKI6M8V2BT53SRP5F2FPO26LFLSSTMKMBJG4G25HHN4V8U9NUJTJ785CN8QP3"
HH_REFRESH_TOKEN="USERNS2626GK5U1O429D53OVGO9VJ5FOKHV7KUH8FKOIU8PFPHAU4COEE1T67P5S"
HH_REDIRECT_URI="https://hhcredos.up.railway.app/api/auth/hh/callback"
```

### Application Variables
```bash
USER_AGENT="HH Credos (contact: dev@credos.ru)"
TOPIC_QUERY="Golang AND Kafka"
```

## 🛠 Railway CLI Commands

### Authentication
```bash
# Login (if needed)
npx @railway/cli login --browserless

# Link project
npx @railway/cli link --project f40aac02-bab3-412e-a39f-318408c3508b
```

### Project Management
```bash
# Status
npx @railway/cli status

# List projects
npx @railway/cli list

# Open dashboard
npx @railway/cli open
```

### Service Management
```bash
# View variables
npx @railway/cli variables --service hh-api
npx @railway/cli variables --service Postgres
npx @railway/cli variables --service Redis

# Set variables
npx @railway/cli variables --service hh-api --set "NEW_VAR=value"

# Connect to database shell
npx @railway/cli connect Postgres  # psql
npx @railway/cli connect Redis     # redis-cli

# View logs
npx @railway/cli logs --service hh-api
npx @railway/cli logs --service Postgres

# Redeploy
npx @railway/cli redeploy --service hh-api

# Upload new code
npx @railway/cli up
```

### Environment Variables
All environment variables are automatically available in Railway shell:
```bash
npx @railway/cli run --service hh-api env
```

## 🗄 Database Schema

### Tables

#### Employer
```sql
CREATE TABLE employer (
    id BIGINT PRIMARY KEY,
    name TEXT NOT NULL
);
```

#### Vacancy
```sql
CREATE TABLE vacancy (
    id BIGINT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    employerId BIGINT REFERENCES employer(id),
    areaId BIGINT,
    publishedAt TIMESTAMP,
    archived BOOLEAN DEFAULT false,
    url TEXT,
    salaryFrom DECIMAL,
    salaryTo DECIMAL,
    currency TEXT,
    professionalRoles JSONB,
    experience JSONB,
    updatedAt TIMESTAMP
);

-- Full-text search index
CREATE INDEX vacancy_name_trgm_idx ON vacancy USING GIN (name gin_trgm_ops);
```

#### VacancySkill
```sql
CREATE TABLE vacancy_skill (
    vacancyId BIGINT NOT NULL,
    skillName TEXT NOT NULL,
    PRIMARY KEY (vacancyId, skillName),
    FOREIGN KEY (vacancyId) REFERENCES vacancy(id) ON DELETE CASCADE
);
```

#### RawItem
```sql
CREATE TABLE raw_item (
    source TEXT NOT NULL,
    hhId BIGINT NOT NULL,
    payload JSONB NOT NULL,
    fetchedAt TIMESTAMP DEFAULT now(),
    PRIMARY KEY (source, hhId)
);
```

#### SyncState
```sql
CREATE TABLE sync_state (
    source TEXT PRIMARY KEY,
    lastSeen TIMESTAMP,
    page INTEGER DEFAULT 0
);
```

### Extensions
```sql
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS unaccent;
```

## 🧪 Testing Infrastructure

### PostgreSQL Connection Test
```bash
# Via Railway CLI
npx @railway/cli connect Postgres

# In psql:
# \l - list databases
# \c railway - connect to database
# \dt - list tables
# SELECT COUNT(*) FROM vacancy;
```

### Redis Connection Test
```bash
# Via Railway CLI
npx @railway/cli connect Redis

# In redis-cli:
# ping
# info
# keys *
```

### Application Health Check
```bash
# Via Railway CLI logs
npx @railway/cli logs --service hh-api

# Or direct HTTP request
curl https://hh-api.up.railway.app
```

### Environment Variables Test
```bash
# Check all variables
npx @railway/cli variables --service hh-api

# Test database connection in app context
npx @railway/cli run --service hh-api node -e "require('dotenv').config(); console.log('DB:', process.env.DATABASE_URL ? 'OK' : 'MISSING'); console.log('REDIS:', process.env.REDIS_URL ? 'OK' : 'MISSING');"
```

## 📊 Monitoring & Logs

### Application Logs
```bash
npx @railway/cli logs --service hh-api
npx @railway/cli logs --service hh-api --follow
```

### Database Logs
```bash
npx @railway/cli logs --service Postgres
```

### Build Logs
```bash
npx @railway/cli logs --service hh-api --build
```

## 🚀 Deployment Process

### Automatic Deployment
1. Push to `main` branch in GitHub
2. Railway automatically:
   - Clones repository
   - Installs dependencies (`npm install`)
   - Builds application (`nest build`)
   - Applies database migrations (`prisma migrate deploy`)
   - Starts application (`npm run start:prod`)

### Manual Deployment
```bash
# From local machine
git add .
git commit -m "Update"
git push origin main

# Force redeploy
npx @railway/cli redeploy --service hh-api
```

### Rollback
```bash
# View deployment history
npx @railway/cli logs --service hh-api --deployments

# Rollback to previous deployment (via Dashboard)
```

## 🔧 Development Setup

### Local Development
```bash
# Clone repository
git clone https://github.com/VSenichevPersonal/HH_parser.git
cd HH_parser

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with local database credentials

# Run database migrations
npx prisma migrate dev

# Start development server
npm run start:dev
```

### Environment File (.env)
```bash
# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/hh_parser"

# HH API
HH_CLIENT_ID="Q36BV9RAJVHMU3QOUS4OLRC9HPCHLNP60Q5LTQTOF452NU8DU1DIHJU68PKB1GDB"
HH_CLIENT_SECRET="SEJ9EEGM07HFDA35G8KFTJH0620N0MKTU5I63L382E0JQEOL974V7T20TH634T1K"
HH_ACCESS_TOKEN="USERKI6M8V2BT53SRP5F2FPO26LFLSSTMKMBJG4G25HHN4V8U9NUJTJ785CN8QP3"
HH_REFRESH_TOKEN="USERNS2626GK5U1O429D53OVGO9VJ5FOKHV7KUH8FKOIU8PFPHAU4COEE1T67P5S"
HH_REDIRECT_URI="https://hhcredos.up.railway.app/api/auth/hh/callback"

# Application
USER_AGENT="HH Credos (contact: dev@credos.ru)"
TOPIC_QUERY="Golang AND Kafka"
```

## 📚 API Documentation

### Current Endpoints
- `GET /` - Health check
- `GET /api/vacancies` - (Planned) Search vacancies
- `POST /api/vacancies/sync` - (Planned) Trigger sync

### HH API Integration
- Base URL: `https://api.hh.ru`
- Authentication: OAuth2 Bearer token
- Rate limits: Respect `Retry-After` headers
- User-Agent: Required for all requests

## 🔒 Security Notes

- Never commit secrets to GitHub
- Use Railway environment variables for all sensitive data
- Access tokens have expiration (14 days)
- Implement token refresh logic
- Database credentials are auto-generated by Railway

## 📞 Support

- Railway Dashboard: https://railway.com/project/f40aac02-bab3-412e-a39f-318408c3508b
- HH API Documentation: https://github.com/hhru/api
- Project Repository: https://github.com/VSenichevPersonal/HH_parser

## 🏷 Tags
- `railway`, `postgresql`, `redis`, `nestjs`, `prisma`, `headhunter-api`, `infrastructure`
