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
      { label: "Individual Therapy", href: "/services" },
      { label: "Couples Therapy", href: "/services" },
      { label: "Supervision", href: "/services" },
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
      { label: "Workplace Programs", href: "/workshops" },
      { label: "Webinars", href: "/workshops" },
      { label: "Trainings", href: "/workshops" },
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

const atGlanceItems = [
  {
    label: "Founder",
    text: "Yashna Tulsiani",
  },
  {
    label: "Experience",
    text: "2000+ sessions facilitated",
  },
  {
    label: "Format",
    text: "Online therapy for adults",
  },
  {
    label: "Available In",
    text: "English, Hindi, Tamil, and Sindhi",
  },
  {
    label: "Approach",
    text: "Trauma-informed, relational, attachment-based, emotion-focused, and DBT-informed.",
  },
];

const approachCards = [
  {
    title: "Reflective",
    text: "We slow down enough to notice patterns, meanings, emotional responses, and the stories that have shaped your sense of self.",
  },
  {
    title: "Relational",
    text: "Therapy pays attention to attachment, boundaries, safety, closeness, conflict, and the ways relationships live inside us.",
  },
  {
    title: "Trauma-informed",
    text: "The work is paced with care, with attention to nervous-system capacity, emotional safety, and the protective wisdom of survival patterns.",
  },
  {
    title: "Integrative",
    text: "Sessions may draw from attachment-based, emotion-focused, narrative, and DBT-informed approaches depending on what is clinically useful.",
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

function AtGlanceCard({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <aside className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/70 p-5 shadow-[0_24px_70px_rgba(79,95,75,0.055)] sm:p-7 lg:hidden">
        <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
          At a glance
        </p>

        <div className="grid gap-5 text-[0.82rem] leading-6 text-[#4f5f4b]/80 sm:grid-cols-2">
          {atGlanceItems.map((item) => (
            <div key={item.label}>
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
                {item.label}
              </p>

              <p className="mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </aside>
    );
  }

  return (
    <aside className="hidden lg:block lg:self-start">
      <div className="fixed left-[max(3rem,calc((100vw-72rem)/2))] top-1/2 z-10 h-fit max-h-[calc(100vh-8rem)] w-[calc((min(72rem,calc(100vw-6rem))-5rem)*0.36)] -translate-y-1/2 overflow-y-auto border border-[#d8d0c5]/80 bg-[#f7f3ed]/65 p-6 shadow-[0_28px_80px_rgba(79,95,75,0.06)] sm:p-7">
        <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
          At a glance
        </p>

        <div className="space-y-5 text-[0.82rem] leading-6 text-[#4f5f4b]/80">
          {atGlanceItems.map((item) => (
            <div key={item.label} className="border-b border-[#d8d0c5]/80 pb-4">
              <p className="text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
                {item.label}
              </p>

              <p className="mt-1">{item.text}</p>
            </div>
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#4f5f4b]">
      <SiteNavigation />

      <section className="px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <AtGlanceCard />

          <div className="space-y-12 sm:space-y-14">
            <section className="border-b border-[#d8d0c5]/80 pb-10 sm:pb-12">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                About Solregn Therapy
              </p>

              <h1
                className="mb-4 max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-semibold leading-[1.08] tracking-[0.03em] text-[#4f5f4b]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Solregn
              </h1>

              <p className="mb-6 text-[0.92rem] italic tracking-[0.05em] text-[#4f5f4b]/70 sm:text-[0.96rem]">
                /suːlˈrɛɪn/
              </p>

              <p
                className="mb-7 max-w-3xl text-[1.05rem] italic leading-7 tracking-[0.02em] text-[#4f5f4b]/75 sm:text-[1.15rem] sm:leading-8"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                A reflective space for complexity, clarity, and emotional
                steadiness.
              </p>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Solregn is a Norwegian word for sun-shower, the quiet meeting
                  of sunlight and rain. It describes a moment where two
                  seemingly opposite things exist together: warmth and
                  difficulty, clarity and uncertainty, tenderness and heaviness.
                </p>

                <p>
                  For us, this image holds the essence of therapy. Healing does
                  not always arrive as a sudden breakthrough or a complete
                  absence of pain. Sometimes, it begins in the space where light
                  slowly enters what once felt overwhelming.
                </p>

                <p>
                  Solregn Therapy was created as a reflective, nurturing space
                  for people who are trying to make sense of themselves, their
                  emotions, their relationships, and the patterns they keep
                  returning to.
                </p>

                <p>
                  It is built on the belief that growth often happens through
                  complexity, not by rushing past it. Here, we hold space for the
                  parts of you that feel confused, tired, anxious, grieving,
                  guarded, hopeful, or still becoming.
                </p>
              </div>
            </section>

            <AtGlanceCard mobile />

            <section>
              <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                About the Founder
              </p>

              <h2
                className="mb-6 max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-normal leading-[1.08] tracking-[0.04em] text-[#4f5f4b]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Yashna Tulsiani
              </h2>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Hi, I’m Yashna. I facilitate online therapy for adults,
                  working across anxiety, trauma including relational and
                  complex trauma, emotional regulation, burnout, attachment
                  difficulties, grief, depression, stress, relationship
                  concerns, and identity exploration.
                </p>

                <p>
                  My approach is reflective, collaborative, and trauma-informed,
                  with a strong emphasis on safety, attunement, and
                  nervous-system awareness. In practice, this means therapy is
                  paced with care, with attention to how your mind, body,
                  emotions, relationships, and past experiences have shaped the
                  ways you cope, protect yourself, and make sense of the world.
                </p>

                <p>
                  Rather than focusing only on symptom reduction, therapy here
                  emphasises awareness, emotional capacity, meaning-making, and
                  long-term psychological resilience. The aim is not to “fix”
                  you quickly, but to help you understand yourself more deeply,
                  relate to your experiences with more compassion, and build
                  steadier ways of being with yourself and others.
                </p>

                <p>
                  My work is integrative, drawing from relational,
                  attachment-based, emotion-focused, narrative, and DBT-informed
                  approaches. Sessions are paced and flexible, structured when
                  helpful and open-ended when needed, guided by what feels most
                  alive for the client.
                </p>
              </div>
            </section>

            <section className="border-y border-[#d8d0c5]/80 py-10 sm:py-12">
              <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Therapeutic Approach
              </p>

              <h2
                className="mb-7 max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-normal leading-[1.08] tracking-[0.04em] text-[#4f5f4b]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Therapy here honours complexity rather than rushing resolution.
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {approachCards.map((card) => (
                  <div
                    key={card.title}
                    className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-5"
                  >
                    <p className="mb-3 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
                      {card.title}
                    </p>

                    <p className="text-[0.82rem] leading-6 text-[#4f5f4b]/78">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                This Space May Support You With
              </p>

              <h2
                className="mb-6 max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-normal leading-[1.08] tracking-[0.04em] text-[#4f5f4b]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Insight and capacity, held together.
              </h2>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Solregn Therapy may be a good fit if you are navigating
                  emotional overwhelm, anxiety, overthinking, trauma, burnout,
                  grief, relationship concerns, attachment patterns, low
                  self-worth, depression, stress, identity exploration, or
                  significant life transitions.
                </p>

                <p>
                  It may also be supportive if you often understand things
                  intellectually but still struggle to feel different
                  emotionally.
                </p>

                <p>
                  Therapy here offers space for both insight and capacity:
                  understanding why something feels the way it does, while
                  slowly building the ability to respond to it differently.
                </p>
              </div>
            </section>

            <section className="bg-[#e7ded2]/55 px-6 py-9 sm:px-10 sm:py-10">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Begin Here
              </p>

              <h2
                className="max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-normal leading-[1.08] tracking-[0.035em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Therapy can begin exactly where you are.
              </h2>

              <div className="mt-6 space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Starting therapy can feel vulnerable. You do not need to have
                  everything figured out before you begin.
                </p>

                <p>
                  You are welcome to arrive with confusion, questions, silence,
                  emotion, or simply a sense that something needs attention.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <BottomButton href="/services">Reach out to begin</BottomButton>

                <BottomButton href="/contact">Contact</BottomButton>

                <BottomButton href="/faqs">FAQs</BottomButton>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}