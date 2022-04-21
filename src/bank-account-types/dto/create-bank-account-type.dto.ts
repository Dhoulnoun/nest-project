import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBankAccountTypeDto {
  @IsNotEmpty()
  @IsString()
  type: string;
}
