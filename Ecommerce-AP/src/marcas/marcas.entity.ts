import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('marcas')
export class Marca {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}