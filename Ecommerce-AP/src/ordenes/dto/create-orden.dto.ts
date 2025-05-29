import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Orden } from '../orden.entity';

export class CreateOrdenDto extends PartialType(Orden) {
  @IsString()
  descripcion: string;
}
