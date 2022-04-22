import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class ParticipantDto {
  @ApiProperty({
    required: true,
    type: 'uuid',
    description: 'uuid of the employee',
  })
  @IsUUID()
  @IsNotEmpty()
  employeeId: string;

  @ApiProperty({
    required: true,
    type: 'number',
    description: 'id of the project',
  })
  @IsNumber()
  @IsNotEmpty()
  projectId: number;
}
