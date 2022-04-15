import { ApiProperty } from '@nestjs/swagger';
import { BankAccountType } from '../entities/bank-account-type.entity';
import { IsInt, IsNotEmpty } from 'class-validator';

export class BankAccountTypeDto {
  @ApiProperty({
    required: true,
    type: 'number',
    description: 'id of the bank account type',
  })
  @IsInt()
  id: number;

  @ApiProperty({
    required: true,
    description: 'type of bank account',
    type: 'enum',
    example: 'Livret A',
  })
  @IsNotEmpty()
  type: BankAccountType;
}
