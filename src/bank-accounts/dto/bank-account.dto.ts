import { ApiProperty } from '@nestjs/swagger';
import {
  BankAccountType,
  BankAccountTypeEntity,
} from '../../bank-account-types/entities/bank-account-type.entity';

export class BankAccountDto {
  @ApiProperty({
    required: true,
    type: 'number',
    description: 'Id of the account owner',
  })
  id: number;

  @ApiProperty({
    required: true,
    description: 'Name of the bank account owner',
    type: 'string',
  })
  name: string;

  @ApiProperty({
    required: true,
    description: 'Last name of the bank account owner',
    type: 'string',
  })
  lastName: string;

  @ApiProperty({
    required: true,
    description: ' Current Balance of the bank account owner',
    type: 'number',
  })
  balance: number;

  @ApiProperty({
    required: true,
    enum: [],
    description: " Account owner's type of account",
    type: 'BankAccountDto',
  })
  type: BankAccountType;
}
