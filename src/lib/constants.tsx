import {
  CSS,
  HTML,
  JS,
  Mongo,
  Next,
  PG,
  React,
  TS,
  Tailwind,
} from "@/components/icons";

export const NAV_LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Get In Touch",
    href: "#contact",
  },
];

export const TECH = [
  {
    icon: (props: any) => <HTML {...props} />,
    name: "HTML",
  },
  {
    icon: (props: any) => <CSS {...props} />,
    name: "CSS",
  },
  {
    icon: (props: any) => <Tailwind {...props} />,
    name: "TailwindCSS",
  },
  {
    icon: (props: any) => <JS {...props} />,
    name: "JavaScript",
  },
  {
    icon: (props: any) => <TS {...props} />,
    name: "TypeScript",
  },
  {
    icon: (props: any) => <React {...props} />,
    name: "React",
  },
  {
    icon: (props: any) => <Next {...props} />,
    name: "Next.js",
  },
  {
    icon: (props: any) => <Mongo {...props} />,
    name: "MongoDB",
  },
  {
    icon: (props: any) => <PG {...props} />,
    name: "PostgreSQL",
  },
];
