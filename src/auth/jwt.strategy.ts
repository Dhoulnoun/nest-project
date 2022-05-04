import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { UserDto } from '../users/dto/user.dto';
import { JwtPayload } from './interfaces/payload.interface';
import { jwtConstants } from './constants/jwt.constant';
import { BankEmployeeDto } from '../bank-employees/dto/bank-employee.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.secret,
    });
  }

  // async validate(payload: JwtPayload): Promise<UserDto> {
  //   const user = await this.authService.validateUser(payload);
  //   if (!user) {
  //     throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
  //   }
  //   return user;
  // }
  async validate(payload: JwtPayload): Promise<BankEmployeeDto> {
    const bankEmployee = await this.authService.validateBankEmployee(payload);
    if (!bankEmployee) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return bankEmployee;
  }
}
