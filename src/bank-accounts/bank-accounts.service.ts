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
  async create(createBankAccountDto: CreateBankAccountDto) {
    return await this.bankAccountsRepository.save(createBankAccountDto);
  }

  findAll() {
    return this.bankAccountsRepository.find();
  }

  async findOne(id: number) {
    const bankAccount = await this.bankAccountsRepository.findOne(id);
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
}
