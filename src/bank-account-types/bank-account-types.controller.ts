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
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BankAccountTypeDto } from './dto/bank-account-type.dto';

@ApiTags('BankAccountTypes')
@Controller('bank-account-types')
export class BankAccountTypesController {
  constructor(
    private readonly bankAccountTypesService: BankAccountTypesService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new type of bank accounts' })
  @ApiCreatedResponse({
    description: 'The Bank account type has successfully been created.',
    type: BankAccountTypeDto,
  })
  @ApiResponse({
    status: 304,
    description: 'Unable to create a new bank account type.',
  })
  async create(@Body() createBankAccountTypeDto: CreateBankAccountTypeDto) {
    const bankAccountType = await this.bankAccountTypesService.create(
      createBankAccountTypeDto,
    );
    if (bankAccountType) return bankAccountType;
    throw new HttpException('Not Created', HttpStatus.NOT_MODIFIED);
  }

  @Get()
  @ApiOperation({
    summary: 'Find all bank account types',
  })
  @ApiOkResponse({
    description: 'All bank account types were found.',
    type: BankAccountTypeDto,
    isArray: true,
  })
  findAll() {
    return this.bankAccountTypesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Returns a single bank account type',
    description: 'Returns a specific bank account type found by id',
  })
  @ApiOkResponse({
    description: 'Bank account type successfully returned',
    type: BankAccountTypeDto,
  })
  @ApiNotFoundResponse({
    description: 'Bank account type not found',
  })
  async findOne(@Param('id') id: number) {
    const bankAccountType = await this.bankAccountTypesService.findOne(+id);
    if (bankAccountType) return bankAccountType;
    throw new HttpException('Account Type not found', HttpStatus.NOT_FOUND);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Updates a single bank account type',
    description: 'Updates a specific bank account type found by id',
  })
  @ApiOkResponse({
    description: 'The bank account type has successfully been updated.',
    type: BankAccountTypeDto,
  })
  @ApiResponse({
    status: 304,
    description: 'Unable to update the bank account type.',
  })
  @ApiNotFoundResponse({
    description: 'Bank account type not found.',
  })
  @ApiParam({
    name: 'id',
    description: "The bank account type's id",
  })
  update(
    @Param() { id }: { id: number },
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
  @ApiOperation({
    summary: 'deletes a bank account type',
    description: 'deletes a specific bank account type found by id',
  })
  @ApiOkResponse({
    description: 'Bank account type successfully deleted',
    type: BankAccountTypeDto,
  })
  @ApiNotFoundResponse({
    description: 'Bank account type not found',
  })
  async remove(@Param('id') id: number) {
    const bankAccountType = await this.bankAccountTypesService.remove(id);
    if (bankAccountType) return bankAccountType;
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }
}
