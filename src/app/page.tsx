import Link from "next/link";
import { projects } from "@/content/projects";
import PortfolioSection from "@/components/PortfolioSection";
import ExperienceSection from "@/components/ExperienceSection";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTanstack,
  SiHtml5,
  SiCss,
  SiGo,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { TbInfinity, TbCloudUpload } from "react-icons/tb";
import type { IconType } from "react-icons";

const skillGroups: { label: string; skills: { name: string; icon: IconType }[] }[] = [
  {
    label: "Front-End",
    skills: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TanStack Query", icon: SiTanstack },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    label: "Back-End",
    skills: [
      { name: "Go", icon: SiGo },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "CI/CD", icon: TbInfinity },
      { name: "Deployment", icon: TbCloudUpload },
    ],
  },
];

export default function Home() {
  const featured = projects[0];

  return (
    <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
      <section className="panel relative overflow-hidden p-8 sm:p-14">
        <div className="relative z-10">
          <span className="stamp inline-block bg-surface px-2 py-1 text-[0.65rem] uppercase tracking-widest text-muted">
            EP. 01
          </span>
          <div className="mt-5 h-px w-10 bg-accent" />
          <div className="relative mt-4 inline-block">
            <svg
              className="brush-stroke pointer-events-none absolute -bottom-1 -left-2 h-8 w-[calc(100%+2.5rem)] sm:-bottom-2 sm:h-12"
              viewBox="0 0 340 48"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M4 30 C 70 44, 140 6, 210 26 S 300 40, 336 14"
                stroke="var(--accent)"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
            <h1 className="relative font-[family-name:var(--font-display)] text-6xl font-semibold leading-[1.05] tracking-wide sm:text-8xl">
              AKMAL
            </h1>
          </div>
          <p className="mt-4 font-[family-name:var(--font-utility)] text-sm uppercase tracking-[0.2em] text-ink/70 sm:text-base">
            Full-Stack Software Engineer
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/80 sm:text-lg">
            Self-taught full-stack engineer. I build products end to end —
            backend, frontend, and the operational details in between.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href={`/projects/${featured.slug}`}
              className="inline-block border border-accent px-5 py-2.5 font-[family-name:var(--font-utility)] text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent hover:text-surface"
            >
              View Portfolio →
            </Link>
            <a
              href="mailto:akmal.dz.f@gmail.com"
              className="font-[family-name:var(--font-utility)] text-xs uppercase tracking-[0.15em] text-ink/70 underline decoration-line underline-offset-4 hover:text-ink"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="panel mt-8 scroll-mt-24 p-6 sm:p-8">
        <h2 className="font-[family-name:var(--font-utility)] text-xs font-bold uppercase tracking-[0.2em] text-muted">
          ▸ About me
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/75">
          I&apos;m a self-taught engineer who got into web development by
          building things I actually needed — a laundry shop management
          tool, internal ops scripts, side projects that outgrew a weekend.
          That path means I&apos;ve had to own every layer of a product:
          backend, frontend, deployment, and the debugging in between. I
          ship the frontend myself too when a project needs one — see the
          case study below for the technical details.
        </p>
        <div className="mt-5 flex flex-wrap gap-4 font-[family-name:var(--font-utility)] text-xs font-bold uppercase tracking-wide text-ink/75">
          <span>Timely delivery</span>
          <span>·</span>
          <span>Attention to detail</span>
          <span>·</span>
          <span>Clear communication</span>
        </div>
        <div className="mt-5 space-y-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-[family-name:var(--font-utility)] text-[0.65rem] font-bold uppercase tracking-widest text-muted">
                {group.label}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2 font-[family-name:var(--font-utility)] text-xs">
                {group.skills.map(({ name, icon: Icon }) => (
                  <span
                    key={name}
                    className="flex items-center gap-1.5 border border-line bg-surface px-2 py-1 uppercase tracking-wide text-ink/80"
                  >
                    <Icon className="h-3.5 w-3.5 text-ink/60" aria-hidden="true" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-5 font-[family-name:var(--font-utility)] text-sm">
          <a
            href="mailto:akmal.dz.f@gmail.com"
            className="underline decoration-2 underline-offset-4"
          >
            Email
          </a>
          <a
            href="https://github.com/AzafaDev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/akmal-dzakwan-faiz-0bb98839b"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 underline-offset-4"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <ExperienceSection />

      <PortfolioSection />
    </div>
  );
}
