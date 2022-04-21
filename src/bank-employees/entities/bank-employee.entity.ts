import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

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

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
