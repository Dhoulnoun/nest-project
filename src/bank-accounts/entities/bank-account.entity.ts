import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BankAccountTypeEntity } from '../../bank-account-types/entities/bank-account-type.entity';

@Entity('bankAccount')
export class BankAccountEntity {
  @PrimaryGeneratedColumn({ name: 'id_account' })
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ type: 'money', default: 0 })
  balance: number;

  @UpdateDateColumn()
  lastTransaction: Date;

  @ManyToOne(
    () => BankAccountTypeEntity,
    (bankAccountType) => bankAccountType.type,
  )
  type: BankAccountTypeEntity;
}
