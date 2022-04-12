import { Module } from '@nestjs/common';
import { BankAccountTypesService } from './bank-account-types.service';
import { BankAccountTypesController } from './bank-account-types.controller';

@Module({
  controllers: [BankAccountTypesController],
  providers: [BankAccountTypesService]
})
export class BankAccountTypesModule {}
