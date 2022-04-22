import {
  BeforeInsert,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Project } from '../../projects/entities/project.entity';
import { Role } from '../role.enum';

@Entity('bankEmployee')
export class BankEmployee {
  @PrimaryGeneratedColumn('uuid', { name: 'id_emp' })
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', name: 'last_name' })
  lastName: string;

  @Column({ type: 'int' })
  salary: number;

  @Column({ type: 'varchar' })
  job: string;

  @Column({ unique: true, type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  login: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.BASICEMP })
  role: Role;

  @ManyToMany(() => Project, (project) => project.bankEmployees)
  projects: Project[];

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
