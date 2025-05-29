import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  precio: number;

  @IsString()
  imagen_url: string;

  @IsString()
  categoria_id: string;

  @IsString()
  marca_id: string;
}