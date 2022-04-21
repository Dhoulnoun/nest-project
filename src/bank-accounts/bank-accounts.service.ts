import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { Repository } from 'typeorm';
import { BankAccountEntity } from './entities/bank-account.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BankAccountsService {
  constructor(
    @InjectRepository(BankAccountEntity)
    private readonly bankAccountsRepository: Repository<BankAccountEntity>,
  ) {}
  async create(bankAccountDto: CreateBankAccountDto) {
    return await this.bankAccountsRepository.save(bankAccountDto);
  }

  findAll() {
    return this.bankAccountsRepository.find({ relations: ['type'] });
  }

  async findOne(id: number) {
    const bankAccount = await this.bankAccountsRepository.findOne(id, {
      relations: ['type'],
    });
    if (bankAccount) return bankAccount;
    else return null;
  }

  async update(id: number, updateBankAccountDto: UpdateBankAccountDto) {
    const bankAccount = await this.bankAccountsRepository.findOne(id);
    if (!bankAccount) return null;
    await this.bankAccountsRepository.update(id, updateBankAccountDto);
    return await this.bankAccountsRepository.findOne(id);
  }

  async remove(id: number) {
    const bankAccount = await this.bankAccountsRepository.findOne(id);
    if (!bankAccount) return null;
    await this.bankAccountsRepository.remove(bankAccount);
    return bankAccount;
  }

  async addToBalance(id: number, sum: number) {
    const bankAccount = await this.bankAccountsRepository.findOne(id);
    console.log(bankAccount.balance);
    console.log('sum = ' + sum);
    if (!bankAccount || sum <= 0) return null;
    bankAccount.balance =
      parseInt(bankAccount.balance as undefined as string) + sum;
    await this.bankAccountsRepository.update(id, bankAccount);
    return await this.bankAccountsRepository.findOne(id);
  }
}
