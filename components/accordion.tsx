"use client";

import { useState, useEffect } from "react";

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
};

export default function Accordion({
  children,
  title,
  id,
  active = false,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  return (
    <div className="bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-black/50 dark:to-black/75 rounded-lg shadow shadow-black/5 py-1">
      <h2>
        <button
          className="flex items-center justify-between w-full text-left text-lg font-semibold text-neutral-900 dark:text-neutral-100 px-4 py-2"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`faqs-text-${id}`}
        >
          <span>{title}</span>
          <span className="shrink-0 w-5 h-5 flex items-center justify-center bg-white dark:bg-black shadow-sm rounded-full ml-2">
            <svg
              className="fill-gray-500 dark:fill-neutral-500"
              width="10"
              height="6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity=".72"
                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}
              />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id={`faqs-text-${id}`}
        role="region"
        aria-labelledby={`faqs-title-${id}`}
        className={`grid text-md text-neutral-900 dark:text-neutral-300 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-2">{children}</p>
        </div>
      </div>
    </div>
  );
}
