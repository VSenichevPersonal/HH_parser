-- CreateTable (with IF NOT EXISTS check)
CREATE TABLE IF NOT EXISTS "user" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex (with IF NOT EXISTS check)
CREATE UNIQUE INDEX IF NOT EXISTS "user_email_key" ON "user"("email");

