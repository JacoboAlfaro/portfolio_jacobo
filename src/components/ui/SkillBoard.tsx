import type { IconType } from "react-icons";
import { FaDatabase } from "react-icons/fa";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FaCode } from "react-icons/fa";
import {
  SiAngular,
  SiCss,
  SiDbeaver,
  SiDotnet,
  SiExpo,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSharp,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { skillGroups, skillLevelLabel, type SkillLevel } from "../../data/portfolio";

const brands: Record<string, { icon: IconType; color: string; invertOnDark?: boolean }> = {
  Angular: { icon: SiAngular, color: "#DD0031" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000", invertOnDark: true },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#663399" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "C#": { icon: SiSharp, color: "#512BD4" },
  ".NET": { icon: SiDotnet, color: "#512BD4" },
  "ASP.NET Core": { icon: SiDotnet, color: "#512BD4" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Express: { icon: SiExpress, color: "#000000", invertOnDark: true },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  Expo: { icon: SiExpo, color: "#000020", invertOnDark: true },
  SQL: { icon: FaDatabase, color: "#336791" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  "SQL Server": { icon: DiMsqlServer, color: "#CC2927" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  REST: { icon: FaCode, color: "#0F766E" },
  JWT: { icon: SiJsonwebtokens, color: "#000000", invertOnDark: true },
  Swagger: { icon: SiSwagger, color: "#85EA2D" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#181717", invertOnDark: true },
  "Visual Studio": { icon: DiVisualstudio, color: "#5C2D91" },
  "Visual Studio Code": { icon: VscVscode, color: "#007ACC" }
};

const levelDot: Record<SkillLevel, string> = {
  experiencia: "bg-navy dark:bg-foam",
  proyectos: "bg-blue"
};

export default function SkillBoard() {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {skillGroups.map((group, index) => (
        <article
          key={group.title}
          data-reveal
          style={{ transitionDelay: `${index * 50}ms` }}
          className="rounded-3xl border border-navy/8 bg-surface p-6 dark:border-white/10 dark:bg-card"
        >
          <h3 className="text-lg font-semibold text-navy dark:text-foam">{group.title}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => {
              const brand = brands[item.name];
              const Icon = brand?.icon;

              return (
                <li key={item.name}>
                  <span
                    title={skillLevelLabel(item.level)}
                    className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-paper px-3 py-1.5 text-sm text-ink transition hover:-translate-y-0.5 hover:border-sky dark:border-white/10 dark:bg-night dark:text-tide"
                  >
                    {Icon && (
                      <Icon
                        size={16}
                        color={brand.color}
                        className={brand.invertOnDark ? "shrink-0 dark:invert" : "shrink-0"}
                        aria-hidden
                      />
                    )}
                    {item.name}
                    <span className={`size-2 rounded-full ${levelDot[item.level]}`} aria-hidden />
                    <span className="sr-only">, {skillLevelLabel(item.level)}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </article>
      ))}
    </div>
  );
}
