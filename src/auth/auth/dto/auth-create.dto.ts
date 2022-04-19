import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthCreateDto {
  @ApiProperty({ required: true, type: String })
  @IsNotEmpty()
  readonly email?: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty()
  readonly password: string;
}
