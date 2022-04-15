import { OmitType } from '@nestjs/swagger';
import { BankEmployeeDto } from './bank-employee.dto';

export class CreateBankEmployeeDto extends OmitType(BankEmployeeDto, [
  'id',
] as const) {}
