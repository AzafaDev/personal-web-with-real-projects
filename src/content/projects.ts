export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectSection = {
  heading: string;
  body: string;
  highlight?: string;
  images?: ProjectImage[];
};

export type StackGroup = {
  role: string;
  items: string[];
};

export type DemoAccount = {
  role: string;
  login: string;
};

export type ProjectCategory = "client" | "no-client";

export const categoryLabels: Record<ProjectCategory, string> = {
  client: "Client work",
  "no-client": "Personal projects",
};

export type Project = {
  slug: string;
  category: ProjectCategory;
  title: string;
  eyebrow: string;
  dek: string;
  role: string;
  timeframe: string;
  commits: string;
  status: string;
  liveDemo?: string;
  repo?: string;
  repoBackend?: string;
  repoFrontend?: string;
  pitch: string;
  stack: StackGroup[];
  sections: ProjectSection[];
  demoAccounts?: {
    note: string;
    accounts: DemoAccount[];
  };
  footerNote: string;
};

export const projects: Project[] = [
  {
    slug: "sbki-training",
    category: "client",
    title: "SBKI — Training & Certification Website",
    eyebrow: "Client project",
    dek: "A custom WordPress theme for PT SBKI, an Indonesian professional certification body (project management, finance, data, sustainability). Covers the full lifecycle: migrating an existing site from its old host into a local dev environment, building a bespoke theme against the client's brand, and redeploying to the live domain.",
    role: "Solo — AI-assisted development, deployment & migration",
    timeframe: "Jul 2026",
    commits: "Custom theme, 14+ certification landing pages",
    status: "Live in production",
    liveDemo: "https://www.trainingsbki.co.id/",
    pitch:
      "This one's worth framing honestly: I don't write PHP by hand, and I'm not claiming to. What I brought was the parts around the code — taking the client's existing WordPress site, migrating the database and files from its old host into a local (Local by Flywheel) environment I could actually work in, directing Claude Code through building a custom theme against the client's brand and content structure, and handling the redeploy back to the live domain without breaking anything. The value I actually delivered was requirements translation, review, and safe deployment/migration — the skill that's often missing even when someone does know PHP.",
    stack: [
      {
        role: "Platform",
        items: [
          "WordPress (custom theme, no page builder)",
          "Local by Flywheel for local dev",
          "Advanced Custom Fields",
          "All in One SEO, Google Site Kit",
        ],
      },
      {
        role: "Theme (AI-directed, PHP)",
        items: [
          "Custom post types: instruktur, jadwal, portfolio",
          "Templated certification pages (14+ programs)",
          "Async Google Fonts, resource hints for performance",
          "Custom admin settings panel (WhatsApp CTA config)",
        ],
      },
    ],
    sections: [
      {
        heading: "Situation",
        body: "PT SBKI, an Indonesian professional certification body (project management, finance, data, sustainability), had an existing WordPress site on an old host that needed a bespoke theme rebuild and a move to new infrastructure — without losing content, permalinks, or uptime the client would notice.",
      },
      {
        heading: "Task",
        body: "Migrate the site and database into a local environment I could safely work in, build a custom theme matching the client's brand across 14+ certification program pages, and redeploy to the live domain intact.",
      },
      {
        heading: "Action",
        body: "I pulled the site and database off the old host and stood it up locally in Local by Flywheel, then directed Claude Code through building a custom PHP theme (custom post types for instruktur/jadwal/portfolio, shared header/sidebar/CTA components reused across all 14+ program pages, ACF for structured content, async font loading and resource hints for performance). Worth being direct about: I don't write PHP by hand — my role was requirements translation, reviewing generated code against the brand and content model, and catching mismatches before they shipped. The infrastructure and migration judgment — moving a live client site with zero acceptable downtime — was mine end to end.",
      },
      {
        heading: "Result",
        body: "The rebuilt site is live in production at trainingsbki.co.id with all 14+ certification pages migrated and redeployed with no reported downtime or broken permalinks. It's a real, checkable outcome rather than a vanity metric — the honest scope of what I delivered here is migration and deployment reliability plus AI-directed theme development, not hand-written PHP expertise.",
      },
      {
        heading: "What it looks like",
        body: "Homepage hero with accreditation numbers and partner badges, and a certification directory grouped by discipline (Corporate Finance, Project Management, Data, Sustainability).",
        images: [
          {
            src: "/projects/sbki-theme/homepage-hero.jpg",
            alt: "SBKI homepage hero showing accreditation number, alumni/program stats, and AAPM/AAFM partner badges",
            caption: "Homepage — hero, credibility stats, partner badges",
          },
          {
            src: "/projects/sbki-theme/sertifikasi-directory.jpg",
            alt: "Certification directory grouped under Corporate Finance with cards for MFP, CIFA, CDA, CSDS programs",
            caption: "Certification directory — grouped by discipline",
          },
        ],
      },
    ],
    footerNote: "Case study drafted from the live site and local theme source · July 2026",
  },
  {
    slug: "laundry-app",
    category: "no-client",
    title: "Laundry Management Platform",
    eyebrow: "Portfolio case study",
    dek: "A full-stack, multi-outlet laundry operations system — order pipeline, driver dispatch, payments, attendance, and admin reporting — built as a from-scratch Go backend paired with a React/TypeScript frontend, with real fixes for race conditions and security gaps found along the way.",
    role: "Solo — backend & frontend",
    timeframe: "Jul 9 – Jul 19, 2026",
    commits: "106 backend · 107 frontend",
    status: "Live in production",
    liveDemo: "https://app.laundry-app-api.my.id/",
    repoBackend: "https://github.com/AzafaDev/laundry-app-golang",
    repoFrontend: "https://github.com/AzafaDev/laundry-app-typescript-react",
    pitch:
      "Started as a 1:1 port of a working Node.js/Express/Prisma laundry backend, then grew into an exercise in doing the same domain better in Go: replacing ad-hoc concurrency handling with proper optimistic-concurrency SQL patterns, swapping Socket.IO for a lighter SSE implementation, and closing real security gaps (CSRF, rate limiting, structured error responses) that existed in the original. Every non-trivial change was verified two ways — automated tests, and live testing against a running server — and that's genuinely how three real race conditions got caught, not by reading the code.",
    stack: [
      {
        role: "Backend",
        items: [
          "Go 1.26 + Gin",
          "PostgreSQL via pgx/v5 — no ORM",
          "sqlc — raw SQL in, typed Go out",
          "golang-migrate for schema",
          "JWT (HS256) in httpOnly cookies, bcrypt",
          "Server-Sent Events (custom pub/sub)",
          "Midtrans, Resend, Cloudinary, OpenCage",
        ],
      },
      {
        role: "Frontend",
        items: [
          "React 19 + TypeScript, Vite",
          "React Router v7",
          "TanStack Query for server state",
          "React Hook Form + Zod",
          "Tailwind CSS v4",
          "Leaflet / React-Leaflet for address picking",
          "Deployed on Vercel",
        ],
      },
    ],
    sections: [
      {
        heading: "Situation",
        body: "Starting point was a working Node.js/Express/Prisma laundry operations backend — order pipeline, driver dispatch, payments, attendance — that had known rough edges: ad-hoc concurrency handling, Socket.IO overhead for what was really one-directional events, and gaps in CSRF protection, rate limiting, and error responses.",
      },
      {
        heading: "Task",
        body: "Rebuild the same domain, solo, as a from-scratch Go backend paired with a React/TypeScript frontend — not just a port, but a chance to solve the original's concurrency and security gaps properly, across multi-outlet order management, driver dispatch, payments, attendance, and admin reporting.",
      },
      {
        heading: "Action",
        body: "Backend: Go 1.26 + Gin, PostgreSQL via pgx/v5 with sqlc (no ORM), JWT auth in httpOnly cookies, and a custom SSE pub/sub instead of Socket.IO since every real-time event only flows server→client. Frontend: React 19 + TypeScript, TanStack Query for server state, React Hook Form + Zod, Leaflet for address picking. Concurrency-sensitive operations (order status changes, driver task claims, payment confirmation) use optimistic-concurrency SQL (UPDATE ... WHERE status = $expected) instead of locks. Security gaps from the original were closed directly: double-submit-cookie CSRF protection, tiered per-IP rate limiting, structured error responses. Every non-trivial change was verified two ways — automated integration tests against a real Postgres instance under Go's race detector, and live testing against a running server.",
      },
      {
        heading: "Result",
        body: "Shipped and live in production at app.laundry-app-api.my.id, 106 backend + 107 frontend commits over an 11-day build. The live-testing discipline caught three genuine race conditions — driver task double-claiming, payment webhook idempotency, and a worker/payment station race — that code review alone had missed, which is the concrete evidence the concurrency work was necessary rather than defensive over-engineering. Personal-project caveat, stated plainly: there's no client or user base to report satisfaction metrics from — the result here is a working, race-tested system with a specific, checkable list of bugs it does not have.",
      },
      {
        heading: "What it looks like",
        body: "Role-gated views also exist for outlet admins, wash/iron/pack station workers, drivers, and super admins — order intake, station queues, dispatch, and reporting, all behind dedicated route guards rather than one generic auth check.",
        images: [
          {
            src: "/projects/laundry-app/customer-home.jpg",
            alt: "Customer home screen showing profile card and Pesan Laundry / Pesanan Saya actions",
            caption: "Customer home — profile, quick actions",
          },
          {
            src: "/projects/laundry-app/pickup-flow.jpg",
            alt: "Pickup order flow with address selection and a 7-day date picker",
            caption: "Pickup scheduling flow",
          },
        ],
      },
      {
        heading: "The operational side — logged in as Outlet Admin",
        body: "This is the part that separates it from a typical customer-facing demo: a live operations dashboard with real pipeline state, order lists, and a full sales report — screenshotted from the demo account against production data.",
        images: [
          {
            src: "/projects/laundry-app/admin-dashboard.jpg",
            alt: "Outlet admin dashboard showing 4 orders pending processing, 3 awaiting payment, 1 pending bypass request",
            caption: "Outlet admin dashboard — live order counts",
          },
          {
            src: "/projects/laundry-app/order-pipeline.jpg",
            alt: "Order list with filterable status tabs and per-order status badges like Selesai, Tiba di customer, Sedang dikirim",
            caption: "Order pipeline — filterable by status",
          },
          {
            src: "/projects/laundry-app/sales-report.jpg",
            alt: "Sales report showing total revenue Rp 20,064,474 across 230 orders, grouped monthly, with CSV export",
            caption: "Sales report — grouped by period, CSV export",
          },
        ],
      },
      {
        heading: "Customer tracking & address maps",
        body: "",
        images: [
          {
            src: "/projects/laundry-app/order-detail-timeline.jpg",
            alt: "Order detail page with a full status timeline from pickup pending through washing, ironing, packing, payment, and delivery",
            caption: "Order detail — full pipeline timeline",
          },
          {
            src: "/projects/laundry-app/address-map.jpg",
            alt: "Address editor with a Leaflet map, draggable pin, and address search",
            caption: "Address editor — Leaflet map, drag-to-adjust pin",
          },
        ],
      },
      {
        heading: "Engineering decisions worth pointing out",
        body: "These are the parts of the project that say more than \"I built a CRUD app\" — good material for interview talking points.\n\n• Optimistic concurrency instead of locks. Every racy state transition (order status changes, driver task claims, payment confirmation) uses a SQL UPDATE ... WHERE status = $expected pattern — the loser gets zero rows affected and a clean 409, no lock needed.\n\n• SSE over WebSocket. Every real-time event in the system is server→client only, so a full WebSocket library was unnecessary complexity. A plain channel-based pub/sub over stdlib http.Flusher covers it, with room semantics (user:<id>, role:<role>, outlet:<id>).\n\n• CSRF via double-submit cookie. SameSite=None cookies (required for a cross-origin frontend) disable the browser's built-in CSRF protection — closed with a non-httpOnly token cookie echoed back in a header and checked with a constant-time compare.\n\n• Tiered rate limiting. Per-IP token buckets: a generous global baseline, a strict login limiter that only counts failed attempts, and a mid-strictness tier for other auth endpoints.\n\n• Timezone correctness. Attendance/shift logic runs in Asia/Jakarta civil time via a dedicated helper, avoiding the classic bug where truncating to 24h silently operates on epoch time instead of local wall-clock date.\n\n• Role-based routing, not one auth check. Eight dedicated route guards (customer, worker, driver, outlet admin, super admin, guest, ...) so each role only sees what it's authorized for.",
        highlight:
          "Three genuine race conditions — driver task double-claiming, payment webhook idempotency, and a worker/payment station race — were only caught by live-testing concurrent requests against a running server, not by code review. Worth mentioning explicitly: it shows the testing discipline, not just the fix.",
      },
      {
        heading: "Domain coverage",
        body: "• Orders — creation with outlet-coverage/delivery-fee calculation, full pipeline (intake → wash → iron → pack → payment → delivery), item-mismatch bypass workflow, complaints.\n\n• Driver workflow — race-safe pickup/delivery task claiming and completion.\n\n• Payments — Midtrans Snap transactions, webhook handling with idempotency and amount cross-checking.\n\n• Attendance & shifts — geofenced check-in/out, scheduling, automatic absence sweep.\n\n• Admin — master data, employee management, sales/attendance/performance reports (JSON + CSV export).\n\n• Cron — auto-completion of confirmed orders, expired-token cleanup.",
      },
      {
        heading: "Testing & deployment",
        body: "Backend tests run as real integration tests against a live Postgres instance (not mocks), including concurrency regression tests that run multiple goroutines against the same resource under Go's race detector and assert exactly one winner.\n\nDeployed on a single 2 vCPU / 2GB VPS, no containers: Caddy (auto TLS) → Go binary under systemd → Postgres, all on localhost except Caddy. Frontend on Vercel. Deploys are manual (git pull && go build && systemctl restart) — no CI/CD yet, noted as a known limitation rather than glossed over.",
      },
    ],
    demoAccounts: {
      note: "The demo dataset is seeded and idempotent — every account below shares the password demo123.",
      accounts: [
        { role: "Super admin", login: "admin@demo.laundry" },
        { role: "Outlet admin", login: "outlet.admin@demo.laundry" },
        { role: "Washing worker", login: "washing@demo.laundry" },
        { role: "Ironing worker", login: "ironing@demo.laundry" },
        { role: "Packing worker", login: "packing@demo.laundry" },
        { role: "Driver", login: "driver@demo.laundry" },
        { role: "Customer", login: "rina@demo.customer" },
      ],
    },
    footerNote: "Case study drafted from both repos' READMEs and a live walkthrough of the deployed app · July 2026",
  },
  {
    slug: "company-profile-payload",
    category: "no-client",
    title: "Company Profile CMS — Payload + Next.js",
    eyebrow: "Bootcamp challenge",
    dek: "A company profile site with a headless CMS backend (Payload) for managing blog posts and media — Home, About, Services, Teams, Blog, and a public auth-gated blog-creation flow, all editable through an admin panel or the site's own Login/Create Blog pages instead of hardcoded content.",
    role: "Solo — assigned coursework, revived and redeployed independently",
    timeframe: "2026 (bootcamp) · redeployed Jul 2026",
    commits: "32 commits",
    status: "Live in production",
    liveDemo: "https://company-profile-challange-nu9r-8b3zjb4bz.vercel.app/",
    repo: "https://github.com/AzafaDev/company-profile-challange",
    pitch:
      "Worth being upfront: this was a set code challenge from Purwadhika's bootcamp, not a project I conceived myself — the brief and scope were given, not chosen. What's mine is everything after the assignment: the original deployment and database had been torn down and sat dormant, so I brought it back — diagnosed a Next.js/Payload peer-dependency conflict blocking install, removed a dead dependency that was silently causing it, provisioned a fresh Postgres database, fixed a real DB-connectivity failure that turned out to be a Neon account/project-level issue rather than a code bug, reseeded demo content, and then checked the rebuilt site against the original assignment brief itself — which turned up a real gap: the spec required a public-facing Login and Create Blog page, and the live site only had Payload's own admin panel. Built both from scratch against Payload's REST auth before calling it done.",
    stack: [
      {
        role: "Framework & CMS",
        items: [
          "Next.js 16 (App Router) + React 19 + TypeScript",
          "Payload CMS 3 — admin panel, REST + GraphQL API",
          "PostgreSQL via @payloadcms/db-postgres",
          "Lexical rich-text editor",
        ],
      },
      {
        role: "Infra & styling",
        items: [
          "Vercel (hosting) + Vercel Blob (media storage)",
          "Neon (managed Postgres)",
          "Tailwind CSS + DaisyUI",
          "Zustand for client state",
        ],
      },
    ],
    sections: [
      {
        heading: "Situation",
        body: "This was assigned coursework from Purwadhika — a company profile build using Payload CMS on Next.js, not a project I picked myself. By the time I revisited it, the original Vercel deployment and its database had both been deleted, leaving a repo that no longer ran: `npm install` failed outright, and the README was still the unedited create-next-app default.",
      },
      {
        heading: "Task",
        body: "Get the project running locally, fix whatever was actually broken rather than papering over it, provision a real database, verify the rebuilt site actually satisfies the original assignment brief, and get it back to a live, checkable deployment with working demo content — the kind of state a repo should be in before anyone treats it as a portfolio piece.",
      },
      {
        heading: "Action",
        body: "`npm install` failed on a genuine peer-dependency conflict: package.json pinned next@16.1.6, but @payloadcms/next@3.77.0 required next >=16.2.0 — bumped the version instead of forcing install past it. That surfaced a second conflict from @pemol/payload-cloudinary, a dependency that turned out to be referenced nowhere in the codebase (only Vercel Blob storage was actually wired up in payload.config.ts) — dead weight left over from an earlier experiment, removed outright. Provisioned a fresh Neon Postgres database and wrote a real .env.example (DATABASE_URL, PAYLOAD_SECRET, NEXT_PUBLIC_SERVER_URL, BLOB_READ_WRITE_TOKEN) — none of which had been documented anywhere. The admin panel then failed with a Postgres connection timeout that looked, at first, like it could be my own network — ruled that out methodically: raw TCP tests, a second network, a second Neon account, cross-checked against Neon's own documented failure modes, and narrowed it to a Neon account/project-level connectivity issue rather than anything in the code. Once resolved, seeded the CMS with real demo content (an admin user, uploaded media, 11 varied blog posts across categories) through Payload's REST API rather than leaving the live demo empty, then redeployed to Vercel. Before calling it finished, went back to the actual assignment document rather than trusting the existing repo's scope — it specifies seven required pages, including a public Login and an auth-gated Create Blog page. Neither existed; the site's only \"login\" was Payload's own admin panel, which isn't the same feature. Built a real /login page against Payload's cookie-based auth, and a /create-blog page that checks the session client-side, redirects unauthenticated visitors to /login, and on submit uploads a cover image before creating the post through Payload's REST API — verified end-to-end with cookie-authenticated requests before wiring up the UI, then again through the actual form.",
      },
      {
        heading: "Result",
        body: "Live and checkable at the URL above, with a working admin panel, a populated blog, and both required auth pages now present rather than a bare scaffold or a partially-satisfied brief. The honest scope here: the CMS structure, page layout, and original build were bootcamp-assigned work, not self-directed design — what I added was reviving a dead repo (fixed dependency conflicts, undocumented env vars, a real infra failure) and closing a real gap against the assignment brief itself, then shipping it back to production rather than leaving it as a broken or incomplete artifact.",
      },
    ],
    footerNote: "Case study drafted from the repo, its README (rewritten during this work), and a live redeploy walkthrough · July 2026",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
