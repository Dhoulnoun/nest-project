import {
  CacheModule,
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
import { Project } from '../projects/entities/project.entity';

@Module({
  imports: [
    // AuthModule,
    TypeOrmModule.forFeature([BankEmployee, Project]),
    CacheModule.register({
      ttl: 5, //sec
      max: 100, //max number of items in cache
    }),
  ],
  controllers: [BankEmployeesController],
  providers: [BankEmployeesService],
  exports: [BankEmployeesService],
})
export class BankEmployeesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuditMiddleware)
      .forRoutes({ path: 'bank-employees/*', method: RequestMethod.DELETE });
  }
}
