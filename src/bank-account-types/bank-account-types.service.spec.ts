import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountTypesService } from './bank-account-types.service';

describe('BankAccountTypesService', () => {
  let service: BankAccountTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankAccountTypesService],
    }).compile();

    service = module.get<BankAccountTypesService>(BankAccountTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
