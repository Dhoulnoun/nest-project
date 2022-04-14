import { ApiProperty } from '@nestjs/swagger';
import { BankAccountTypeEntity } from '../../bank-account-types/entities/bank-account-type.entity';

export class BankAccountDto {
  @ApiProperty({
    required: true,
    type: 'number',
    description: 'Id of the account owner',
  })
  id: number;

  @ApiProperty({
    description: 'Name of the bank account owner',
    type: 'string',
  })
  name: string;

  @ApiProperty({
    description: 'Last name of the bank account owner',
    type: 'string',
  })
  lastName: string;

  @ApiProperty({
    description: ' Current Balance of the bank account owner',
    type: 'number',
  })
  balance: number;

  @ApiProperty({ enum: [] })
  type: BankAccountTypeEntity;
}
