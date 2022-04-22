import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { BankEmployeesModule } from '../bank-employees/bank-employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { BankEmployee } from '../bank-employees/entities/bank-employee.entity';

@Module({
  imports: [
    BankEmployeesModule,
    TypeOrmModule.forFeature([Project, BankEmployee]),
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
