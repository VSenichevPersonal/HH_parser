import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Railway Test - No Database';
  }

  async getHealth() {
    return {
      status: 'ok',
      message: 'Application is running without database dependencies',
      timestamp: new Date().toISOString(),
      services: {
        database: { status: 'disabled', details: 'Database temporarily disabled for Railway testing' },
        redis: { status: 'disabled', details: 'Redis temporarily disabled for Railway testing' },
      },
    };
  }
}
