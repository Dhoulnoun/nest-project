import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class ProjectDto {
  @ApiProperty({
    required: true,
    type: 'number',
    description: 'project id',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;

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
