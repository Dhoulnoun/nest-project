import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import {
  BankAccountType,
  BankAccountTypeEntity,
} from '../../bank-account-types/entities/bank-account-type.entity';

@Entity('bankAccount')
export class BankAccountEntity {
  @PrimaryGeneratedColumn({ name: 'id_account' })
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ type: 'int', default: 0 })
  balance: number;

  @UpdateDateColumn()
  lastTransaction: Date;

  @ManyToOne(() => BankAccountTypeEntity, (type) => type.type, {
    onDelete: 'SET NULL',
  })
  type: BankAccountType;
}
