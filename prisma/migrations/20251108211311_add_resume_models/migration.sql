-- Alter RawItem table to support both vacancy and resume IDs (change hhId to text)
ALTER TABLE "raw_item" ALTER COLUMN "hhId" TYPE TEXT;

-- Create ManagerToken table
CREATE TABLE "manager_token" (
    "managerId" BIGINT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT,
    "dailyLimit" INTEGER NOT NULL DEFAULT 200,
    "usedToday" INTEGER NOT NULL DEFAULT 0,
    "lastReset" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "manager_token_pkey" PRIMARY KEY ("managerId")
);

-- Create Resume table
CREATE TABLE "resume" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "areaId" INTEGER,
    "areaName" TEXT,
    "experienceYears" INTEGER,
    "salaryDesired" DECIMAL(65,30),
    "currency" TEXT,
    "updatedAt" TIMESTAMP(3),
    "rawId" TEXT NOT NULL,

    CONSTRAINT "resume_pkey" PRIMARY KEY ("id")
);

-- Create ResumeSkill table
CREATE TABLE "resume_skill" (
    "resumeId" TEXT NOT NULL,
    "skillName" TEXT NOT NULL,

    CONSTRAINT "resume_skill_pkey" PRIMARY KEY ("resumeId","skillName")
);

-- Create ResumeViewAudit table
CREATE TABLE "resume_view_audit" (
    "id" BIGSERIAL NOT NULL,
    "managerId" BIGINT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "viewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "resume_view_audit_pkey" PRIMARY KEY ("id")
);

-- Create SearchProfile table
CREATE TABLE "search_profile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "params" JSONB NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "scheduleCron" TEXT NOT NULL DEFAULT '30 2 * * *',
    "lastRun" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "search_profile_pkey" PRIMARY KEY ("id")
);

-- Create indexes
CREATE UNIQUE INDEX "resume_rawId_key" ON "resume"("rawId");
CREATE INDEX "resume_updatedAt_idx" ON "resume"("updatedAt");

-- Add foreign key constraints
ALTER TABLE "resume" ADD CONSTRAINT "resume_rawId_fkey" FOREIGN KEY ("rawId") REFERENCES "raw_item"("hhId") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "resume_skill" ADD CONSTRAINT "resume_skill_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "resume_view_audit" ADD CONSTRAINT "resume_view_audit_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "manager_token"("managerId") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "resume_view_audit" ADD CONSTRAINT "resume_view_audit_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
