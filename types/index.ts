export interface Project {
  id: number;
  title: string;
  category: string;
  overview: string;
  functions: string[];
  techStack: string[];
  videoUrl?: string; // Placeholder for video
  link?: string;
};