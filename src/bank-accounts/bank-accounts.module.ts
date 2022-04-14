import { Module } from '@nestjs/common';
import { BankAccountsService } from './bank-accounts.service';
import { BankAccountsController } from './bank-accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountEntity } from './entities/bank-account.entity';
import { BankAccountTypeEntity } from '../bank-account-types/entities/bank-account-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BankAccountEntity, BankAccountTypeEntity]),
  ],
  controllers: [BankAccountsController],
  providers: [BankAccountsService],
})
export class BankAccountsModule {}
