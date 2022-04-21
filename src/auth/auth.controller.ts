import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { RegistrationStatus } from './interfaces/registration-status.interface';
import { LoginStatus } from './interfaces/login-status.interface';
import { AuthService } from './auth.service';
import { CreateBankEmployeeDto } from '../bank-employees/dto/create-bank-employee.dto';
import { LoginBankEmployeeDto } from '../bank-employees/dto/login-bank-employee.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(
    @Body() createBankEmployee: CreateBankEmployeeDto,
  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.register(
      createBankEmployee,
    );
    if (!result.success)
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);

    return result;
  }

  @Post('login')
  public async login(
    @Body() loginBankEmployeeDto: LoginBankEmployeeDto,
  ): Promise<LoginStatus> {
    return await this.authService.login(loginBankEmployeeDto);
  }
}
