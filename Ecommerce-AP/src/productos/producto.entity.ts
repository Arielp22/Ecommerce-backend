import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../categories/category.entity'; // Cambiado a 'Category' y ruta relativa
import { Marca } from '../marcas/marcas.entity'; // Asegúrate de que la ruta sea correcta

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column('decimal')
  precio: number;

  @Column()
  imagen_url: string;

  @ManyToOne(() => Category) // Cambiado a 'Category'
  @JoinColumn({ name: 'categoria_id' })
  categoria: Category; // Cambiado a 'Category'

  @Column()
  categoria_id: string;

  @ManyToOne(() => Marca)
  @JoinColumn({ name: 'marca_id' })
  marca: Marca;

  @Column()
  marca_id: string;
}
