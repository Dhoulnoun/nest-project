import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
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
import { ProjectDto } from './dto/project.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../bank-employees/role.enum';

@ApiTags('projects')
@Controller('projects')
@UseGuards(AuthGuard(), RolesGuard)
@ApiBearerAuth()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a project' })
  @ApiCreatedResponse({
    description: 'Project has successfully been created.',
    type: ProjectDto,
  })
  @ApiResponse({
    status: 304,
    description: 'Unable to create a new Project.',
  })
  @Roles(Role.ADMIN)
  async create(@Body() createProjectDto: CreateProjectDto) {
    const project = await this.projectsService.create(createProjectDto);
    if (project) return project;
    throw new HttpException('Not Created', HttpStatus.NOT_MODIFIED);
  }

  @Get()
  @ApiOperation({
    summary: 'Find all projects',
  })
  @ApiOkResponse({
    description: 'All projects were found.',
    type: ProjectDto,
    isArray: true,
  })
  @Roles(Role.ADMIN, Role.CONTRIBUTOR)
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Returns a single project',
    description: 'Returns a specific project found by id',
  })
  @ApiOkResponse({
    description: 'Project successfully returned',
    type: ProjectDto,
  })
  @ApiNotFoundResponse({
    description: 'Project not found',
  })
  @Roles(Role.CONTRIBUTOR, Role.ADMIN)
  async findOne(@Param('id') id: number) {
    const project = await this.projectsService.findOne(id);
    if (project) return project;
    throw new HttpException('Account Type not found', HttpStatus.NOT_FOUND);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Updates a single project',
    description: 'Updates a specific project found by id',
  })
  @ApiOkResponse({
    description: 'The project has successfully been updated.',
    type: ProjectDto,
  })
  @ApiResponse({
    status: 304,
    description: 'Unable to update the project.',
  })
  @ApiNotFoundResponse({
    description: 'project not found.',
  })
  @ApiParam({
    name: 'id',
    description: "The project's id",
  })
  @Roles(Role.ADMIN, Role.CONTRIBUTOR)
  update(
    @Param() { id }: { id: number },
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    const project = this.projectsService.update(id, updateProjectDto);
    if (project) return project;
    throw new HttpException('Not Updated', HttpStatus.NOT_MODIFIED);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'deletes a project',
    description: 'deletes a specific project found by id',
  })
  @ApiOkResponse({
    description: 'Project successfully deleted',
    type: ProjectDto,
  })
  @ApiNotFoundResponse({
    description: 'Project not found',
  })
  @Roles(Role.ADMIN)
  async remove(@Param('id') id: number) {
    const project = await this.projectsService.remove(id);
    if (project) return project;
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }
}
