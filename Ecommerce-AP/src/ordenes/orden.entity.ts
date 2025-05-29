import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('ordenes')
export class Orden {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cliente_nombre: string;

  @Column()
  cliente_email: string;

  @Column('decimal')
  total: number;

  @CreateDateColumn()
  fecha: Date;
}
