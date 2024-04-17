import { Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full z-0 background-grid-reversed">
      <section className="p-xl flex items-center justify-between max-md:flex-col">
        <div className="max-w-[35%] max-md:max-w-full">
          <h2 className="text-3xl mb-md">
            Thanks for checking out my portfolio!
          </h2>
          <p className="text-muted-foreground max-w-[80%]">
            I&apos;m currently available for work, so don&apos;t be afraid to
            reach out.
          </p>
        </div>
        <div className="max-w-[12rem] space-y-4 text-end max-md:text-start w-full max-md:pt-xl max-md:max-w-full">
          <span className="">You can learn more about me here</span>
          <div className="flex gap-2 items-center justify-end max-md:justify-start">
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
        </div>
      </section>
    </footer>
  );
}
