import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import TerminalWindow from "./_components/terminal-window";
import Image from "next/image";
import { TECH } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center pt-section">
        <div className="flex gap-2 items-center mb-lg">
          <Button variant="outline" size="icon" asChild>
            <Link href={"https://www.github.com/ixacik"}>
              <Twitter className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href={"https://www.github.com/ixacik"}>
              <Github className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href={"https://www.github.com/ixacik"}>
              <Linkedin className="size-4" />
            </Link>
          </Button>
        </div>
        <h1 className="text-5xl mb-md">
          Hey 👋🏼, my name is{" "}
          <span className="bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500">
            Patrik.
          </span>
        </h1>
        <p className="text-muted-foreground mb-xl">
          I&apos;m a junior full-stack developer from Bratislava, Slovakia.
        </p>
        <TerminalWindow />
      </section>
      <section className="pt-section pb-section-large">
        <div className="flex items-center justify-center gap-12 text-white">
          {TECH.map((tech) => (
            <tech.icon key={tech.name} className="fill-primary size-[48px]" />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl">✨ About Me </h2>
      </section>
    </>
  );
}
