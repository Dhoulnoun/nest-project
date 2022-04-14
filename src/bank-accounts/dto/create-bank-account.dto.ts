import { OmitType } from '@nestjs/mapped-types';
import { BankAccountDto } from './bank-account.dto';

export class CreateBankAccountDto extends OmitType(BankAccountDto, [
  'id',
] as const) {}
