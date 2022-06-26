import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Helloworld')
export class HelloWorldEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'NAME',
  })
  name: string;
}
