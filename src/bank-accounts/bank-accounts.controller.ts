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
import { BankAccountsService } from './bank-accounts.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { BankAccountEntity } from './entities/bank-account.entity';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CreateBankAccountTypeDto } from '../bank-account-types/dto/create-bank-account-type.dto';

@Controller('bank-accounts')
export class BankAccountsController {
  constructor(private readonly bankAccountsService: BankAccountsService) {}

  @Post()
  async create(@Body() createBankAccountDto: CreateBankAccountDto) {
    const bankAccount = await this.bankAccountsService.create(
      createBankAccountDto,
    );
    if (bankAccount) return bankAccount;
    throw new HttpException('Not created', HttpStatus.NOT_MODIFIED);
  }

  @Get()
  findAll() {
    return this.bankAccountsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const bankAccount = await this.bankAccountsService.findOne(+id);
    if (bankAccount) return bankAccount;
    throw new HttpException('Account not found', HttpStatus.NOT_FOUND);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBankAccountDto: UpdateBankAccountDto,
  ) {
    const bankAccount = this.bankAccountsService.update(
      id,
      updateBankAccountDto,
    );
    if (bankAccount) return bankAccount;
    throw new HttpException('Not updated', HttpStatus.NOT_MODIFIED);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const bankAccount = await this.bankAccountsService.remove(id);
    if (bankAccount) return bankAccount;
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }
  @ApiOperation({
    summary: 'Increase the balance on a given account',
    description:
      'Increase the balance of a user identified by id by a certain sum',
  })
  @ApiOkResponse({
    description: 'Amoount changed successfully ',
    type: CreateBankAccountTypeDto,
  })
  @Post(':id/add/:sum')
  async addToBalance(@Param() { id, sum }: { id: number; sum: number }) {
    const bankAccount = await this.bankAccountsService.addToBalance(id, sum);
    if (bankAccount) return bankAccount;
    throw new HttpException('Not updated', HttpStatus.NOT_MODIFIED);
  }
}
