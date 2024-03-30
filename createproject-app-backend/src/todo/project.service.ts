import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { ProjectDto } from './dto/project.dto';
import { CreateProjectDto } from './dto/create-todo.dto';

@Injectable()
export class ProjectService {
  constructor(private firebaseService: FirebaseService) {}

  async findAll(): Promise<ProjectDto[]> {
    const result = await this.firebaseService.findAll('projects');
    return result;
  }

  async create(project: CreateProjectDto) {
    await this.firebaseService.create('projects', project);
  }
}
