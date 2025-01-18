import { Section } from "@/components/ui/section";
import AnimatedGradientText from "@/components//ui/animated-gradient-text";

export const Hero = () => {
  return (
    <Section className="flex flex-col items-center rounded-lg pt-12 pb-2">
      <div>
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
            href="https://github.com/modouaicha023/galsen-github-users"
            target="_blank"
          >
            Open source - Contribuez
            <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            <AnimatedGradientText text="Galsen GitHub Stats" />
          </h1>
        </div>
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-xl text-muted-foreground">
            Visualisez les profils des développeurs sénégalais, leurs langages
            de programmation préférés, et leurs contributions.
          </p>
        </div>
      </div>
    </Section>
  );
};
