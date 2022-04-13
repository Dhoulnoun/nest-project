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
import { BankAccountTypesService } from './bank-account-types.service';
import { CreateBankAccountTypeDto } from './dto/create-bank-account-type.dto';
import { UpdateBankAccountTypeDto } from './dto/update-bank-account-type.dto';

@Controller('bank-account-types')
export class BankAccountTypesController {
  constructor(
    private readonly bankAccountTypesService: BankAccountTypesService,
  ) {}

  @Post()
  async create(@Body() createBankAccountTypeDto: CreateBankAccountTypeDto) {
    const bankAccountType = await this.bankAccountTypesService.create(
      createBankAccountTypeDto,
    );
    if (bankAccountType) return bankAccountType;
    throw new HttpException('Not Created', HttpStatus.NOT_MODIFIED);
  }

  @Get()
  findAll() {
    return this.bankAccountTypesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const bankAccountType = await this.bankAccountTypesService.findOne(+id);
    if (bankAccountType) return bankAccountType;
    throw new HttpException('Account Type not found', HttpStatus.NOT_FOUND);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateBankAccountTypeDto: UpdateBankAccountTypeDto,
  ) {
    const bankAccountType = this.bankAccountTypesService.update(
      id,
      updateBankAccountTypeDto,
    );
    if (bankAccountType) return bankAccountType;
    throw new HttpException('Not Updated', HttpStatus.NOT_MODIFIED);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const bankAccountType = await this.bankAccountTypesService.remove(id);
    if (bankAccountType) return bankAccountType;
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }
}
