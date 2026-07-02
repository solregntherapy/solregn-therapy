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
      {
        label: "Referral Network",
        href: "https://forms.gle/i9upugvyFmzVMBKL9",
      },
    ],
  },
];

const directLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
];

const sidebarItems = [
  { label: "Service overview", href: "#service-overview" },
  { label: "Individual therapy", href: "#individual-therapy" },
  { label: "Couples therapy", href: "#couples-therapy" },
  { label: "Supervision", href: "#supervision" },
  { label: "How sessions work", href: "#how-sessions-work" },
  { label: "Booking note", href: "#booking-note" },
];

const services = [
  {
    number: "01",
    title: "Individual Therapy",
    id: "individual-therapy",
    description:
      "A reflective, collaborative space for adults navigating anxiety, emotional overwhelm, trauma, relationship concerns, grief, burnout, identity questions, and patterns that feel difficult to shift alone.",
    points: [
      "For adults seeking depth, clarity, and emotional capacity.",
      "Useful for anxiety, trauma, attachment patterns, self-worth, grief, stress, and transitions.",
      "Sessions are paced gently, with room for both structure and open exploration.",
    ],
  },
  {
    number: "02",
    title: "Couples Therapy",
    id: "couples-therapy",
    description:
      "A space for couples to understand relational patterns, communication difficulties, emotional distance, conflict cycles, attachment needs, and the repeated places where both people feel unheard.",
    points: [
      "For couples wanting to understand the pattern, not only the argument.",
      "Helpful for communication, emotional disconnection, trust concerns, conflict, and transitions.",
      "The work focuses on slowing down the cycle and making space for each person’s inner experience.",
    ],
  },
  {
    number: "03",
    title: "Supervision for Therapists",
    id: "supervision",
    description:
      "A reflective supervision space for therapists who want to think more deeply about case formulation, therapeutic presence, boundaries, stuckness, rupture, countertransference, and the emotional weight of clinical work.",
    points: [
      "For early-career and growing therapists seeking reflective support.",
      "Focuses on case understanding, therapist self-awareness, clinical decision-making, and emotional containment.",
      "The space is collaborative, thoughtful, and grounded in clinical depth.",
    ],
  },
];

const bottomButtonClass =
  "group inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-[#c58a5c] hover:border-[#c58a5c] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#c58a5c]";

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

