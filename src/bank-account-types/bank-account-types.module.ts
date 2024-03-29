import { Module } from '@nestjs/common';
import { BankAccountTypesService } from './bank-account-types.service';
import { BankAccountTypesController } from './bank-account-types.controller';
import { BankAccountTypeEntity } from './entities/bank-account-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountEntity } from '../bank-accounts/entities/bank-account.entity';
import { AuthModule } from '../auth/auth.module';
import { BankEmployeesModule } from '../bank-employees/bank-employees.module';

@Module({
  imports: [
    AuthModule,
    BankEmployeesModule,
    TypeOrmModule.forFeature([BankAccountTypeEntity, BankAccountEntity]),
  ],
  controllers: [BankAccountTypesController],
  providers: [BankAccountTypesService],
})
export class BankAccountTypesModule {}
