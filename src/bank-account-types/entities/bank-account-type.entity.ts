import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BankAccountEntity } from '../../bank-accounts/entities/bank-account.entity';

@Entity('account-types')
export class BankAccountTypeEntity {
  @PrimaryGeneratedColumn({ name: 'id_account_type' })
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
  })
  type: string;

  @OneToMany(() => BankAccountEntity, (bankAccount) => bankAccount.id)
  Account: BankAccountEntity;
}
