"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    company: string;
    period: string;
    image: string;
    experience: string[];
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      }
    }
  };

  return (
    <div id="experience" className="flex flex-col items-center px-4 py-10 -mt-24 mb-10">
      <h2 className="text-4xl font-bold mb-8 text-white">Experience!</h2>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              className="w-[400px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[500px] lg:w-[600px]"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }}
              key={idx}
            >
              <div className="flex flex-col md:flex-row items-center">
                <img
                  src={item.image}
                  alt={item.company}
                  className="w-16 h-16 md:w-24 md:h-24 mr-4"
                />
                <div>
                  <div className="relative z-20 text-lg leading-[1.6] text-gray-100 font-normal">
                    <strong>{item.company}</strong>
                  </div>
                  <div className="relative z-20 text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.period}
                  </div>
                </div>
              </div>
              <ul className="relative z-20 mt-4 space-y-2 text-gray-100">
                {item.experience.map((exp, expIdx) => (
                  <li key={expIdx} className="text-sm leading-[1.6]">
                    - {exp}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="text-sm font-normal text-white">Hover to stop scroll !</h2>
    </div>
  );
};


