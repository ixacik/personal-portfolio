import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { NAV_LINKS } from "@/lib/constants";

export default function Nav() {
  return (
    <nav className="bg-card border border-border z-[999] rounded-lg m-4 fixed inset-0 bottom-auto max-w-5xl mx-auto px-4 py-2 dark:shadow-white/5 shadow-black/10 shadow-2xl flex items-center justify-between">
      <ul className="flex items-center gap-8 ml-2">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.href} name={link.name} href={link.href} />
        ))}
      </ul>
      <ModeToggle />
    </nav>
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
