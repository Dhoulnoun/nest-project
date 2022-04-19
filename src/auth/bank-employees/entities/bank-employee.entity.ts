import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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

  @Index('unique-user-email', { unique: true })
  @Column({ nullable: false, type: 'varchar' })
  email: string;

  @Index('unique-user-salt', { unique: true })
  @Column({ nullable: false, length: 512 })
  salt?: string;

  @Column({ nullable: false, length: 512 })
  password: string;
}
