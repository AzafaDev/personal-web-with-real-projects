"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/content/projects";
import { education, isOngoing } from "@/content/education";
import { useIsMobile } from "@/hooks/useIsMobile";

const tabs = ["Experience", "Education"] as const;
type Tab = (typeof tabs)[number];

const tabInk: Record<Tab, string> = {
  Experience: "var(--accent)",
  Education: "var(--accent-2)",
};

const PAGE_SIZE_MOBILE = 3;

function statusLabel(status: string) {
  return status.toLowerCase().startsWith("live") ? "LIVE" : status.toUpperCase();
}

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Experience");
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const pendingScrollRef = useRef(false);
  const clientProjects = projects.filter((p) => p.category === "client");

  function scrollToSectionAfterUpdate() {
    pendingScrollRef.current = true;
  }

  const [expPage, setExpPage] = useState(1);
  const expTotalPages = isMobile
    ? Math.max(1, Math.ceil(clientProjects.length / PAGE_SIZE_MOBILE))
    : 1;
  const pagedClientProjects = isMobile
    ? clientProjects.slice(
        (expPage - 1) * PAGE_SIZE_MOBILE,
        expPage * PAGE_SIZE_MOBILE
      )
    : clientProjects;

  useEffect(() => {
    setExpPage((p) => Math.min(p, expTotalPages));
  }, [expTotalPages]);

  const [eduPage, setEduPage] = useState(1);
  const eduTotalPages = isMobile
    ? Math.max(1, Math.ceil(education.length / PAGE_SIZE_MOBILE))
    : 1;
  const pagedEducation = isMobile
    ? education.slice(
        (eduPage - 1) * PAGE_SIZE_MOBILE,
        eduPage * PAGE_SIZE_MOBILE
      )
    : education;

  useEffect(() => {
    setEduPage((p) => Math.min(p, eduTotalPages));
  }, [eduTotalPages]);

  useEffect(() => {
    if (pendingScrollRef.current) {
      pendingScrollRef.current = false;
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [expPage, eduPage]);

  return (
    <section ref={sectionRef} id="experience" className="panel mt-8 scroll-mt-24 p-6 sm:p-8">
      <h2 className="font-[family-name:var(--font-utility)] text-xs font-bold uppercase tracking-[0.2em] text-muted">
        ▸ Experience
      </h2>
      <p className="mt-2 max-w-md text-xs leading-relaxed text-ink/60">
        Freelance / independent — no prior full-time employment yet, listed
        here honestly as client project work.
      </p>

      <div role="tablist" aria-label="Experience or education" className="mt-4 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              id={`tab-${tab}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab}`}
              onClick={() => setActiveTab(tab)}
              className={`border px-4 py-2 font-[family-name:var(--font-utility)] text-xs uppercase tracking-[0.15em] transition-colors ${
                isActive
                  ? "border-accent bg-accent text-surface"
                  : "border-line text-ink hover:border-ink"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {activeTab === "Experience" && (
        <div
          id="panel-Experience"
          role="tabpanel"
          aria-labelledby="tab-Experience"
          tabIndex={0}
          key="Experience"
          className="tab-panel-enter ledger-rail mt-6 space-y-7 pl-6"
          style={{ "--ink-mark": tabInk.Experience } as React.CSSProperties}
        >
          {pagedClientProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group -ml-6 flex gap-4 pl-6"
            >
              <span className="ledger-node" aria-hidden="true" />
              <div className="min-w-0 flex-1 border-b border-line pb-6 transition-colors group-last:border-b-0 group-last:pb-0 group-hover:border-ink/40">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <span className="font-[family-name:var(--font-utility)] text-xs uppercase tracking-wide text-muted">
                    {project.timeframe}
                  </span>
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                  <span className="font-[family-name:var(--font-utility)] text-xs uppercase tracking-wide text-ink/60">
                    Freelance / Contract · {project.role}
                  </span>
                  <span className="stamp inline-block px-1.5 py-0.5 text-[0.6rem] text-accent">
                    {statusLabel(project.status)}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {project.dek}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 font-[family-name:var(--font-utility)] text-xs uppercase tracking-wide text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Read case study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
      {activeTab === "Experience" && isMobile && expTotalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3 font-[family-name:var(--font-utility)] text-xs uppercase tracking-wide">
          <button
            onClick={() => {
              setExpPage((p) => Math.max(1, p - 1));
              scrollToSectionAfterUpdate();
            }}
            disabled={expPage === 1}
            className="flex-1 border border-line px-3 py-2 disabled:opacity-30"
          >
            ← Prev
          </button>
          <span className="shrink-0 text-muted">
            Page {expPage} / {expTotalPages}
          </span>
          <button
            onClick={() => {
              setExpPage((p) => Math.min(expTotalPages, p + 1));
              scrollToSectionAfterUpdate();
            }}
            disabled={expPage === expTotalPages}
            className="flex-1 border border-line px-3 py-2 disabled:opacity-30"
          >
            Next →
          </button>
        </div>
      )}

      {activeTab === "Education" && (
        <div
          id="panel-Education"
          role="tabpanel"
          aria-labelledby="tab-Education"
          tabIndex={0}
          key="Education"
          className="tab-panel-enter ledger-rail mt-6 space-y-7 pl-6"
          style={{ "--ink-mark": tabInk.Education } as React.CSSProperties}
        >
          {pagedEducation.map((entry, idx) => {
            const ongoing = isOngoing(entry.timeframe);
            const isLast = idx === pagedEducation.length - 1;
            return (
              <div key={entry.institution} className="-ml-6 flex gap-4 pl-6">
                <span
                  className={`ledger-node ${ongoing ? "ledger-node--ongoing" : ""}`}
                  aria-hidden="true"
                />
                <div
                  className={`min-w-0 flex-1 border-line pb-6 ${
                    isLast ? "border-b-0 pb-0" : "border-b"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide">
                      {entry.institution}
                    </h3>
                    <span className="font-[family-name:var(--font-utility)] text-xs uppercase tracking-wide text-muted">
                      {entry.timeframe}
                    </span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2">
                    <span className="font-[family-name:var(--font-utility)] text-xs uppercase tracking-wide text-ink/60">
                      {entry.location}
                    </span>
                    <span className="stamp inline-block px-1.5 py-0.5 text-[0.6rem] text-accent-2">
                      {ongoing ? "IN PROGRESS" : "COMPLETED"}
                    </span>
                  </div>
                  {entry.note && (
                    <p className="mt-3 text-sm leading-relaxed text-ink/75">
                      {entry.note}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {activeTab === "Education" && isMobile && eduTotalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3 font-[family-name:var(--font-utility)] text-xs uppercase tracking-wide">
          <button
            onClick={() => {
              setEduPage((p) => Math.max(1, p - 1));
              scrollToSectionAfterUpdate();
            }}
            disabled={eduPage === 1}
            className="flex-1 border border-line px-3 py-2 disabled:opacity-30"
          >
            ← Prev
          </button>
          <span className="shrink-0 text-muted">
            Page {eduPage} / {eduTotalPages}
          </span>
          <button
            onClick={() => {
              setEduPage((p) => Math.min(eduTotalPages, p + 1));
              scrollToSectionAfterUpdate();
            }}
            disabled={eduPage === eduTotalPages}
            className="flex-1 border border-line px-3 py-2 disabled:opacity-30"
          >
            Next →
          </button>
        </div>
      )}
    </section>
  );
}
