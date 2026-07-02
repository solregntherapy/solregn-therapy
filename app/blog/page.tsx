const navGroups = [
  {
    label: "About",
    href: "/about",
    links: [
      { label: "About Solregn", href: "/about" },
      { label: "About Founder", href: "/about" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    links: [
      { label: "Individual Therapy", href: "/services#individual-therapy" },
      { label: "Couples Therapy", href: "/services#couples-therapy" },
      { label: "Supervision", href: "/services#supervision" },
      { label: "Workshops", href: "/services#workshops" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    links: [
      { label: "Emotional Regulation", href: "/resources" },
      { label: "Anxiety & Overthinking", href: "/resources" },
      { label: "Crisis Support", href: "/resources" },
    ],
  },
  {
    label: "Workshops",
    href: "/workshops",
    links: [
      {
        label: "EAP & Workplace Support",
        href: "/workshops#eap-workplace-support",
      },
      { label: "Webinars", href: "/workshops#webinars" },
      { label: "Trainings", href: "/workshops#trainings" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    links: [
      { label: "Enquiry Form", href: "/contact" },
      { label: "Referral Network", href: "/referral-network" },
    ],
  },
];

const directLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
];

const blogMail =
  "mailto:solregntherapy@gmail.com?subject=Blog%20Topic%20Suggestion%20-%20Solregn%20Therapy";

const bottomButtonClass =
  "group inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-[#c58a5c] hover:border-[#c58a5c] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#c58a5c]";

const sidebarLinks = [
  { label: "Latest writing", href: "#latest-writing" },
  { label: "Emotional patterns", href: "#latest-writing" },
  { label: "Relationships", href: "#latest-writing" },
  { label: "Nervous system", href: "#latest-writing" },
  { label: "Therapy reflections", href: "#latest-writing" },
];

const blogPosts = [
  {
    category: "Therapy Process",
    title: "When you understand everything but still feel stuck",
    excerpt:
      "A reflection on why insight alone does not always create emotional change, and what therapy may help build slowly.",
    date: "Coming soon",
    readTime: "4 min read",
    href: "#",
  },
  {
    category: "Emotional Regulation",
    title: "Why your body may react before your mind can explain it",
    excerpt:
      "A gentle note on nervous-system responses, emotional overwhelm, and learning to notice what happens inside before judging it.",
    date: "Coming soon",
    readTime: "5 min read",
    href: "#",
  },
  {
    category: "Relationships",
    title: "The quiet exhaustion of always being the understanding one",
    excerpt:
      "A reflection on emotional labour, over-functioning, resentment, and the longing to be met without having to explain everything.",
    date: "Coming soon",
    readTime: "5 min read",
    href: "#",
  },
  {
    category: "Anxiety & Overthinking",
    title: "Overthinking is often an attempt to feel safe",
    excerpt:
      "A softer way to understand worry loops, mental rehearsing, uncertainty, and the part of you trying to prevent emotional pain.",
    date: "Coming soon",
    readTime: "4 min read",
    href: "#",
  },
  {
    category: "Self-Worth & Shame",
    title: "The difference between self-improvement and self-abandonment",
    excerpt:
      "A reflective piece on growth, pressure, shame, and learning to change without treating yourself as a problem to solve.",
    date: "Coming soon",
    readTime: "6 min read",
    href: "#",
  },
  {
    category: "Burnout & Work Stress",
    title: "Rest does not always feel restful when your system is still bracing",
    excerpt:
      "A note on burnout, recovery, guilt, and why slowing down can feel surprisingly uncomfortable at first.",
    date: "Coming soon",
    readTime: "5 min read",
    href: "#",
  },
];

function SiteNavigation() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo" aria-label="Solregn Therapy Home">
          <img
            src="/images/logo.png"
            alt="Solregn Therapy"
            className="nav-logo-image"
          />
        </a>

        <div className="nav-links desktop-nav-links">
          {navGroups.map((group) => (
            <div key={group.label} className="nav-item has-dropdown">
              <div className="nav-trigger">
                <a href={group.href}>{group.label}</a>
                <span aria-hidden="true">⌄</span>
              </div>

              <div className="dropdown-menu">
                {group.links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {directLinks.map((link) => (
            <div key={link.label} className="nav-item">
              <a href={link.href}>{link.label}</a>
            </div>
          ))}
        </div>

        <details className="mobile-menu">
          <summary>
            <span>Menu</span>
            <span aria-hidden="true">⌄</span>
          </summary>

          <div className="mobile-menu-panel">
            {navGroups.map((group) => (
              <details key={group.label} className="mobile-nav-group">
                <summary>
                  <span>{group.label}</span>
                  <span aria-hidden="true">⌄</span>
                </summary>

                <div className="mobile-sub-links">
                  {group.links.map((link) => (
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </details>
            ))}

            {directLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-direct-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </nav>
  );
}

function BottomButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={bottomButtonClass}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="text-[#4f5f4b] transition group-hover:text-[#fff8ef]">
        {children}
      </span>
    </a>
  );
}

function DesktopSidebar() {
  return (
    <aside className="hidden lg:block lg:self-start">
      <div className="fixed left-[max(3rem,calc((100vw-72rem)/2))] top-[calc(50%+1cm)] z-10 h-fit max-h-[calc(100vh-9rem)] w-[calc((min(72rem,calc(100vw-6rem))-5rem)*0.36)] -translate-y-1/2 overflow-y-auto border border-[#d8d0c5]/80 bg-[#f7f3ed]/65 p-6 shadow-[0_28px_80px_rgba(79,95,75,0.06)] sm:p-7">
        <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
          From the therapy room
        </p>

        <h2
          className="mb-5 text-[clamp(1.25rem,2vw,1.65rem)] font-normal leading-[1.1] tracking-[0.035em] text-[#4f5f4b]"
          style={{ fontFamily: "var(--font-heading), serif" }}
        >
          Gentle writing on patterns, emotions, relationships, and the questions
          people often bring into therapy.
        </h2>

        <div className="space-y-2 text-[0.82rem] leading-6 text-[#4f5f4b]/82">
          {sidebarLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block border border-[#d8d0c5]/80 bg-[#f4f1ec]/55 px-4 py-3 transition hover:border-[#c58a5c] hover:bg-[#f7f3ed]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-7">
          <BottomButton href={blogMail}>Suggest a topic</BottomButton>
        </div>
      </div>
    </aside>
  );
}

function MobileSidebar() {
  return (
    <aside className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/70 p-5 shadow-[0_24px_70px_rgba(79,95,75,0.055)] sm:p-7 lg:hidden">
      <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
        From the therapy room
      </p>

      <div className="grid gap-3 text-[0.82rem] leading-6 text-[#4f5f4b]/80 sm:grid-cols-2">
        {sidebarLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="border border-[#d8d0c5]/80 bg-[#f4f1ec]/55 px-4 py-3 transition hover:border-[#c58a5c] hover:bg-[#f7f3ed]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#4f5f4b]">
      <SiteNavigation />

      <section className="px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <DesktopSidebar />

          <div className="space-y-12 sm:space-y-14">
            <MobileSidebar />

            <header className="border-b border-[#d8d0c5]/80 pb-10 sm:pb-12">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                Blog
              </p>

              <h1
                className="mb-7 max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-semibold leading-[1.08] tracking-[0.03em] text-[#4f5f4b]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                From the therapy room.
              </h1>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  A quiet space for reflective writing on emotional life,
                  therapy, relationships, anxiety, burnout, shame, grief, and
                  the slow work of becoming more steady with yourself.
                </p>

                <p>
                  These notes are not meant to replace therapy. They are small
                  invitations to pause, think, feel, and find language for what
                  may be happening inside.
                </p>
              </div>
            </header>

            <section id="latest-writing" className="scroll-mt-32 space-y-7">
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                  Latest writing
                </p>

                <h2
                  className="max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  Short reflections for the spaces between sessions.
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {blogPosts.map((post) => (
                  <article
                    key={post.title}
                    className="flex h-full flex-col border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-6 sm:p-7"
                  >
                    <p className="mb-4 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
                      {post.category}
                    </p>

                    <h3
                      className="mb-4 text-[1.18rem] font-normal leading-snug tracking-[0.035em] text-[#4f5f4b]"
                      style={{ fontFamily: "var(--font-heading), serif" }}
                    >
                      {post.title}
                    </h3>

                    <p className="mb-6 grow text-[0.9rem] leading-7 text-[#4f5f4b]/78">
                      {post.excerpt}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-x-3 gap-y-1 text-[0.72rem] uppercase tracking-[0.16em] text-[#4f5f4b]/58">
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <a
                      href={post.href}
                      className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:text-[#c58a5c]"
                    >
                      Read reflection
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <section className="bg-[#e7ded2]/55 px-6 py-9 sm:px-10 sm:py-10">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                A gentle note
              </p>

              <h2
                className="max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Writing can offer language, but therapy offers relationship,
                pacing, and support.
              </h2>

              <div className="mt-6 space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Blog posts can help you reflect, but they may not fully hold
                  the complexity of your personal story. If something here feels
                  close to what you are carrying, you are welcome to reach out
                  gently.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <BottomButton href="/services">View services</BottomButton>

                <BottomButton href="/contact">Contact</BottomButton>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}