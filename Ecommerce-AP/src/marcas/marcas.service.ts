import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marca } from './marcas.entity';
import { CreateMarcasDto } from './dto/create-marcas.dto';
import { UpdateMarcasDto } from './dto/update-marcas.dto';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca)
    private readonly marcasRepository: Repository<Marca>,
  ) {}

  create(createMarcasDto: CreateMarcasDto) {
    const marca = this.marcasRepository.create(createMarcasDto);
    return this.marcasRepository.save(marca);
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Marca>> {
    const queryBuilder = this.marcasRepository.createQueryBuilder('marca');
    return paginate<Marca>(queryBuilder, options);
  }

  findOne(id: string) {
    return this.marcasRepository.findOne({ where: { id } });
  }

  async update(id: string, updateMarcasDto: UpdateMarcasDto) {
    const marca = await this.marcasRepository.findOne({ where: { id } });
    if (!marca) return null;
    Object.assign(marca, updateMarcasDto);
    return this.marcasRepository.save(marca);
  }

  async remove(id: string) {
    const marca = await this.marcasRepository.findOne({ where: { id } });
    if (!marca) return null;
    return this.marcasRepository.remove(marca);
  }
}