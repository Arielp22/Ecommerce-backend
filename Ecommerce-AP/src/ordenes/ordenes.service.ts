import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orden } from './orden.entity';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class OrdenesService {
  constructor(
    @InjectRepository(Orden)
    private readonly ordenRepository: Repository<Orden>,
  ) {}

  create(createOrdenDto: CreateOrdenDto) {
    const orden = this.ordenRepository.create(createOrdenDto);
    return this.ordenRepository.save(orden);
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Orden>> {
    const queryBuilder = this.ordenRepository.createQueryBuilder('orden');
    return paginate<Orden>(queryBuilder, options);
  }

  findOne(id: string) {
    return this.ordenRepository.findOne({ where: { id } });
  }

  async update(id: string, updateOrdenDto: UpdateOrdenDto) {
    const orden = await this.ordenRepository.findOne({ where: { id } });
    if (!orden) return null;
    Object.assign(orden, updateOrdenDto);
    return this.ordenRepository.save(orden);
  }

  async remove(id: string) {
    const orden = await this.ordenRepository.findOne({ where: { id } });
    if (!orden) return null;
    return this.ordenRepository.remove(orden);
  }
}