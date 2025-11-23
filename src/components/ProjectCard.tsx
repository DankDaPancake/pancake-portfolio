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
    <Card className="flex flex-col h-full bg-slate-900 border-slate-800 text-slate-100">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
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
          <Button variant="outline" size="sm" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
        )}
        {demoLink && (
          <Button size="sm" asChild>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}