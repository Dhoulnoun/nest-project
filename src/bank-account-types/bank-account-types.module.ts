import { Module } from '@nestjs/common';
import { BankAccountTypesService } from './bank-account-types.service';
import { BankAccountTypesController } from './bank-account-types.controller';
import { BankAccountTypeEntity } from './entities/bank-account-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccountTypeEntity])],
  controllers: [BankAccountTypesController],
  providers: [BankAccountTypesService],
})
export class BankAccountTypesModule {}
