import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Role } from '../role.enum';
import { Project } from '../../projects/entities/project.entity';

export class BankEmployeeDto {
  @ApiProperty({
    required: true,
    type: 'uuid',
    description: 'uuid of the employee',
  })
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    required: true,
    description: 'Name of the bank employee',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    required: true,
    description: 'Last name of the bank employee',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    required: true,
    description: ' Salary of the bank employee',
    type: 'number',
  })
  @IsNotEmpty()
  @IsNumber()
  salary: number;

  @ApiProperty({
    required: true,
    description: 'Job of the bank employee',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  job: string;

  @ApiProperty({
    required: true,
    description: 'Bank employee unique login',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  login: string;

  @ApiProperty({
    required: true,
    description: 'email of the bank employee',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    required: false,
    description: 'role of the bank employee',
    type: 'enum',
    default: Role.BASICEMP,
  })
  @IsOptional()
  role: Role;
  @ApiProperty({
    required: false,
    description: 'projects of the bank employee',
    type: 'array',
    nullable: true,
  })
  @IsOptional()
  projects: Project[];
}
