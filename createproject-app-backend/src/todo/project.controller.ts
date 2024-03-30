import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { ProjectDto } from './dto/project.dto';
import { CreateProjectDto } from './dto/create-todo.dto';

@ApiTags('project')
@Controller('project')
export class ProjectController {
  constructor(private readonly ProjectService: ProjectService) {}

  @ApiOperation({ summary: 'Get all project' })
  @ApiResponse({
    status: 200,
    description: 'Return all project.',
    type: ProjectDto,
    isArray: true,
  })
  @Get()
  async findAll(): Promise<ProjectDto[]> {
    return this.ProjectService.findAll();
  }

  @ApiOperation({ summary: 'Create a todo' })
  @ApiBody({ type: CreateProjectDto })
  @Post()
  async create(@Body() todo: CreateProjectDto): Promise<void> {
    this.ProjectService.create(todo);
  }
}
