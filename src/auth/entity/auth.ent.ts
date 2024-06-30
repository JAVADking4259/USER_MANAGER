import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {Length,IsEmail} from 'class-validator'

@Entity()
export class auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(3,20)
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;
}