"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const basePrompt = "levak@portfolio:~$ ";
const skillsPrompt = "levak@portfolio:~/skills$ ";

export default function TerminalWindow() {
  const el = useRef(null);
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    if (!el.current) return;
    const typed = new Typed(el.current, {
      strings: [
        phase === 0
          ? "ls"
          : phase === 1
          ? "cd skills"
          : phase === 2
          ? "ls"
          : "",
      ],
      typeSpeed: 300,
      startDelay: 1000,
      loop: false,
      showCursor: true,

      onComplete: () => {
        setPhase((prev) => prev + 1);
      },
    });

    // keep the blinking at the end
    if (phase <= 2) {
      return () => {
        typed.destroy();
      };
    }
  }, [phase]);

  return (
    <div className="w-full h-[350px] max-w-[32rem] rounded-[0.5rem] overflow-hidden dark:shadow-white/5 shadow-white/10 shadow-2xl text-white">
      <div className="bg-gradient-to-r from-gray-100 to-gray-300 flex items-center gap-2 w-full p-2">
        <div className="bg-red-500 size-3 rounded-full" />
        <div className="bg-yellow-500 size-3 rounded-full" />
        <div className="bg-green-500 size-3 rounded-full" />
      </div>
      <div className="bg-black h-full">
        <div className="p-1 flex flex-col">
          <div className="flex items-center">
            <span>{basePrompt}</span>
            <span className="ml-2" ref={phase === 0 ? el : null} />
            <span className={cn("hidden", { block: phase >= 1 })}>ls</span>
          </div>
          {phase >= 1 && (
            <>
              <div className="flex flex-wrap gap-6 text-gray-400 p-1 gap-y-0">
                <span>README.md</span>
                <span>skills</span>
                <span>cat-facts.txt</span>
                <span>cat-photos</span>
              </div>
              <div className="flex items-center">
                <span>{basePrompt}</span>
                <span className="ml-2" ref={phase === 1 ? el : null} />
                <span className={cn("hidden", { block: phase >= 2 })}>
                  cd skills
                </span>
              </div>
            </>
          )}
          {phase >= 2 && (
            <>
              <div className="flex items-center">
                <span>{`${skillsPrompt}`}</span>
                <span className="ml-2" ref={phase === 2 ? el : null} />
                <span className={cn("hidden", { block: phase >= 3 })}>ls</span>
              </div>
            </>
          )}
          {phase >= 3 && (
            <>
              <div className="flex flex-wrap gap-6 gap-y-0 text-gray-400 p-1">
                <span>HTML</span>
                <span>CSS</span>
                <span>Tailwind</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>React</span>
                <span>NextJS</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>Git</span>
              </div>
              <div className="flex items-center">
                <span>{`${skillsPrompt}`}</span>
                <span className="ml-2" ref={phase === 3 ? el : null} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
