import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function createAdminUser() {
  const email = "admin@mail.ru";
  const password = "admin@mail.ru";

  try {
    // Проверяем, существует ли уже пользователь
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log(`Пользователь ${email} уже существует. Обновляем пароль и роль...`);
      
      const hashedPassword = await bcrypt.hash(password, 10);
      
      await prisma.user.update({
        where: { email },
        data: {
          password: hashedPassword,
          role: "superadmin",
          emailVerified: true,
        },
      });
      
      console.log(`✅ Пользователь ${email} обновлен как суперадмин`);
    } else {
      // Хэшируем пароль
      const hashedPassword = await bcrypt.hash(password, 10);

      // Создаем пользователя
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          role: "superadmin",
          emailVerified: true,
        },
      });

      console.log(`✅ Суперадмин создан:`);
      console.log(`   Email: ${user.email}`);
      console.log(`   ID: ${user.id}`);
      console.log(`   Роль: ${user.role}`);
      console.log(`   Email подтвержден: ${user.emailVerified}`);
    }
  } catch (error) {
    console.error("❌ Ошибка при создании пользователя:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();

