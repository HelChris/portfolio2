type SkillGroup = {
  area: string;
  stack: string[];
};

const skillGroups: SkillGroup[] = [
  {
    area: "Languages",
    stack: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS"],
  },
  {
    area: "Frameworks & libraries",
    stack: [
      "React 19",
      "React Router",
      "Zustand",
      "Next.js",
      "Tailwind CSS",
      "CSS Modules",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    area: "Data & APIs",
    stack: ["REST APIs", "Fetch API", "Web Storage API", "Supabase (PostgreSQL)"],
  },
  {
    area: "Quality & testing",
    stack: [
      "ESLint",
      "Prettier",
      "Husky",
      "lint-staged",
      "GitHub Actions",
      "Vitest",
      "Testing Library",
      "Playwright",
    ],
  },
  {
    area: "Accessibility & SEO",
    stack: ["WCAG", "WAVE", "Lighthouse", "SEO optimization"],
  },
  {
    area: "Workflow & design",
    stack: [
      "Git",
      "pnpm",
      "Vite",
      "Netlify",
      "Terminal",
      "Linux",
      "VS Code",
      "Figma",
      "Obsidian",
    ],
  },
];

const textColor = "text-text";
const lineColor = "divide-teal-deep/20 border-teal-deep/20";

export function LanguagesTools() {
  return (
    <section
      id="languages-tools"
      aria-labelledby="languages-tools-heading"
      className="projects-section mb-8 min-h-100 p-4"
    >
      <h2 id="languages-tools-heading" className="text-h1 mb-4 pb-4">
        Languages &amp; Tools
      </h2>

      <div className="mx-auto max-w-6xl pb-4">
        <dl className={`divide-y border-y ${lineColor}`}>
          {skillGroups.map(({ area, stack }) => (
            <div key={area} className="grid gap-0.5 py-2 md:grid-cols-[15rem_1fr] md:gap-4">
              <dt className={`font-bold ${textColor}`}>{area}</dt>
              <dd className={textColor}>{stack.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
