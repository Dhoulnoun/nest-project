import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthCreateDto } from './dto/auth-create.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('login')
  async login(@Body() createAuthDto: AuthCreateDto) {
    return await this.authService.createAuthentication(createAuthDto);
  }

  @Get('protected')
  getHello(): string {
    return this.authService.getHello();
  }
}
