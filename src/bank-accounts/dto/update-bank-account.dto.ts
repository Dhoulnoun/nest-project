import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateBankAccountDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  lastName: string;

  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  balance: number;

  @IsNotEmpty()
  @IsOptional()
  type: number;
}
