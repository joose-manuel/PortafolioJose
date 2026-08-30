import { Project } from '../interfaces/project.interface';

export class ProjectEntity implements Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;

  static of(project: Project): ProjectEntity {
    const entity = new ProjectEntity();
    Object.assign(entity, project);
    return entity;
  }
}
