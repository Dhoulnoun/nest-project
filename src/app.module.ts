import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { BankAccountsModule } from './bank-accounts/bank-accounts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountTypesModule } from './bank-account-types/bank-account-types.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CatsModule, BankAccountsModule, BankAccountTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
