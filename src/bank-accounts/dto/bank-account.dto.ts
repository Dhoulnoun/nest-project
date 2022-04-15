import { ApiProperty } from '@nestjs/swagger';
import { BankAccountType } from '../../bank-account-types/entities/bank-account-type.entity';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class BankAccountDto {
  @ApiProperty({
    required: true,
    type: 'number',
    description: 'Id of the account owner',
  })
  @IsInt()
  id: number;

  @ApiProperty({
    required: true,
    description: 'Name of the bank account owner',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    required: true,
    description: 'Last name of the bank account owner',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    required: true,
    description: ' Current Balance of the bank account owner',
    type: 'number',
  })
  @IsInt()
  @IsNotEmpty()
  balance: number;

  @ApiProperty({
    required: true,
    enum: [],
    description: " Account owner's type of account",
    type: 'BankAccountDto',
  })
  type: BankAccountType;
}
