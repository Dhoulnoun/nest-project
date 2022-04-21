import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateBankAccountTypeDto {
  @IsNotEmpty()
  @IsString()
  type: string;
}