function OnThisPageCard({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <aside className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/70 p-5 shadow-[0_24px_70px_rgba(79,95,75,0.055)] sm:p-7 lg:hidden">
        <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
          On this page
        </p>

        <div className="grid gap-3 text-[0.82rem] leading-6 text-[#4f5f4b]/80 sm:grid-cols-2">
          {sidebarItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border border-[#d8d0c5]/80 bg-[#f4f1ec]/65 px-4 py-3 transition hover:bg-[#e7ded2]/55 hover:text-[#4f5f4b]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </aside>
    );
  }

  return (
    <aside className="hidden lg:block lg:self-start">
      <div className="fixed left-[max(3rem,calc((100vw-72rem)/2))] top-1/2 z-10 h-fit max-h-[calc(100vh-9rem)] w-[calc((min(72rem,calc(100vw-6rem))-5rem)*0.36)] -translate-y-1/2 overflow-y-auto border border-[#d8d0c5]/80 bg-[#f7f3ed]/65 p-6 shadow-[0_28px_80px_rgba(79,95,75,0.06)] sm:p-7">
        <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
          On this page
        </p>

        <div className="space-y-3 text-[0.82rem] leading-6 text-[#4f5f4b]/80">
          {sidebarItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block border-b border-[#d8d0c5]/80 pb-3 transition hover:text-[#c58a5c]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

function BottomButton({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <a href={href} className={bottomButtonClass}>
      <span className="text-[#4f5f4b] transition group-hover:text-[#fff8ef]">
        {children}
      </span>
    </a>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#4f5f4b]">
      <SiteNavigation />

      <section className="px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <OnThisPageCard />

          <div className="space-y-12 sm:space-y-14">
            <section
              id="service-overview"
              className="scroll-mt-28 border-b border-[#d8d0c5]/80 pb-10 sm:pb-12"
            >
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                Solregn Therapy
              </p>

              <h1
                className="mb-7 max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-semibold leading-[1.08] tracking-[0.03em] text-[#4f5f4b]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Services at Solregn Therapy
              </h1>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Solregn Therapy offers reflective, trauma-informed, and
                  relational mental health support for adults, couples, and
                  therapists. The work is paced with care, allowing space for
                  complexity, emotional understanding, and long-term
                  psychological resilience.
                </p>

                <p>
                  These services are designed for people who want to understand
                  themselves more deeply, build emotional capacity, and work with
                  patterns that may have formed over time. The work may include
                  reflection, emotional processing, nervous-system awareness,
                  relational understanding, skills, and meaning-making.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <BottomButton href="mailto:solregntherapy@gmail.com">
                  Email Solregn Therapy
                </BottomButton>

                <BottomButton href="/faqs">FAQs</BottomButton>
              </div>

              <div className="mt-10">
                <OnThisPageCard mobile />
              </div>
            </section>

            <section className="grid gap-5">
              {services.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28 border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-6 sm:p-7"
                >
                  <p className="mb-4 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
                    {service.number}
                  </p>

                  <h2
                    className="mb-5 max-w-3xl text-[clamp(1.45rem,2.4vw,1.95rem)] font-normal leading-[1.08] tracking-[0.04em] text-[#4f5f4b]"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    {service.title}
                  </h2>

                  <p className="text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                    {service.description}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="border border-[#d8d0c5]/80 bg-[#f4f1ec]/65 px-5 py-4"
                      >
                        <p className="text-[0.82rem] leading-6 text-[#4f5f4b]/78">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </section>

            <section
              id="how-sessions-work"
              className="scroll-mt-28 border-y border-[#d8d0c5]/80 py-10 sm:py-12"
            >
              <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                How sessions work
              </p>

              <h2
                className="mb-7 max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-normal leading-[1.08] tracking-[0.04em] text-[#4f5f4b]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                A steady rhythm, with room for what feels most alive.
              </h2>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-5">
                  <p className="mb-3 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
                    Reflective
                  </p>

                  <p className="text-[0.82rem] leading-6 text-[#4f5f4b]/78">
                    Sessions create space to slow down, notice patterns, and
                    understand emotional experiences with more nuance.
                  </p>
                </div>

                <div className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-5">
                  <p className="mb-3 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
                    Collaborative
                  </p>

                  <p className="text-[0.82rem] leading-6 text-[#4f5f4b]/78">
                    Therapy is not done to you. We work together to understand
                    what is happening and what kind of support feels useful.
                  </p>
                </div>

                <div className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-5">
                  <p className="mb-3 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
                    Paced
                  </p>

                  <p className="text-[0.82rem] leading-6 text-[#4f5f4b]/78">
                    The pace can be structured when helpful, and more open-ended
                    when the work needs space to unfold.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="booking-note"
              className="scroll-mt-28 bg-[#e7ded2]/55 px-6 py-9 sm:px-10 sm:py-10"
            >
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Booking note
              </p>

              <h2
                className="max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-normal leading-[1.08] tracking-[0.035em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Booking and enquiry details are being set up.
              </h2>

              <div className="mt-6 space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Calendar links, professional email, enquiry forms, and payment
                  details will be added once the backend systems are ready. For
                  now, you can reach out at{" "}
                  <a
                    href="mailto:solregntherapy@gmail.com"
                    className="underline underline-offset-4 transition hover:text-[#c58a5c]"
                  >
                    solregntherapy@gmail.com
                  </a>
                  .
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <BottomButton href="mailto:solregntherapy@gmail.com">
                  Email Solregn Therapy
                </BottomButton>

                <BottomButton href="/faqs">FAQs</BottomButton>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}