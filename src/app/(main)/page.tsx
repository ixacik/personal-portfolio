import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Code,
  Contact,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import TerminalWindow from "./_components/terminal-window";
import { TECH } from "@/lib/constants";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Drizzle, Next, PG, TS, Tailwind } from "@/components/icons";
import { ProjectCard } from "./_components/project-card";
import ContactForm from "./_components/contact-form";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center pt-xl max-md:pt-0 background-grid"
        id="home"
      >
        <a href="#contact">
          <Badge className="mb-md hover:bg-white/10">
            <div className="relative">
              <div className="bg-green-500 size-2 rounded-full mr-1 animate-ping absolute inset-0" />
              <div className="bg-green-500 size-2 rounded-full mr-1" />
            </div>
            Work Status: <span className="ml-1 text-green-500">Available</span>
          </Badge>
        </a>
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
            <Link href={"https://www.linkedin.com/in/patriklevak/"}>
              <Linkedin className="size-4" />
            </Link>
          </Button>
        </div>
        <h1 className="text-5xl max-md:text-2xl mb-md text-center">
          Hey 👋🏼, my name is{" "}
          <span className="bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500">
            Patrik.
          </span>
        </h1>
        <p className="text-muted-foreground mb-xl text-center">
          I&apos;m a junior full-stack developer from Bratislava, Slovakia.
        </p>
        <TerminalWindow />
      </section>
      <section className="pt-section pb-section-large">
        <div className="flex items-center justify-center gap-12 text-white flex-wrap">
          {TECH.map((tech) => (
            <tech.icon
              key={tech.name}
              className="fill-primary size-[48px] flex-shrink-0"
            />
          ))}
        </div>
      </section>
      <section
        className="flex flex-col items-center background-grid pb-section-large"
        id="about"
      >
        <span className="text-[2rem] mb-2">✨</span>
        <h2 className="text-3xl mb-xl max-md:text-2xl">About Me </h2>
        {/* bento grid */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
          <Card className="w-full relative bg-gradient-to-br from-transparent to-primary/5 p-md max-md:p-0">
            <CardHeader className="h-full flex flex-col justify-center">
              <Code className="size-8 mb-md" />
              <CardTitle className="pb-xs">I love coding!</CardTitle>
              <CardDescription className="leading-[1.5]">
                I&apos;m truly passionate about technology. Exploring new tech
                and diving into exciting projects is what drives and inspires me
                every day.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full relative p-md md:col-span-2 flex justify-between items-center overflow-hidden bg-gradient-to-r from-transparent to-primary/5 max-md:p-0">
            <CardHeader className="h-full flex flex-col justify-center max-w-[50%]">
              <CardTitle className="pb-xs">My current tech stack</CardTitle>
              <CardDescription className="leading-[1.5]">
                This is what I love using for my personal projects at the
                moment.
              </CardDescription>
            </CardHeader>
            <div className="grid grid-cols-2 gap-4 absolute right-[15%] top-[5%] scale-[300%] rotate-[25deg] opacity-25">
              <Next className="size-8 fill-current" />
              <PG className="size-8 fill-current" />
              <TS className="size-8 fill-current" />
              <Tailwind className="size-8 fill-current" />
              <Next className="size-8 fill-current" />
              <PG className="size-8 fill-current" />
              <TS className="size-8 fill-current" />
              <Tailwind className="size-8 fill-current" />
            </div>
          </Card>
          <Card className="w-full relative  p-md py-xl md:col-span-2 flex justify-between items-center overflow-hidden bg-gradient-to-b from-transparent to-primary/10 max-md:p-0">
            <Drizzle className="absolute size-64 fill-current opacity-25 right-0 max-md:right-[-3rem] max-md:top-[-5rem]" />
            <CardHeader className="h-full flex flex-col justify-center max-w-[75%] max-md:max-w-[100%]">
              <CardTitle className="pb-xs">
                Currently, I&apos;m learning:{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-lime-500">
                  DrizzleORM
                </span>
              </CardTitle>
              <CardDescription className="leading-[1.5] max-w-[70%] max-sm:max-w-[100%]">
                DrizzleORM is a new replacement for Prisma that enables you to
                write SQL queries in your code that are very close to actual
                SQL.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full relative  p-md flex justify-between items-center overflow-hidden bg-gradient-to-b from-transparent to-primary/10 max-md:p-0">
            <CardHeader className="h-full flex flex-col justify-center">
              <CardTitle className="pb-xs">And this is me...</CardTitle>
              <CardDescription className="leading-[1.5]">
                I&apos;m a fast learner and love a fast paced environment where
                I can learn new things and solve new problems.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
      <section className="flex flex-col items-center pb-section-large">
        <span className="text-[2rem] mb-2">💼</span>
        <h2 className="text-3xl max-md:text-2xl">Selected Projects</h2>
        <div
          id="projects"
          className="w-full mt-xl flex flex-col gap-8 background-grid"
        >
          <ProjectCard
            image={"/fuudplan-mockup.jpg"}
            title={"Fuudplan"}
            subtitle="Meal Planner"
            description={
              "Meal planner app that helps you plan your meals for the entire week. You can add recipes your own recipes along with ingredients, calories and macronutrients. Using an intuitive UI, you can plan your meals for the week and generate a shopping list. This enables you to go shopping only once a week and make sure you hit your calorie target every single day."
            }
            deploymentLink={"https://fuudplan.vercel.app/"}
            githubLink={"https://github.com/ixacik/mealplanner"}
            tech={["Next.js", "TailwindCSS", "TypeScript", "MongoDB"]}
          />
          <ProjectCard
            image={"/imaginify-mockup.jpg"}
            title={"Imaginify"}
            subtitle="AI Powered Image Manipulation"
            description={
              "Uses Cloudinary API for image manipulation including background remove, object remove, object recolor and generative fill. The app is also a fully featured SaaS - it has a Stripe payment system to buy credits, each image transformation costs the user 1 credit."
            }
            deploymentLink={"https://zap-ai.vercel.app/"}
            githubLink={"https://github.com/ixacik/zap.ai"}
            tech={["Next.js", "TailwindCSS", "TypeScript", "MongoDB"]}
          />
          <ProjectCard
            image={"/magicsearch-mockup.jpg"}
            title={"Magic Search"}
            subtitle="Semantic Search Engine"
            description={
              "Semantic search engine that uses PostgreSQL as the primary database, in addition, it also uses an Upstash vector database to store vector embeddings of the items. The items were embedded using ada-2 from OpenAI. If no results are found using text search, it will queue Upstash to find the most semantically relevant item."
            }
            deploymentLink={"https://semantic-search-engine.vercel.app/"}
            githubLink={"https://github.com/ixacik/semantic-search-engine"}
            tech={[
              "Next.js",
              "TailwindCSS",
              "TypeScript",
              "PostgreSQL",
              "OpenAI",
            ]}
          />
        </div>
      </section>
      <section
        className="flex flex-col items-center background-grid"
        id="contact"
      >
        <span className="text-[2rem] mb-2">📮</span>
        <h2 className="text-3xl mb-md max-md:text-2xl">Get In Touch</h2>
        <ContactForm />
      </section>
    </>
  );
}
