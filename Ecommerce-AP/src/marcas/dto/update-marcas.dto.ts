import { IsOptional, IsString } from 'class-validator';

export class UpdateMarcasDto {
  @IsString()
  @IsOptional()
  name?: string;
}