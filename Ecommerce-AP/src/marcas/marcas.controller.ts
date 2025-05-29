import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { CreateMarcasDto } from './dto/create-marcas.dto';
import { UpdateMarcasDto } from './dto/update-marcas.dto';
import { Marca } from './marcas.entity'; // <-- Usa singular si tu entidad es singular
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('marcas')
export class MarcasController {
    constructor(private readonly marcasService: MarcasService) {}

    @Post()
    create(@Body() createMarcasDto: CreateMarcasDto) {
        return this.marcasService.create(createMarcasDto);
    }

    @Get()
    findAll(
        @Query('page') page = 1,
        @Query('limit') limit = 10,
    ): Promise<Pagination<Marca>> { // <-- Usa singular si tu entidad es singular
        limit = limit > 100 ? 100 : limit;
        return this.marcasService.findAll({ page, limit });
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.marcasService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateMarcasDto: UpdateMarcasDto) {
        return this.marcasService.update(id, updateMarcasDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.marcasService.remove(id);
    }
}