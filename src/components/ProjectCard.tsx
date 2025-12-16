import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"; // Importing from the new alias
import { Button } from "~/components/ui/button"; // Using the shadcn Button
import { Badge } from "~/components/ui/badge";   // Using the shadcn Badge
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[]; // Let's add tags for tech stack!
  githubLink?: string;
  demoLink?: string;
}

export default function ProjectCard({ title, description, tags, githubLink, demoLink }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full bg-[hsl(222,40%,8%)] border-sky-500/10 text-white hover:border-sky-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/5">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-sky-500/10 text-sky-400 border-sky-500/20">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-slate-400 text-base">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-4">
        {githubLink && (
          <Button variant="outline" size="sm" asChild className="border-sky-500/30 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
        )}
        {demoLink && (
          <Button size="sm" asChild className="bg-sky-500 hover:bg-sky-400 text-white">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}