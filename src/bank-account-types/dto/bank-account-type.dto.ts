import { ApiProperty } from '@nestjs/swagger';
import { BankAccountType } from '../entities/bank-account-type.entity';

export class BankAccountTypeDto {
  @ApiProperty({
    required: true,
    type: 'number',
    description: 'id of the bank account type',
  })
  id: number;

  @ApiProperty({
    required: true,
    description: 'type of bank account',
    type: 'enum',
    example: 'Livret A',
  })
  type: BankAccountType;
}
