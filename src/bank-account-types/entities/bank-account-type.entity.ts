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
    type: 'enum',
    enum: BankAccountType,
    default: BankAccountType['Livret A'],
  })
  type: BankAccountType;

  @OneToMany(() => BankAccountEntity, (bankAccount) => bankAccount.id)
  Accounts: BankAccountEntity[];
}
