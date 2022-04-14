import { ApiProperty } from '@nestjs/swagger';

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
    type: 'string',
    example: 'Livret A',
  })
  type: string;
}
