import { Injectable } from '@nestjs/common';
import { CreateBankEmployeeDto } from './dto/create-bank-employee.dto';
import { UpdateBankEmployeeDto } from './dto/update-bank-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BankEmployee } from './entities/bank-employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BankEmployeesService {
  constructor(
    @InjectRepository(BankEmployee)
    private readonly bankEmployeesRepository: Repository<BankEmployee>,
  ) {}
  async create(createBankEmployeeDto: CreateBankEmployeeDto) {
    return await this.bankEmployeesRepository.save(createBankEmployeeDto);
  }

  async findAll() {
    return await this.bankEmployeesRepository.find();
  }

  async findOne(id: string) {
    const bankEmployee = await this.bankEmployeesRepository.findOne(id);
    return bankEmployee ? bankEmployee : null;
  }

  async update(id: string, updateBankEmployeeDto: UpdateBankEmployeeDto) {
    const bankEmployee = await this.bankEmployeesRepository.findOne(id);
    if (!bankEmployee) return null;
    await this.bankEmployeesRepository.update(id, updateBankEmployeeDto);
    return await this.bankEmployeesRepository.findOne(id);
  }

  async remove(id: string) {
    const bankEmployee = await this.bankEmployeesRepository.findOne(id);
    if (!bankEmployee) return null;
    await this.bankEmployeesRepository.remove(bankEmployee);
    return bankEmployee;
  }
}
