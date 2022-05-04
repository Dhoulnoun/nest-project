import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Project } from '../../projects/entities/project.entity';
import { Role } from '../role.enum';

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
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  role: Role;
  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  projects: Project[];
}
