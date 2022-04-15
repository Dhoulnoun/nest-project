import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountTypesController } from './bank-account-types.controller';
import { BankAccountTypesService } from './bank-account-types.service';

describe('BankAccountTypesController', () => {
  let controller: BankAccountTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankAccountTypesController],
      providers: [BankAccountTypesService],
    }).compile();

    controller = module.get<BankAccountTypesController>(
      BankAccountTypesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
