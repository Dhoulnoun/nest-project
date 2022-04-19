import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwt } from './auth/strategy/jwt.constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankEmployee } from './bank-employees/entities/bank-employee.entity';
import { BankEmployeesController } from './bank-employees/bank-employees.controller';
import { AuthController } from './auth/auth.controller';
import { BankEmployeesService } from './bank-employees/bank-employees.service';
import { AuthService } from './auth/auth.service';
import { AuditMiddleware } from '../middlewares/audit.middleware';
import { JwtStrategy } from './auth/strategy/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register(jwt),
    TypeOrmModule.forFeature([BankEmployee]),
  ],
  controllers: [AuthController, BankEmployeesController],
  providers: [JwtStrategy, AuthService, BankEmployeesService],
  exports: [AuthService, BankEmployeesService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuditMiddleware)
      .forRoutes({ path: 'bank-employees/*', method: RequestMethod.DELETE });
  }
}
