import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { NAV_LINKS } from "@/lib/constants";
import { Code } from "lucide-react";

export default function Nav() {
  return (
    <>
      <div className="fixed z-[998] inset-0 bottom-auto dark:h-32 h-20 bg-gradient-to-b from-background via-background to-transparent" />
      <nav className="bg-card border border-border z-[999] rounded-lg fixed mx-auto inset-3 bottom-auto max-w-5xl px-4 py-2 dark:shadow-white/5 shadow-black/10 shadow-2xl flex items-center justify-between">
        <Code className="size-6" />
        <ul className="flex items-center gap-8 ml-2 max-md:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} name={link.name} href={link.href} />
          ))}
        </ul>
        <ModeToggle />
      </nav>
    </>
  );
}

function NavLink({ name, href }: { name: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-muted-foreground hover:text-primary transition-all ease-linear"
      >
        {name}
      </Link>
    </li>
  );
}
