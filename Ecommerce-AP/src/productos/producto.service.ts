import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  create(createProductoDto: CreateProductoDto) {
    const producto = this.productoRepository.create(createProductoDto);
    return this.productoRepository.save(producto);
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Producto>> {
    const queryBuilder = this.productoRepository.createQueryBuilder('producto');
    return paginate<Producto>(queryBuilder, options);
  }

  findOne(id: string) {
    return this.productoRepository.findOne({ where: { id } });
  }

  async update(id: string, updateProductoDto: UpdateProductoDto) {
    const producto = await this.productoRepository.findOne({ where: { id } });
    if (!producto) return null;
    Object.assign(producto, updateProductoDto);
    return this.productoRepository.save(producto);
  }

  async remove(id: string) {
    const producto = await this.productoRepository.findOne({ where: { id } });
    if (!producto) return null;
    return this.productoRepository.remove(producto);
  }
}