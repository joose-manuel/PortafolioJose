import { Injectable } from '@nestjs/common';
import { Project } from './interfaces/project.interface';
import { ProjectEntity } from './entities/project.entity';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';

@Injectable()
export class ProjectsService {
  private readonly projects: Project[] = [];

  findAll(): Project[] {
    return this.projects;
  }

  findOne(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

  create(dto: CreateProjectDto): Project {
    const project: Project = {
      id: crypto.randomUUID(),
      ...dto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.projects.push(project);
    return ProjectEntity.of(project);
  }

  update(id: string, dto: UpdateProjectDto): Project | undefined {
    const project = this.findOne(id);
    if (!project) {
      return undefined;
    }
    Object.assign(project, dto, { updatedAt: new Date() });
    return ProjectEntity.of(project);
  }

  remove(id: string): boolean {
    const index = this.projects.findIndex((project) => project.id === id);
    if (index === -1) {
      return false;
    }
    this.projects.splice(index, 1);
    return true;
  }
}
