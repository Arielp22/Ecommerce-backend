import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcasService } from './marcas.service';
import { MarcasController } from './marcas.controller';
import { Marca } from './marcas.entity'; // <-- Usa singular si tu entidad es singular

@Module({
  imports: [TypeOrmModule.forFeature([Marca])], // <-- Usa singular aquí también
  controllers: [MarcasController],
  providers: [MarcasService],
})
export class MarcasModule {}