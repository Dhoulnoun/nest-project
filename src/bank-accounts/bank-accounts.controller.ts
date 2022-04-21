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
  UsePipes,
  ValidationPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { BankAccountsService } from './bank-accounts.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BankAccountDto } from './dto/bank-account.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('BankAccounts')
@Controller('bank-accounts')
export class BankAccountsController {
  constructor(private readonly bankAccountsService: BankAccountsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new bank account',
  })
  @ApiCreatedResponse({
    description: 'The bank account has successfully been created.',
    type: BankAccountDto,
  })
  @ApiResponse({
    status: 304,
    description: 'Unable to create a new bank account.',
  })
  @ApiBearerAuth()
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard())
  async create(@Body() createBankAccountDto: CreateBankAccountDto) {
    const bankAccount = await this.bankAccountsService.create(
      createBankAccountDto,
    );
    if (bankAccount) return bankAccount;
    throw new HttpException('Not created', HttpStatus.NOT_MODIFIED);
  }

  @Get()
  @ApiOperation({
    summary: 'Find all bank accounts',
  })
  @ApiOkResponse({
    description: 'All bank accounts were found.',
    type: BankAccountDto,
    isArray: true,
  })
  findAll() {
    return this.bankAccountsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Returns a single bank account',
    description: 'Returns a specific bank account found by id',
  })
  @ApiOkResponse({
    description: 'Bank account successfully returned',
    type: BankAccountDto,
  })
  @ApiNotFoundResponse({
    description: 'Bank account not found',
  })
  @UsePipes(ValidationPipe)
  async findOne(@Param('id') id: number) {
    const bankAccount = await this.bankAccountsService.findOne(+id);
    if (bankAccount) return bankAccount;
    throw new HttpException('Account not found', HttpStatus.NOT_FOUND);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Updates a single bank account',
    description: 'Updates a specific bank account found by id',
  })
  @ApiOkResponse({
    description: 'The bank account has successfully been updated.',
    type: BankAccountDto,
  })
  @ApiResponse({
    status: 304,
    description: 'Unable to update the bank account.',
  })
  @ApiNotFoundResponse({
    description: 'Bank account not found.',
  })
  @ApiParam({
    name: 'id',
    description: "The bank account's id",
  })
  @UsePipes(ValidationPipe)
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  async update(
    @Param() { id }: { id: number },
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
  @ApiOperation({
    summary: 'deletes a bank account',
    description: 'deletes a specific bank account found by id',
  })
  @ApiOkResponse({
    description: 'Bank account successfully deleted',
    type: BankAccountDto,
  })
  @ApiNotFoundResponse({
    description: 'Bank account not found',
  })
  @UsePipes(ValidationPipe)
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  async remove(@Param('id') id: number) {
    const bankAccount = await this.bankAccountsService.remove(id);
    if (bankAccount) return bankAccount;
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }
}
