import { Module } from '@nestjs/common';
import { BankEmployeesService } from './bank-employees.service';
import { BankEmployeesController } from './bank-employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankEmployee } from './entities/bank-employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankEmployee])],
  controllers: [BankEmployeesController],
  providers: [BankEmployeesService],
})
export class BankEmployeesModule {}
