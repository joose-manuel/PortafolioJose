export class CreateProjectDto {
  title!: string;
  description!: string;
  technologies!: string[];
  url?: string;
  githubUrl?: string;
  imageUrl?: string;
}
