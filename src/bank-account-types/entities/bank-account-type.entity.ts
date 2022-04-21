import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BankAccountEntity } from '../../bank-accounts/entities/bank-account.entity';

export enum BankAccountType {
  'Livret A',
  'Livret Jeune',
  'Compte Courrant',
  'Compte Joint',
}
@Entity('account-types')
export class BankAccountTypeEntity {
  @PrimaryGeneratedColumn({ name: 'id_account_type' })
  id: number;

  @Column({
    type: 'varchar',
    default: 'Livret A',
    unique: true,
  })
  type: string;

  @OneToMany(() => BankAccountEntity, (bankAccount) => bankAccount.id)
  Accounts: BankAccountEntity[];
}
