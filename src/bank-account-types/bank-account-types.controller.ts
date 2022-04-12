import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BankAccountTypesService } from './bank-account-types.service';
import { CreateBankAccountTypeDto } from './dto/create-bank-account-type.dto';
import { UpdateBankAccountTypeDto } from './dto/update-bank-account-type.dto';

@Controller('bank-account-types')
export class BankAccountTypesController {
  constructor(private readonly bankAccountTypesService: BankAccountTypesService) {}

  @Post()
  create(@Body() createBankAccountTypeDto: CreateBankAccountTypeDto) {
    return this.bankAccountTypesService.create(createBankAccountTypeDto);
  }

  @Get()
  findAll() {
    return this.bankAccountTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankAccountTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankAccountTypeDto: UpdateBankAccountTypeDto) {
    return this.bankAccountTypesService.update(+id, updateBankAccountTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankAccountTypesService.remove(+id);
  }
}
