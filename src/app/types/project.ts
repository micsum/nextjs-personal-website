export type ProjectCardProps = {
  title: string;
  techStack: { name: string; src: string }[];
  description: string;
  imageUrl: string;
  googleSlideUrl?: string;
  githubUrl: string;
  pageUrl?: string;
};
