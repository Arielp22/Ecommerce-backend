import { IsOptional, IsString } from 'class-validator';

export class UpdateOrdenDto {
  @IsOptional()
  @IsString()
  descripcion?: string;
}