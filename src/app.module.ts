import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankAccountsModule } from './bank-accounts/bank-accounts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountTypesModule } from './bank-account-types/bank-account-types.module';
import { BankEmployeesModule } from './bank-employees/bank-employees.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BankAccountsModule,
    BankAccountTypesModule,
    BankEmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
