"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categoryLabels, getPreviewImage, projects, type ProjectCategory } from "@/content/projects";
import { useIsMobile } from "@/hooks/useIsMobile";

const categoryOrder: ProjectCategory[] = ["client", "no-client"];
const PAGE_SIZE_DESKTOP = 4;
const PAGE_SIZE_MOBILE = 3;

export default function PortfolioSection() {
  const isMobile = useIsMobile();
  const pageSize = isMobile ? PAGE_SIZE_MOBILE : PAGE_SIZE_DESKTOP;
  const availableCategories = categoryOrder.filter((category) =>
    projects.some((p) => p.category === category)
  );
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    availableCategories[0]
  );
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const pendingScrollRef = useRef(false);

  const items = useMemo(
    () => projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const pageItems = items.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  useEffect(() => {
    if (pendingScrollRef.current) {
      pendingScrollRef.current = false;
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [page]);

  function selectCategory(category: ProjectCategory) {
    setActiveCategory(category);
    setPage(1);
  }

  function goToPage(next: number) {
    setPage(next);
    pendingScrollRef.current = true;
  }

  return (
    <section ref={sectionRef} id="portfolio" className="mt-14 scroll-mt-24">
      <h2 className="font-[family-name:var(--font-utility)] text-xs uppercase tracking-[0.2em] text-muted">
        ▸ Portfolio
      </h2>

      <div
        role="tablist"
        aria-label="Project category"
        className="mt-4 flex gap-2"
      >
        {availableCategories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              onClick={() => selectCategory(category)}
              className={`border px-4 py-2 font-[family-name:var(--font-utility)] text-xs uppercase tracking-[0.15em] transition-colors ${
                isActive
                  ? "border-accent bg-accent text-surface"
                  : "border-line text-ink hover:border-ink"
              }`}
            >
              {categoryLabels[category]}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5">
        {pageItems.map((project) => {
          const preview = getPreviewImage(project);
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="panel hover-tilt flex flex-col overflow-hidden sm:flex-row"
            >
              {preview && (
                <div className="relative h-44 w-full flex-shrink-0 border-b border-line sm:h-auto sm:w-56 sm:border-b-0 sm:border-r">
                  <Image
                    src={preview.src}
                    alt={preview.alt}
                    fill
                    sizes="(min-width: 640px) 14rem, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-ink/75">{project.dek}</p>
              </div>
            </Link>
          );
        })}
        {pageItems.length === 0 && (
          <p className="text-sm text-muted">No projects in this category yet.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3 font-[family-name:var(--font-utility)] text-xs uppercase tracking-wide sm:gap-4">
          <button
            onClick={() => goToPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="flex-1 border border-line px-3 py-2 disabled:opacity-30 sm:flex-none sm:py-1.5"
          >
            ← Prev
          </button>
          <span className="shrink-0 text-muted">
            Page {page} / {totalPages}
          </span>
          <button
            onClick={() => goToPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="flex-1 border border-line px-3 py-2 disabled:opacity-30 sm:flex-none sm:py-1.5"
          >
            Next →
          </button>
        </div>
      )}
    </section>
  );
}
