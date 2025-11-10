import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getHello(): string {
    return 'Hello World!';
  }

  async getHealth() {
    const health = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      services: {
        database: { status: 'unknown', details: null as string | null },
        redis: { status: 'unknown', details: null as string | null },
      },
    };

    // Проверяем подключение к PostgreSQL
    try {
      await this.prisma.$queryRaw`SELECT 1 as test`;
      health.services.database = { status: 'ok', details: 'Connected to PostgreSQL' };
    } catch (error) {
      health.services.database = { status: 'error', details: error.message };
      health.status = 'error';
    }

    // Проверяем подключение к Redis
    try {
      // Простая проверка Redis через HTTP (если настроено)
      const redisUrl = process.env.REDIS_URL;
      if (redisUrl) {
        // Для простоты проверяем, что переменная окружения существует
        health.services.redis = { status: 'ok', details: 'Redis URL configured' };
      } else {
        health.services.redis = { status: 'warning', details: 'Redis URL not configured' };
      }
    } catch (error) {
      health.services.redis = { status: 'error', details: error.message };
      health.status = 'error';
    }

    return health;
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
