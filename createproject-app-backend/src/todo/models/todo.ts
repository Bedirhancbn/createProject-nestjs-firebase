import { ApiProperty } from '@nestjs/swagger';

export class Project {
  @ApiProperty()
  id: string;

  @ApiProperty()
  projectName: string;

  @ApiProperty()
  technologyToUse: string;

  @ApiProperty()
  developers: string;

  @ApiProperty()
  projectManager: string;

  @ApiProperty()
  cost: number;
}
