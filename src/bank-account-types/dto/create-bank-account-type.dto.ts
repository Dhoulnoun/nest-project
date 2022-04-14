import { OmitType } from '@nestjs/swagger';
import { BankAccountTypeDto } from './bank-account-type.dto';

export class CreateBankAccountTypeDto extends OmitType(BankAccountTypeDto, [
  'id',
] as const) {}
