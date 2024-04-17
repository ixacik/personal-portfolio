import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ArrowUpRight, Github, ListMinusIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export type Tech =
  | "Next.js"
  | "TypeScript"
  | "PostgreSQL"
  | "MongoDB"
  | "TailwindCSS"
  | "Drizzle"
  | "Prisma"
  | "Express"
  | "Node.js"
  | "React"
  | "JavaScript"
  | "Shadcn/ui"
  | "OpenAI";

type ProjectCardProps = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  deploymentLink: string;
  githubLink: string;
  tech: Tech[];
};

export function ProjectCard({
  image,
  title,
  subtitle,
  description,
  deploymentLink,
  githubLink,
  tech,
}: ProjectCardProps) {
  return (
    <Card className="w-full relative bg-gradient-to-br from-transparent to-primary/5 overflow-hidden">
      <div className="relative w-full h-[16rem]">
        <Image
          src={image}
          fill
          loading="lazy"
          alt={`${title} mockup image`}
          objectFit="cover"
        />
      </div>
      <div className="flex max-md:flex-col items-center justify-between p-md max-md:p-0">
        <CardHeader className="w-full h-full">
          <CardTitle className="mb-xs flex gap-2 items-center max-md:items-start max-md:flex-col">
            {title}
            <span className="text-[1.25rem] text-muted-foreground font-medium">
              {subtitle}
            </span>
          </CardTitle>
          <div className="flex gap-2 flex-wrap pb-sm">
            {tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <CardDescription className="max-w-prose">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="max-w-[16rem] max-md:max-w-full flex flex-col gap-2 w-full h-full justify-center p-6">
          <Button className="w-full" variant="outline" asChild>
            <Link href={deploymentLink}>
              <ArrowUpRight className="size-4 mr-xs" />
              View Deployment
            </Link>
          </Button>
          <Button className="w-full" variant="outline" asChild>
            <Link href={githubLink}>
              <Github className="size-4 mr-xs" />
              Github Repo
            </Link>
          </Button>
          <Button className="w-full" variant="outline" asChild>
            <Link href={`/projects/${title}`}>
              <ListMinusIcon className="size-4 mr-xs" />
              Read Details
            </Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
