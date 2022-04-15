import { Test, TestingModule } from '@nestjs/testing';
import { BankEmployeesController } from './bank-employees.controller';
import { BankEmployeesService } from './bank-employees.service';

describe('BankEmployeesController', () => {
  let controller: BankEmployeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankEmployeesController],
      providers: [BankEmployeesService],
    }).compile();

    controller = module.get<BankEmployeesController>(BankEmployeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
