import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabels, getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex flex-wrap items-center gap-2">
        <span className="stamp inline-block bg-surface px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-widest">
          {project.eyebrow}
        </span>
        <span className="inline-block border border-accent bg-accent px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-widest text-surface">
          {categoryLabels[project.category]}
        </span>
      </div>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-ink/75">{project.dek}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line bg-surface px-3 py-1.5 font-[family-name:var(--font-utility)] text-xs hover:border-ink"
          >
            Live demo ↗
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line bg-surface px-3 py-1.5 font-[family-name:var(--font-utility)] text-xs hover:border-ink"
          >
            Repo ↗
          </a>
        )}
        {project.repoBackend && (
          <a
            href={project.repoBackend}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line bg-surface px-3 py-1.5 font-[family-name:var(--font-utility)] text-xs hover:border-ink"
          >
            Backend repo ↗
          </a>
        )}
        {project.repoFrontend && (
          <a
            href={project.repoFrontend}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line bg-surface px-3 py-1.5 font-[family-name:var(--font-utility)] text-xs hover:border-ink"
          >
            Frontend repo ↗
          </a>
        )}
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Role", project.role],
          ["Timeframe", project.timeframe],
          ["Commits", project.commits],
          ["Status", project.status],
        ].map(([k, v]) => (
          <div key={k} className="panel p-3">
            <dt className="font-[family-name:var(--font-utility)] text-[0.62rem] font-bold uppercase tracking-wide text-accent">
              {k}
            </dt>
            <dd className="mt-1 text-sm font-semibold tabular-nums">{v}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-10">
        <SectionHeading>Overview</SectionHeading>
        <div className="mt-3 whitespace-pre-wrap border border-line bg-ink p-5 font-[family-name:var(--font-utility)] text-sm leading-relaxed text-paper">
          {project.pitch}
        </div>
      </section>

      {project.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <SectionHeading>{section.heading}</SectionHeading>
          {section.body && (
            <p className="mt-3 whitespace-pre-wrap text-ink/85">{section.body}</p>
          )}
          {section.highlight && (
            <div className="mt-3 border border-line border-l-2 border-l-accent bg-surface p-4 text-sm">
              {section.highlight}
            </div>
          )}
          {section.images && section.images.length > 0 && (
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {section.images.map((image) => (
                <figure key={image.src} className="panel overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full border-b border-line"
                  />
                  <figcaption className="caption-box px-3 py-2 text-xs">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>
      ))}

      <section className="mt-10">
        <SectionHeading>Tech stack</SectionHeading>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {project.stack.map((group) => (
            <div key={group.role} className="panel p-5">
              <div className="font-[family-name:var(--font-utility)] text-[0.65rem] font-bold uppercase tracking-wide text-accent">
                {group.role}
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {project.demoAccounts && (
        <section className="mt-10">
          <SectionHeading>Try it live</SectionHeading>
          <p className="mt-3 text-sm text-ink/75">{project.demoAccounts.note}</p>
          <div className="panel mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line text-left">
                  <th className="px-4 py-2 font-[family-name:var(--font-utility)] text-xs uppercase text-muted">
                    Role
                  </th>
                  <th className="px-4 py-2 font-[family-name:var(--font-utility)] text-xs uppercase text-muted">
                    Login
                  </th>
                </tr>
              </thead>
              <tbody>
                {project.demoAccounts.accounts.map((account) => (
                  <tr key={account.login} className="border-b border-line/60">
                    <td className="px-4 py-2">{account.role}</td>
                    <td className="px-4 py-2 font-[family-name:var(--font-utility)] text-xs">
                      {account.login}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <p className="mt-12 border-t border-line pt-6 font-[family-name:var(--font-utility)] text-xs text-muted">
        {project.footerNote}
      </p>

      <div className="mt-8">
        <Link
          href="/#portfolio"
          className="font-[family-name:var(--font-utility)] text-sm font-bold underline decoration-2 underline-offset-4"
        >
          ← Back to all projects
        </Link>
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="relative inline-block font-[family-name:var(--font-display)] text-xl sm:text-2xl">
      {children}
      <span className="absolute -bottom-1.5 left-0 h-1.5 w-12 bg-accent" />
    </h2>
  );
}
