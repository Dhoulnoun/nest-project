import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JoinTable } from 'typeorm/browser';
import { BankEmployee } from '../../bank-employees/entities/bank-employee.entity';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn({ name: 'id_prj' })
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @ManyToMany(() => BankEmployee, (bankEmployee) => bankEmployee.projects)
  @JoinTable()
  bankEmployees: BankEmployee[];
}
