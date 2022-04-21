import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { BankAccountTypeEntity } from '../../bank-account-types/entities/bank-account-type.entity';

@Entity('bankAccount')
export class BankAccountEntity {
  @PrimaryGeneratedColumn({ name: 'id_account' })
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  lastName: string;

  @Column({ type: 'int', default: 0 })
  balance: number;

  @UpdateDateColumn()
  lastTransaction: Date;

  @ManyToOne(() => BankAccountTypeEntity, (type) => type.type, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  type: number;
}
