import { OmitType } from '@nestjs/swagger';
import { Project } from '../models/todo';

export class CreateProjectDto extends OmitType(Project, ['id']) {}
