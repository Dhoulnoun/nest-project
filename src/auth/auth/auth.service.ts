import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { BankEmployeesService } from '../bank-employees/bank-employees.service';
import { AuthCreateDto } from './dto/auth-create.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => BankEmployeesService))
    private readonly bankEmployeesService: BankEmployeesService,
  ) {}

  async validateEmployee(email: string, password: string) {
    return null;
  }
  getHello() {
    return 'hello';
  }

  async createAuthentication(createAuthDto: AuthCreateDto) {
    return Promise.resolve(undefined);
  }
}
