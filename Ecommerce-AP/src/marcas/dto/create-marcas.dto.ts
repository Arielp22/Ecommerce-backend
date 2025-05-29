import { IsString } from 'class-validator';

export class CreateMarcasDto {
  @IsString()
  name: string;
}