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
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { BankEmployeeDto } from './dto/bank-employee.dto';

@ApiTags('BankEmployees')
@Controller('bank-employees')
export class BankEmployeesController {
  constructor(private readonly bankEmployeesService: BankEmployeesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new employee' })
  @ApiCreatedResponse({
    description: 'The bank employee has successfully been created.',
    type: BankEmployeeDto,
  })
  @ApiResponse({
    status: 304,
    description: 'Unable to create a new bank Employee.',
  })
  async create(@Body() createBankEmployeeDto: CreateBankEmployeeDto) {
    const bankEmployee = await this.bankEmployeesService.create(
      createBankEmployeeDto,
    );
    if (bankEmployee) return bankEmployee;
    throw new HttpException('Not created', HttpStatus.NOT_MODIFIED);
  }

  @Get()
  @ApiOperation({
    summary: 'Find all bank employees',
  })
  @ApiOkResponse({
    description: 'All bank employees were found.',
    type: BankEmployeeDto,
    isArray: true,
  })
  findAll() {
    return this.bankEmployeesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Returns a single bank employee',
    description: 'Returns a specific employee account found by id',
  })
  @ApiOkResponse({
    description: 'Bank employee successfully returned',
    type: BankEmployeeDto,
  })
  @ApiNotFoundResponse({
    description: 'Bank employee not found',
  })
  async findOne(@Param('id') id: string) {
    const bankEmployee = await this.bankEmployeesService.findOne(+id);
    if (bankEmployee) return bankEmployee;
    throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Updates a single bank employee',
    description: 'Updates a specific bank employee found by id',
  })
  @ApiOkResponse({
    description: 'The bank employee has successfully been updated.',
    type: BankEmployeeDto,
  })
  @ApiResponse({
    status: 304,
    description: 'Unable to update the bank employee.',
  })
  @ApiNotFoundResponse({
    description: 'Bank employee not found.',
  })
  @ApiParam({
    name: 'id',
    description: "The bank employee's id",
  })
  async update(
    @Param() { id }: { id: string },
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
  @ApiOperation({
    summary: 'deletes a bank employee',
    description: 'deletes a specific bank employee found by id',
  })
  @ApiOkResponse({
    description: 'Bank employee successfully deleted',
    type: BankEmployeeDto,
  })
  @ApiNotFoundResponse({
    description: 'Bank employee not found',
  })
  async remove(@Param('id') id: string) {
    const bankEmployee = await this.bankEmployeesService.remove(+id);
    if (bankEmployee) return bankEmployee;
    throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
  }
}
