import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegistrationStatus } from './interfaces/registration-status.interface';
import { LoginStatus } from './interfaces/login-status.interface';
import { JwtPayload } from './interfaces/payload.interface';
import { BankEmployeesService } from '../bank-employees/bank-employees.service';
import { BankEmployeeDto } from '../bank-employees/dto/bank-employee.dto';
import { LoginBankEmployeeDto } from '../bank-employees/dto/login-bank-employee.dto';
import { CreateBankEmployeeDto } from '../bank-employees/dto/create-bank-employee.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly bankEmployeesService: BankEmployeesService,
  ) {}

  async register(
    bankEmployeeDto: CreateBankEmployeeDto,
  ): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'bank Employee registered',
    };
    try {
      await this.bankEmployeesService.create(bankEmployeeDto);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }
    return status;
  }

  async login(
    loginBankEmployeeDto: LoginBankEmployeeDto,
  ): Promise<LoginStatus> {
    const bankEmployee = await this.bankEmployeesService.findByLogin(
      loginBankEmployeeDto,
    );

    const token = this._createToken(bankEmployee);

    return {
      login: bankEmployee.login,
      ...token,
    };
  }

  // async validateUser(payload: JwtPayload): Promise<UserDto> {
  //   const user = await this.usersService.findByPayLoad(payload);
  //   if (!user)
  //     throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
  //
  //   return user;
  // }

  private _createToken({ login }: BankEmployeeDto): any {
    const bankEmployee: JwtPayload = { login };
    const accessToken = this.jwtService.sign(bankEmployee);
    return { accessToken };
  }

  async validateBankEmployee(payload: JwtPayload): Promise<BankEmployeeDto> {
    const bankEmployee = await this.bankEmployeesService.findByPayload(payload);
    if (!bankEmployee)
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);

    return bankEmployee;
  }
}
