import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { FirebaseService } from '../firebase/firebase.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, FirebaseService],
})
export class ProjectModule {}
