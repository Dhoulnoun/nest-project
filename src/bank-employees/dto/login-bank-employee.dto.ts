import { IsNotEmpty } from 'class-validator';

export class LoginBankEmployeeDto {
  @IsNotEmpty()
  readonly login: string;
  @IsNotEmpty()
  readonly password: string;
}
