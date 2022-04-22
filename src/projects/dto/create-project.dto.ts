import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({
    required: true,
    type: 'string',
    description: 'project title',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    required: true,
    type: 'string',
    description: 'project description',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}
