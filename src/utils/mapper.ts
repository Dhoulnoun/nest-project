import { UserEntity } from '../users/entities/user.entity';
import { UserDto } from '../users/dto/user.dto';
import { BankEmployee } from '../bank-employees/entities/bank-employee.entity';
import { BankEmployeeDto } from '../bank-employees/dto/bank-employee.dto';

export const toUserDto = (data: UserEntity): UserDto => {
  const { id, login, email } = data;

  return {
    id,
    login,
    email,
  };
};

export const toBankEmployeeDto = (data: BankEmployee): BankEmployeeDto => {
  const { id, name, lastName, salary, job, email, login, role, projects } =
    data;

  return { id, name, lastName, salary, job, email, login, role, projects };
};
