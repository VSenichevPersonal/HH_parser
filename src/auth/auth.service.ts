import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    // Mock authentication - always return a test user
    if (email === 'test@example.com' && password === 'password') {
      return {
        id: 1,
        email: 'test@example.com',
        role: 'admin',
        emailVerified: true,
      };
    }

    throw new UnauthorizedException('Authentication temporarily disabled for Railway testing');
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id.toString(), role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id.toString(),
        email: user.email,
        role: user.role,
      },
    };
  }
}

