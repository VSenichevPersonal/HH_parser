-- CreateTable
CREATE TABLE "resume" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "areaId" INTEGER,
    "areaName" TEXT,
    "experienceYears" INTEGER,
    "salaryDesired" DECIMAL(65,30),
    "currency" TEXT,
    "updatedAt" TIMESTAMP(3),
    "rawSource" TEXT NOT NULL,
    "rawId" TEXT NOT NULL,

    CONSTRAINT "resume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resume_skill" (
    "resumeId" TEXT NOT NULL,
    "skillName" TEXT NOT NULL,

    CONSTRAINT "resume_skill_pkey" PRIMARY KEY ("resumeId","skillName")
);

-- CreateTable
CREATE TABLE "resume_view_audit" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "viewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip" TEXT,
    "userAgent" TEXT,

    CONSTRAINT "resume_view_audit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "resume_rawSource_rawId_key" ON "resume"("rawSource", "rawId");

-- AddForeignKey
ALTER TABLE "resume" ADD CONSTRAINT "resume_rawSource_rawId_fkey" FOREIGN KEY ("rawSource", "rawId") REFERENCES "raw_item"("source", "hhId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resume_skill" ADD CONSTRAINT "resume_skill_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resume_view_audit" ADD CONSTRAINT "resume_view_audit_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;