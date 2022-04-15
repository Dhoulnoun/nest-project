import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BankEmployeesService } from './bank-employees.service';
import { CreateBankEmployeeDto } from './dto/create-bank-employee.dto';
import { UpdateBankEmployeeDto } from './dto/update-bank-employee.dto';

@Controller('bank-employees')
export class BankEmployeesController {
  constructor(private readonly bankEmployeesService: BankEmployeesService) {}

  @Post()
  async create(@Body() createBankEmployeeDto: CreateBankEmployeeDto) {
    const bankEmployee = await this.bankEmployeesService.create(
      createBankEmployeeDto,
    );
    if (bankEmployee) return bankEmployee;
    throw new HttpException('Not created', HttpStatus.NOT_MODIFIED);
  }

  @Get()
  findAll() {
    return this.bankEmployeesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const bankEmployee = await this.bankEmployeesService.findOne(+id);
    if (bankEmployee) return bankEmployee;
    throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBankEmployeeDto: UpdateBankEmployeeDto,
  ) {
    const bankEmployee = await this.bankEmployeesService.update(
      +id,
      updateBankEmployeeDto,
    );
    if (bankEmployee) return bankEmployee;
    throw new HttpException('Not Modified', HttpStatus.NOT_MODIFIED);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const bankEmployee = await this.bankEmployeesService.remove(+id);
    if (bankEmployee) return bankEmployee;
    throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
  }
}
