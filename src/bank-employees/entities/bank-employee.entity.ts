import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ unique: true, type: 'varchar' })
  email: string;
}
