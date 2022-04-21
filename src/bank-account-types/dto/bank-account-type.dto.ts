import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class BankAccountTypeDto {
  @ApiProperty({
    required: true,
    type: 'number',
    description: 'id of the bank account type',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    required: true,
    description: 'type of bank account',
    type: 'string',
    example: 'Livret A',
  })
  @IsNotEmpty()
  @IsString()
  type: string;
}
