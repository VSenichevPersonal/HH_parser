-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "unaccent";

-- CreateTable
CREATE TABLE "employer" (
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "employer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vacancy" (
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "employerId" BIGINT,
    "areaId" BIGINT,
    "publishedAt" TIMESTAMP(3),
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "url" TEXT,
    "salaryFrom" DECIMAL(65,30),
    "salaryTo" DECIMAL(65,30),
    "currency" TEXT,
    "professionalRoles" JSONB,
    "experience" JSONB,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "vacancy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vacancy_skill" (
    "vacancyId" BIGINT NOT NULL,
    "skillName" TEXT NOT NULL,

    CONSTRAINT "vacancy_skill_pkey" PRIMARY KEY ("vacancyId","skillName")
);

-- CreateTable
CREATE TABLE "raw_item" (
    "source" TEXT NOT NULL,
    "hhId" BIGINT NOT NULL,
    "payload" JSONB NOT NULL,
    "fetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "raw_item_pkey" PRIMARY KEY ("source","hhId")
);

-- CreateTable
CREATE TABLE "sync_state" (
    "source" TEXT NOT NULL,
    "lastSeen" TIMESTAMP(3),
    "page" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "sync_state_pkey" PRIMARY KEY ("source")
);

-- CreateIndex
CREATE INDEX "vacancy_name_trgm_idx" ON "vacancy" USING GIN ("name" gin_trgm_ops);

-- AddForeignKey
ALTER TABLE "vacancy" ADD CONSTRAINT "vacancy_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "employer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacancy_skill" ADD CONSTRAINT "vacancy_skill_vacancyId_fkey" FOREIGN KEY ("vacancyId") REFERENCES "vacancy"("id") ON DELETE CASCADE ON UPDATE CASCADE;
