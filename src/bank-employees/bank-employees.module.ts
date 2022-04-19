import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { BankEmployeesService } from './bank-employees.service';
import { BankEmployeesController } from './bank-employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankEmployee } from './entities/bank-employee.entity';
import { AuditMiddleware } from '../middlewares/audit.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([BankEmployee])],
  controllers: [BankEmployeesController],
  providers: [BankEmployeesService],
})
export class BankEmployeesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuditMiddleware)
      .forRoutes({ path: 'bank-employees/*', method: RequestMethod.DELETE });
  }
}
