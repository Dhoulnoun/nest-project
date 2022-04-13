import { Injectable } from '@nestjs/common';
import { CreateBankAccountTypeDto } from './dto/create-bank-account-type.dto';
import { UpdateBankAccountTypeDto } from './dto/update-bank-account-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankAccountTypeEntity } from './entities/bank-account-type.entity';

@Injectable()
export class BankAccountTypesService {
  constructor(
    @InjectRepository(BankAccountTypeEntity)
    private readonly bankAccountTypeRepository: Repository<BankAccountTypeEntity>,
  ) {}

  async create(createBankAccountTypeDto: CreateBankAccountTypeDto) {
    return await this.bankAccountTypeRepository.save(createBankAccountTypeDto);
  }

  findAll() {
    return this.bankAccountTypeRepository.find();
  }

  async findOne(id: number) {
    const bankAccountType = await this.bankAccountTypeRepository.findOne(id);
    if (bankAccountType) return bankAccountType;
    else return null;
  }

  async update(id: number, updateBankAccountTypeDto: UpdateBankAccountTypeDto) {
    const bankAccountType = await this.bankAccountTypeRepository.findOne(id);
    if (!bankAccountType) return null;
    await this.bankAccountTypeRepository.update(id, updateBankAccountTypeDto);
    return await this.bankAccountTypeRepository.findOne(id);
  }

  async remove(id: number) {
    const bankAccountType = await this.bankAccountTypeRepository.findOne(id);
    if (!bankAccountType) return null;
    await this.bankAccountTypeRepository.remove(bankAccountType);
    return bankAccountType;
  }
}
