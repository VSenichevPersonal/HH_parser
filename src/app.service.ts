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
      status: 'ok' as 'ok' | 'error',
      timestamp: new Date().toISOString(),
      services: {
        database: { status: 'unknown' as 'unknown' | 'ok' | 'error', details: null as string | null },
        redis: { status: 'unknown' as 'unknown' | 'ok' | 'warning' | 'error', details: null as string | null },
      },
    };

    // Проверяем подключение к PostgreSQL
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      health.services.database = { status: 'ok', details: 'Connected to PostgreSQL' };
    } catch (error: any) {
      health.services.database = { status: 'error', details: error?.message || 'DB check failed' };
      health.status = 'error';
    }

    // Проверяем конфигурацию Redis (пока только URL)
    try {
      const redisUrl = process.env.REDIS_URL;
      if (redisUrl) {
        health.services.redis = { status: 'ok', details: 'Redis URL configured' };
      } else {
        health.services.redis = { status: 'warning', details: 'Redis URL not configured' };
      }
    } catch (error: any) {
      health.services.redis = { status: 'error', details: error?.message || 'Redis check failed' };
      health.status = 'error';
    }

    return health;
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
