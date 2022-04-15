import { Test, TestingModule } from '@nestjs/testing';
import { BankEmployeesService } from './bank-employees.service';

describe('BankEmployeesService', () => {
  let service: BankEmployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankEmployeesService],
    }).compile();

    service = module.get<BankEmployeesService>(BankEmployeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
