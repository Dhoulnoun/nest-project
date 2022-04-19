import { PartialType } from '@nestjs/swagger';
import { CreateBankEmployeeDto } from './create-bank-employee.dto';

export class UpdateBankEmployeeDto extends PartialType(CreateBankEmployeeDto) {}
