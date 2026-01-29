export interface Project {
  id: number;
  title: string;
  category: string;
  overview: string;
  functions: string[];
  techStack: string[];
  videoUrl?: string; // URL for the project video

  link?: string;
};