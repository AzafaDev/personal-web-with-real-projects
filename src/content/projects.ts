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
    eyebrow: "WordPress · PHP",
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
          "All in One SEO",
          "Google Site Kit",
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
    slug: "topbaja",
    category: "client",
    title: "TopBaja — Steel & Concrete Materials Storefront",
    eyebrow: "WordPress · WooCommerce · Elementor",
    dek: "A WooCommerce storefront for TopBaja (pusatbesibeton.com), a steel and concrete materials distributor — full product catalog with categories and specs (besi hollow, besi beton, profil besi, plat, baja H-beam), built from scratch on WordPress and handed off complete.",
    role: "Solo — full setup: WordPress, WooCommerce, product catalog, Elementor design",
    timeframe: "2026 · completed, no ongoing maintenance",
    commits: "Full catalog build-out across multiple product categories",
    status: "Live in production",
    liveDemo: "https://pusatbesibeton.com/",
    pitch:
      "Built this one from zero rather than inheriting existing infrastructure, unlike the SBKI project: fresh WordPress install, WooCommerce configured as the product engine, and the storefront designed in Elementor against the client's brand. The catalog itself — steel and concrete construction materials across several categories, each with sizes, thickness, and length specs — is the bulk of the real content work, not just theme styling. Worth being precise about scope: checkout is WooCommerce's cart used as a product list, not a live payment gateway — orders close over WhatsApp, which matches how this segment of B2B/B2C construction-materials sales actually happens in Indonesia rather than being a gap. The site's blog, which runs a steady cadence of city/product-targeted local-SEO posts, is maintained by a dedicated SEO specialist on the client's side, not part of what I built or maintain.",
    stack: [
      {
        role: "Platform",
        items: [
          "WordPress",
          "WooCommerce (product catalog, cart, categories/taxonomy)",
          "Elementor (page building, no custom theme code)",
          "WhatsApp click-to-chat integration for order closing",
        ],
      },
    ],
    sections: [
      {
        heading: "Situation",
        body: "TopBaja needed an online storefront for its steel and concrete materials business (besi hollow, besi beton, profil besi, plat, baja H-beam) — no existing site or infrastructure to inherit, a from-zero build.",
      },
      {
        heading: "Task",
        body: "Stand up a full WordPress + WooCommerce storefront with a real, browsable product catalog organized by category and spec, styled in Elementor against the client's brand, with an ordering flow that matched how the client actually closes sales — over WhatsApp, not an online payment gateway.",
      },
      {
        heading: "Action",
        body: "Installed and configured WordPress with WooCommerce as the catalog/cart engine, built the product taxonomy (Besi Hollow, Besi Beton, Profil Besi, Plat, Baja, and more), and populated it with individual product listings carrying real specs — dimensions, thickness, length — rather than generic placeholder entries. Designed the storefront pages (home, shop grid with category/sort filtering, single product pages) in Elementor. Wired WooCommerce's cart to function as an order-collection step rather than a payment checkout, with a persistent WhatsApp click-to-chat widget for closing the sale — the right call for a B2B/B2C construction-materials business where price negotiation and delivery logistics happen over chat, not a fully self-serve checkout.",
      },
      {
        heading: "Result",
        body: "Live in production at pusatbesibeton.com with a full, browsable product catalog and a WhatsApp-based ordering flow that fits how the client's sales actually close. The build is complete with no ongoing maintenance on my end — the site's local-SEO blog content is written and maintained separately by a dedicated SEO specialist on the client's side, not something I authored or manage.",
      },
      {
        heading: "What it looks like",
        body: "The shop grid with category filtering and a single product page showing size/thickness/length specs — standard WooCommerce structure, Elementor-styled to the client's brand.",
        images: [
          {
            src: "/projects/topbaja/shop-grid.jpg",
            alt: "TopBaja WooCommerce shop grid showing steel products like Besi Hollow, Pondasi Cakar Ayam, Plat Lubang, and Baja H-Beam with prices and Add to Cart buttons",
            caption: "Shop — full product catalog with category filtering",
          },
          {
            src: "/projects/topbaja/product-detail.jpg",
            alt: "Single product page for Besi Hollow 25x50x1.6mm x 6m showing size, thickness, length specs and an Add to Cart button",
            caption: "Product detail — specs, category breadcrumbs, add to cart",
          },
        ],
      },
    ],
    footerNote: "Case study drafted from a live walkthrough of the deployed storefront · July 2026",
  },
  {
    slug: "tokobesibeton",
    category: "client",
    title: "Toko Besi Beton (HiSteel) — Steel Materials Storefront",
    eyebrow: "WordPress · WooCommerce · Elementor",
    dek: "A WooCommerce storefront for Toko Besi Beton (HiSteel), a steel and building-materials retailer with nine branches across Java — a full product catalog (besi beton, hollow, profil, floordeck, wire mesh, roofing) built from scratch on WordPress.",
    role: "Solo — full setup: WordPress, WooCommerce, product catalog, Elementor design",
    timeframe: "2025 · completed, no ongoing maintenance",
    commits: "Full catalog build-out across multiple product categories",
    status: "Live in production",
    liveDemo: "https://www.tokobesibeton.web.id/",
    pitch:
      "Same shape of build as TopBaja — fresh WordPress install, WooCommerce as the catalog engine, storefront designed in Elementor — for a different client in the same steel/construction-materials space, HiSteel, which runs nine physical branches across Java. Checkout here is the same pattern too: WooCommerce's cart works as a product list, not a live payment gateway, with orders and consultation closing over direct contact rather than self-serve checkout. SEO is handled by a dedicated specialist on the client's side, not something I built or maintain.",
    stack: [
      {
        role: "Platform",
        items: [
          "WordPress",
          "WooCommerce (product catalog, cart, categories/taxonomy)",
          "Elementor (page building, no custom theme code)",
          "WhatsApp click-to-chat integration for order closing",
        ],
      },
    ],
    sections: [
      {
        heading: "Situation",
        body: "Toko Besi Beton (HiSteel), a steel and building-materials retailer with nine branch locations across Java (Bekasi, Jakarta, Tangerang, Bogor, Karawang, Cirebon, Surabaya areas), needed an online storefront for its product range — besi beton, steel profiles, hollow, floordeck, wire mesh, roofing materials — no existing site to inherit.",
      },
      {
        heading: "Task",
        body: "Stand up a full WordPress + WooCommerce storefront with a real, browsable product catalog organized by category, styled in Elementor against the client's brand, with an ordering flow matching how the client actually closes sales.",
      },
      {
        heading: "Action",
        body: "Installed and configured WordPress with WooCommerce as the catalog/cart engine, built out the product taxonomy (Besi Profil, Besi Hollow Galvanis, Floordeck/Bondek, Angkur Baja, Expanded Metal, and more), and populated it with individual listings carrying real specs and pricing rather than placeholders. Designed the storefront pages (home, shop grid with search/category filtering, single product pages) in Elementor, and wired the cart to function as an order-collection step rather than a payment checkout, with direct contact for closing the sale — the same fit-for-purpose pattern as other B2B/B2C construction-materials clients in this niche.",
      },
      {
        heading: "Result",
        body: "Live in production at tokobesibeton.web.id with a full, searchable/filterable product catalog spanning the client's nine-branch product range. The build is complete with no ongoing maintenance on my end — SEO is handled separately by a dedicated specialist on the client's side.",
      },
      {
        heading: "What it looks like",
        body: "The homepage's value-proposition section and the shop grid with search and category filtering — standard WooCommerce structure, Elementor-styled to the client's HiSteel brand.",
        images: [
          {
            src: "/projects/tokobesibeton/homepage.jpg",
            alt: "Toko Besi Beton homepage showing a red-branded hero with a HiSteel-uniformed model and a 'Kenapa Harus Belanja Di Toko Besi Beton?' value proposition list",
            caption: "Homepage — hero, value proposition, featured products",
          },
          {
            src: "/projects/tokobesibeton/shop-grid.jpg",
            alt: "Toko Besi Beton WooCommerce shop grid with search bar, category filter, and product cards like Pipa Hitam Welded, Besi Hollow Galvanis, and Floordeck CBM Topdeck with prices",
            caption: "Shop — full product catalog with search and category filtering",
          },
        ],
      },
    ],
    footerNote: "Case study drafted from a live walkthrough of the deployed storefront · July 2026",
  },
  {
    slug: "surya-gemilang-aluminium",
    category: "client",
    title: "Surya Gemilang Aluminium — Company Profile",
    eyebrow: "WordPress · Elementor",
    dek: "A company profile site for Surya Gemilang Aluminium (PT Makmur Madani Mulia), a Bekasi-based aluminum installer (kusen, pintu, jendela) operating since 2009 — built on WordPress with Elementor, product/gallery pages, and WhatsApp-based contact.",
    role: "Solo — WordPress & Elementor build",
    timeframe: "2026",
    commits: "Full site build — Home, About, Products, Gallery, Blog",
    status: "Live in production",
    liveDemo: "https://suryagemilangaluminium.com/",
    pitch:
      "A straightforward company profile build on WordPress with Elementor — no custom theme code, no e-commerce. The client sells aluminum doors, windows, and frames (kusen, pintu, jendela) and has been operating since 2009; the site's job is to establish credibility and route leads to WhatsApp, not to sell online. Worth being precise about scope: SEO and Google Ads are run by a dedicated specialist on the client's side, not something I built or maintain.",
    stack: [
      {
        role: "Platform",
        items: [
          "WordPress",
          "Elementor (page building, no custom theme code)",
          "WhatsApp click-to-chat for lead contact",
        ],
      },
    ],
    sections: [
      {
        heading: "Situation",
        body: "Surya Gemilang Aluminium, a Bekasi-based aluminum installer (doors, windows, frames) operating since 2009, needed a company profile site to establish credibility and convert visitors into WhatsApp leads.",
      },
      {
        heading: "Task",
        body: "Build a company profile site on WordPress covering Home, About, Products, Gallery, and Blog, styled in Elementor against the client's brand, with clear WhatsApp-based contact paths.",
      },
      {
        heading: "Action",
        body: "Set up WordPress and built the site page-by-page in Elementor: a homepage covering the four key differentiators (experience since 2009, quality, pricing, professional team), a product section split into doors/windows/frames, a gallery of completed projects (butterfly windows, sliding windows, curved windows, shower enclosures) with client testimonials, and WhatsApp click-to-chat links wired per project category rather than a single generic contact button.",
      },
      {
        heading: "Result",
        body: "Live in production at suryagemilangaluminium.com. SEO and Google Ads are handled by a dedicated specialist on the client's side — outside the scope of this build.",
      },
      {
        heading: "What it looks like",
        body: "Homepage hero with the WhatsApp-led CTA, and the gallery section showing completed installation work filterable by category (Pintu, Jendela, Kusen, Workshop).",
        images: [
          {
            src: "/projects/surya-gemilang-aluminium/homepage-hero.jpg",
            alt: "Surya Gemilang Aluminium homepage hero with 'Aluminium Berkualitas, Harga Terjangkau' headline and a Konsultasi Gratis CTA button",
            caption: "Homepage — hero, tagline, WhatsApp-led CTA",
          },
          {
            src: "/projects/surya-gemilang-aluminium/gallery.jpg",
            alt: "Gallery section titled Galeri Kami with filter tabs for Pintu, Jendela, Kusen, Workshop, and Lain-lain, showing completed installation photos",
            caption: "Gallery — completed projects, filterable by category",
          },
        ],
      },
    ],
    footerNote: "Case study drafted from a live walkthrough of the deployed site · July 2026",
  },
  {
    slug: "laundry-app",
    category: "no-client",
    title: "Laundry Management Platform",
    eyebrow: "Go · React · TypeScript",
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
          "Go 1.26",
          "Gin",
          "PostgreSQL via pgx/v5 — no ORM",
          "sqlc — raw SQL in, typed Go out",
          "golang-migrate for schema",
          "JWT (HS256) in httpOnly cookies",
          "bcrypt",
          "Server-Sent Events (custom pub/sub)",
          "Midtrans",
          "Resend",
          "Cloudinary",
          "OpenCage",
        ],
      },
      {
        role: "Frontend",
        items: [
          "React 19",
          "TypeScript",
          "Vite",
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
    role: "Solo — individual bootcamp assignment, built from scratch, later revived and redeployed independently",
    timeframe: "2026 (bootcamp) · redeployed Jul 2026",
    commits: "32 commits",
    status: "Live in production",
    liveDemo: "https://company-profile-challange.vercel.app/",
    repo: "https://github.com/AzafaDev/company-profile-challange",
    pitch:
      "Worth being upfront: the brief was a set code challenge from Purwadhika's bootcamp, not scope I picked myself — but this was an individual assignment, and the build itself (Payload schema, page structure, CMS wiring, styling) is mine end to end, same as the rest of this portfolio's non-team projects. Separately, and later: the original deployment and database had been torn down and sat dormant, so I brought it back — diagnosed a Next.js/Payload peer-dependency conflict blocking install, removed a dead dependency that was silently causing it, provisioned a fresh Postgres database, fixed a real DB-connectivity failure that turned out to be a Neon account/project-level issue rather than a code bug, reseeded demo content, and then checked the rebuilt site against the original assignment brief itself — which turned up a real gap: the spec required a public-facing Login and Create Blog page, and the live site only had Payload's own admin panel. Built both from scratch against Payload's REST auth before calling it done.",
    stack: [
      {
        role: "Framework & CMS",
        items: [
          "Next.js 16 (App Router)",
          "React 19",
          "TypeScript",
          "Payload CMS 3 — admin panel, REST + GraphQL API",
          "PostgreSQL via @payloadcms/db-postgres",
          "Lexical rich-text editor",
        ],
      },
      {
        role: "Infra & styling",
        items: [
          "Vercel (hosting)",
          "Vercel Blob (media storage)",
          "Neon (managed Postgres)",
          "Tailwind CSS",
          "DaisyUI",
          "Zustand for client state",
        ],
      },
    ],
    sections: [
      {
        heading: "Situation",
        body: "This was an individual assignment from Purwadhika — a company profile build using Payload CMS on Next.js against a fixed spec (seven required pages, CMS-backed blog, public auth), but built solo from an empty repo, not scaffolded or handed to me. Long after finishing it, I came back to find the original Vercel deployment and its database had both been deleted, leaving a repo that no longer ran: `npm install` failed outright, and the README was still the unedited create-next-app default.",
      },
      {
        heading: "Task",
        body: "Get the project running locally again, fix whatever was actually broken rather than papering over it, provision a real database, verify the original build actually satisfies the assignment brief, and get it back to a live, checkable deployment with working demo content — the kind of state a repo should be in before anyone treats it as a portfolio piece.",
      },
      {
        heading: "Action",
        body: "`npm install` failed on a genuine peer-dependency conflict: package.json pinned next@16.1.6, but @payloadcms/next@3.77.0 required next >=16.2.0 — bumped the version instead of forcing install past it. That surfaced a second conflict from @pemol/payload-cloudinary, a dependency that turned out to be referenced nowhere in the codebase (only Vercel Blob storage was actually wired up in payload.config.ts) — dead weight left over from an earlier experiment, removed outright. Provisioned a fresh Neon Postgres database and wrote a real .env.example (DATABASE_URL, PAYLOAD_SECRET, NEXT_PUBLIC_SERVER_URL, BLOB_READ_WRITE_TOKEN) — none of which had been documented anywhere. The admin panel then failed with a Postgres connection timeout that looked, at first, like it could be my own network — ruled that out methodically: raw TCP tests, a second network, a second Neon account, cross-checked against Neon's own documented failure modes, and narrowed it to a Neon account/project-level connectivity issue rather than anything in the code. Once resolved, seeded the CMS with real demo content (an admin user, uploaded media, 11 varied blog posts across categories) through Payload's REST API rather than leaving the live demo empty, then redeployed to Vercel. Before calling it finished, went back to the actual assignment document rather than trusting the existing repo's scope — it specifies seven required pages, including a public Login and an auth-gated Create Blog page. Neither existed; the site's only \"login\" was Payload's own admin panel, which isn't the same feature. Built a real /login page against Payload's cookie-based auth, and a /create-blog page that checks the session client-side, redirects unauthenticated visitors to /login, and on submit uploads a cover image before creating the post through Payload's REST API — verified end-to-end with cookie-authenticated requests before wiring up the UI, then again through the actual form.",
      },
      {
        heading: "Result",
        body: "Live and checkable at the URL above, with a working admin panel, a populated blog, and both required auth pages now present rather than a bare scaffold or a partially-satisfied brief. Two layers of work here, both mine: the original build (Payload schema, page implementation, CMS wiring) done solo against the assignment brief, and later, independently, reviving a dead repo (dependency conflicts, undocumented env vars, a real infra failure) and closing a real gap I found by re-checking my own build against the brief, then shipping it back to production rather than leaving it as a broken or incomplete artifact.",
      },
      {
        heading: "What it looks like",
        body: "A coffee-brand company profile theme (Janji Jiwa) with a CMS-backed blog — posts, authors, publish dates, and topic filters (Story, Tips, News, Menu) all pulled from Payload rather than hardcoded.",
        images: [
          {
            src: "/projects/company-profile-payload/homepage.jpg",
            alt: "Company profile homepage for Janji Jiwa coffee brand with a 900+ outlets badge and a featured drink image",
            caption: "Homepage — hero, outlet count, rating badge",
          },
          {
            src: "/projects/company-profile-payload/blog-listing.jpg",
            alt: "Blog listing page titled Explore Our Soul with a topic filter sidebar and CMS-driven post cards",
            caption: "Blog — CMS-driven posts, topic filter sidebar",
          },
        ],
      },
    ],
    footerNote: "Case study drafted from the repo, its README (rewritten during this work), and a live redeploy walkthrough · July 2026",
  },
  {
    slug: "kinetix-events",
    category: "no-client",
    title: "Kinetix Events — Event Ticketing Platform",
    eyebrow: "Bootcamp mini-project · Express · Prisma · React",
    dek: "A full-stack event ticketing platform — event discovery, tiered tickets, a transaction flow with payment-proof upload, voucher/coupon discounts, a points/referral system, event reviews, and an organizer dashboard — built as a Purwadhika bootcamp mini-project with a teammate.",
    role: "Team of 2 — I led backend + most of the frontend, teammate contributed a smaller share",
    timeframe: "2026 (bootcamp mini-project)",
    commits: "160 commits total",
    status: "Live — full MVP scope shipped",
    liveDemo: "https://kinetix-events.vercel.app/",
    repo: "https://github.com/AzafaDev/mini-project",
    pitch:
      "This was a scoped bootcamp mini-project done with one teammate, not solo — worth being upfront about that rather than presenting it as an individual build. I carried backend and most of the frontend; my teammate contributed a smaller share. The MVP brief specified event discovery/creation, a full transaction lifecycle with vouchers/coupons/points, a referral program, event reviews, and an organizer dashboard — all of it shipped and is live and checkable on the deployed app: the event detail page shows aggregate ratings and review counts pulled from real data, and organizer profiles roll those up across all their events.",
    stack: [
      {
        role: "Backend",
        items: [
          "Node.js + Express (TypeScript)",
          "Prisma ORM 7 (PostgreSQL, @prisma/adapter-pg)",
          "JWT auth in httpOnly cookies",
          "bcrypt",
          "Zod validation",
          "Cloudinary (image uploads)",
          "Resend (transactional email, Handlebars templates)",
          "express-rate-limit",
          "Vercel serverless entry (api/index.ts)",
        ],
      },
      {
        role: "Frontend",
        items: [
          "React 19 + Vite",
          "Tailwind CSS 4",
          "Zustand (state)",
          "React Router v7",
          "Recharts (dashboard charts)",
          "Formik + Yup (forms)",
          "Framer Motion",
        ],
      },
    ],
    sections: [
      {
        heading: "Situation",
        body: "A Purwadhika bootcamp mini-project with a fixed MVP brief: build an event ticketing platform covering discovery/creation, a full transaction lifecycle (payment proof, expiry, auto-cancellation, rollback), a discount/loyalty system (vouchers, coupons, points, referrals), event reviews and ratings, and an organizer dashboard. Done as a team of two rather than solo.",
      },
      {
        heading: "Task",
        body: "Deliver as much of the spec'd feature set as possible against the bootcamp's scoring rubric, working across a shared backend and frontend with a teammate — I took backend plus the bulk of the frontend.",
      },
      {
        heading: "Action",
        body: "Backend: Express + Prisma 7 over PostgreSQL, JWT in httpOnly cookies, Zod validation, Cloudinary for event images and payment-proof uploads, Resend for transactional email. Modules cover auth (register/login/verify/reset, referral codes), events (CRUD, filters, ticket tiers, plus reviews nested under the events module — create/update/delete review, per-event rating aggregation, organizer-wide rating rollup), transactions (create → upload proof → organizer accept/reject, with a 2-hour payment window and 3-day auto-cancel), discount (event vouchers + system coupons), and points (referral rewards, redemption). Frontend: React 19 + Vite, Zustand for auth/event/transaction state, Formik + Yup for forms, Recharts for the organizer dashboard's revenue/sales visualizations, a dedicated review modal and review section on the event detail page. Deployed as a single Vercel project — static frontend plus the Express app running as a serverless function.",
      },
      {
        heading: "Result",
        body: "Live and checkable at the URL above. The full MVP brief shipped: discovery/browsing/search, event creation with tiered pricing, the full transaction state machine with rollback, vouchers/coupons/points/referrals, event reviews with aggregate ratings surfaced on both event and organizer pages, and an organizer dashboard with attendee lists and revenue charts. One honest gap: there's a `vitest` test script wired up in package.json but zero test files in the repo — untested rather than broken. And this was a two-person build, not solo, which the README's framing glosses over but this one doesn't.",
      },
      {
        heading: "What it looks like",
        body: "The public discovery flow — a hero search/filter bar, curated event cards, and an event detail page showing live seat capacity, ticket tiers, and aggregate ratings pulled from real review data.",
        images: [
          {
            src: "/projects/kinetix-events/homepage.jpg",
            alt: "Kinetix Events homepage with an 'Architect Your Moment' hero, a search/filter bar, and category chips for Music, Conference, Workshop, Seminar, Sports",
            caption: "Homepage — hero search, category filters, curated events",
          },
          {
            src: "/projects/kinetix-events/event-detail.jpg",
            alt: "Jakarta Music Festival 2025 event detail page showing a 5.0 rating from 2 reviews, seat capacity 3497/3500, organizer rating 4.3 from 4 reviews, and VIP/General ticket tiers",
            caption: "Event detail — capacity, ticket tiers, and review-driven ratings",
          },
        ],
      },
    ],
    footerNote: "Case study drafted from the repo source, its README, and a live check of the deployed app · July 2026",
  },
  {
    slug: "freshpress-laundry",
    category: "no-client",
    title: "FreshPress Laundry — Driver, Worker & Attendance",
    eyebrow: "Bootcamp final project · Express · Prisma · Next.js",
    dek: "A five-role laundry marketplace (customer, super admin, outlet admin, worker, driver) built as a three-person Purwadhika final project, with geolocation-based outlet assignment, a full order pipeline, and a bypass-approval workflow for mismatched items. My scope: driver dispatch, worker station processing, and staff attendance — plus a self-scoped employee-auth system the assignment brief didn't originally call for.",
    role: "Team of 3 — I owned Feature 3 (driver management, worker management, attendance) and employee auth",
    timeframe: "May – Jul 2026 (bootcamp final project)",
    commits: "223 of 451 commits",
    status: "Live in production",
    liveDemo: "https://freshpress-laundry.vercel.app/",
    repo: "https://github.com/finalprojectpwdk-cloud/Laundry-App---FreshPress-Laundry",
    pitch:
      "Worth being upfront about the structure: this is a three-person Purwadhika final project with a fixed point-weighted brief (100 points split across features), not a solo build — the repo has 451 commits from three contributors across dozens of feature branches. The assignment split the app into three scored feature blocks and assigned one to each teammate; mine was Feature 3 — driver/worker task management and staff attendance — worth the largest single point allocation in the brief. One thing that wasn't in the original spec at all: employee authentication (login, sessions, role-gated routing for outlet admin/worker/driver/super admin) didn't belong to anyone's assigned feature by the letter of the brief, so I built it myself rather than leaving a gap the team would hit later. The honest scope here is that block, not the whole app — homepage, customer ordering/payment, and admin/outlet management were built by teammates.",
    stack: [
      {
        role: "Backend",
        items: [
          "Node.js + Express 5 (TypeScript)",
          "Prisma 7 ORM over PostgreSQL (Neon serverless)",
          "JWT auth in httpOnly cookies",
          "bcrypt",
          "Zod validation",
          "Socket.IO (real-time task/notification events)",
          "node-cron (attendance sweep, auto-completion)",
          "Cloudinary (uploads), Resend (email), Midtrans (payments)",
          "OpenCage (geocoding), geolib (distance/outlet matching)",
        ],
      },
      {
        role: "Frontend",
        items: [
          "Next.js 16 (App Router)",
          "React 19",
          "TanStack Query",
          "Zustand",
          "React Hook Form + Zod",
          "Leaflet / React-Leaflet",
          "Recharts (reports)",
          "Tailwind CSS 4",
        ],
      },
    ],
    sections: [
      {
        heading: "Situation",
        body: "A Purwadhika bootcamp final project, scoped for a team of three: a five-role laundry marketplace (customer, super admin, outlet admin, worker, driver) with geolocation-based outlet assignment, a full order pipeline from pickup to delivery, and a per-station bypass-approval workflow when a worker's re-counted item quantities don't match the previous station. The brief split the build into point-weighted feature blocks, one per teammate.",
      },
      {
        heading: "Task",
        body: "My assigned block (Feature 3) was driver task management, worker station processing, and staff attendance — plus, once it became clear no one's assigned feature covered it by the letter of the brief, employee authentication and role-gated routing for the four non-customer roles.",
      },
      {
        heading: "Action",
        body: "Built the driver dashboard (pickup/delivery task list, one-active-task-at-a-time constraint, task history) and the worker station dashboard (per-station job queue, mandatory item re-count on intake, bypass-request flow that routes to outlet admin for approval before a station can proceed). Attendance: geofenced check-in/check-out gating dashboard access — a worker or driver can't see their tasks until they've checked in for their shift — plus a cron-driven absence sweep and an attendance report for outlet admins. Employee auth: JWT-in-httpOnly-cookie sessions, role-based route guards across outlet admin/worker/driver/super admin, and login/session handling shared by the whole team's dashboards, since none of the three assigned feature blocks technically owned it.",
      },
      {
        heading: "Result",
        body: "Live in production at freshpress-laundry.vercel.app, with 223 of the repo's 451 commits under my name across two authoring identities. The honest caveat: this is one-third of a team build, not a solo project — the parts outside my scope (customer ordering/payment, outlet-admin order/master-data management, the public site) were built by teammates, and I'm not claiming credit for them here.",
      },
      {
        heading: "What it looks like",
        body: "Driver and worker dashboards both gate task visibility behind a daily check-in — the attendance piece that ties Feature 3 together, screenshotted from live demo accounts on the deployed app.",
        images: [
          {
            src: "/projects/freshpress-laundry/driver-dashboard.jpg",
            alt: "Driver dashboard showing Morning shift 08:00-16:00, Pickup/Delivery tabs, and a locked 'Check-in dulu' panel gating task visibility",
            caption: "Driver dashboard — shift info, attendance-gated task list",
          },
          {
            src: "/projects/freshpress-laundry/worker-dashboard.jpg",
            alt: "Washing Worker dashboard showing Station Kamu section with a locked 'Check-in dulu' panel and bottom nav for Beranda, Absensi, Station, Riwayat",
            caption: "Worker dashboard — station queue, attendance-gated access",
          },
        ],
      },
    ],
    footerNote: "Case study drafted from the repo's git history, the assignment brief, and a live walkthrough with seeded demo accounts · July 2026",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getPreviewImage(project: Project): ProjectImage | undefined {
  for (const section of project.sections) {
    if (section.images && section.images.length > 0) {
      return section.images[0];
    }
  }
  return undefined;
}
