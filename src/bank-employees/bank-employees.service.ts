import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBankEmployeeDto } from './dto/create-bank-employee.dto';
import { UpdateBankEmployeeDto } from './dto/update-bank-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BankEmployee } from './entities/bank-employee.entity';
import { Repository } from 'typeorm';
import { toBankEmployeeDto } from '../utils/mapper';
import { BankEmployeeDto } from './dto/bank-employee.dto';
import { LoginBankEmployeeDto } from './dto/login-bank-employee.dto';
import { comparePasswords } from '../utils/utils';
import { ParticipantDto } from './dto/participant.dto';
import { Project } from '../projects/entities/project.entity';

@Injectable()
export class BankEmployeesService {
  constructor(
    @InjectRepository(BankEmployee)
    private readonly bankEmployeesRepository: Repository<BankEmployee>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}
  async create(
    bankEmployeeDto: CreateBankEmployeeDto,
  ): Promise<BankEmployeeDto> {
    const { login, password, email, name, lastName, job, salary } =
      bankEmployeeDto;
    const bankEmployeeInDb = await this.bankEmployeesRepository.findOne({
      where: { login },
    });
    if (bankEmployeeInDb)
      throw new HttpException(
        'Bank Employee already exists',
        HttpStatus.BAD_REQUEST,
      );
    const bankEmployee: BankEmployee =
      await this.bankEmployeesRepository.create({
        login,
        password,
        email,
        name,
        lastName,
        job,
        salary,
      });
    await this.bankEmployeesRepository.save(bankEmployee);
    return toBankEmployeeDto(bankEmployee);
  }

  async findAll() {
    return await this.bankEmployeesRepository.find();
  }

  async findOne(options?: object) {
    const bankEmployee = await this.bankEmployeesRepository.findOne(options);
    return toBankEmployeeDto(bankEmployee);
  }

  async findById(id: string): Promise<BankEmployeeDto> {
    const bankEmployee = await this.bankEmployeesRepository.findOne({
      where: { id },
    });
    if (!bankEmployee) {
      throw new HttpException(
        'Bank Employee not found',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return toBankEmployeeDto(bankEmployee);
  }

  async findByLogin({
    login,
    password,
  }: LoginBankEmployeeDto): Promise<BankEmployeeDto> {
    const bankEmployee = await this.bankEmployeesRepository.findOne({
      where: { login },
    });
    if (!bankEmployee) {
      throw new HttpException(
        'Bank Employee not found',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const areEqual = await comparePasswords(bankEmployee.password, password);

    if (!areEqual)
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);

    return toBankEmployeeDto(bankEmployee);
  }

  async findByPayload({ login }: any): Promise<BankEmployeeDto> {
    return await this.findOne({ where: { login } });
  }

  async findByRole({ role }: any): Promise<BankEmployeeDto> {
    return await this.findOne({ where: { role } });
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

  async addProject(participantDto: ParticipantDto) {
    const bankEmployee = await this.bankEmployeesRepository.findOne(
      participantDto.employeeId,
    );
    const project = await this.projectRepository.findOne(
      participantDto.projectId,
    );
    if (!bankEmployee || !project) return null;
    if (bankEmployee.projects == null)
      bankEmployee.projects = new Array<Project>();
    bankEmployee.projects.push(project);
    console.log(bankEmployee.projects);
    await this.bankEmployeesRepository.save(toBankEmployeeDto(bankEmployee));
    return await this.bankEmployeesRepository.findOne(
      participantDto.employeeId,
    );
  }
}
