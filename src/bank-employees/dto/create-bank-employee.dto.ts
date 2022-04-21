import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBankEmployeeDto {
  @IsNotEmpty()
  login: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsNotEmpty()
  @IsString()
  job: string;
  @IsNotEmpty()
  @IsNumber()
  salary: number;
}
