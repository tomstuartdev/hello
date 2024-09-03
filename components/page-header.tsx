interface PageHeaderProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageHeader({
  className,
  children,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className={`max-w-3xl mx-auto ${className || ""}`}>
      <div className="text-center">
        {/* <div className="relative flex items-center justify-center gap-4 mb-5 before:h-px before:w-24 before:border-b before:[border-image:linear-gradient(to_left,theme(colors.lime.300),transparent)1] dark:before:[border-image:linear-gradient(to_left,theme(colors.lime.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-24 after:border-b after:[border-image:linear-gradient(to_right,theme(colors.lime.300),transparent)1] dark:after:[border-image:linear-gradient(to_right,theme(colors.lime.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none">
          <div className="relative text-sm font-medium text-neutral-700 bg-white dark:bg-neutral-700 inline-flex rounded-lg whitespace-nowrap px-3 py-[3px] tracking-normal before:absolute before:inset-0 before:rounded-lg before:[background-image:linear-gradient(120deg,transparent_0%,theme(colors.lime.400/.12)_33%,theme(colors.pink.400/.12)_66%,theme(colors.amber.200/.12)_100%)] dark:before:[background-image:linear-gradient(120deg,theme(colors.lime.400/.16),theme(colors.lime.600/.16)_50%,transparent_100%)] shadow">
            
            <div
              className="absolute -inset-1.5 bg-lime-500/15 dark:bg-neutral-800/65 rounded-sm -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[7px] before:bg-[length:7px_7px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.lime.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.lime.500/.56)_0.5px,transparent_0.5px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.neutral.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.neutral.600/.56)_0.5px,transparent_0.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[7px] after:bg-[length:7px_7px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.lime.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.lime.500/.56)_0.5px,transparent_0.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.neutral.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.neutral.600/.56)_0.5px,transparent_0.5px)]"
              aria-hidden="true"
            />
            <span className="relative text-neutral-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-lime-500 dark:to-lime-50">
              {children}
            </span>
          </div>
        </div> */}
        <div>
          <h1 className="uppercase text-[6rem] tracking-tighter leading-[5rem] h2 md:leading-[9rem] md:text-[11rem] font-bold text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-[#A8FF00] dark:to-[#A8FF00] pb-4">
            {title}
          </h1>
          <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
