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

const faqSections = [
  {
    id: "beginning-therapy",
    label: "Beginning Therapy",
    title: "Starting somewhere",
    description:
      "For the part of you that may feel unsure, nervous, confused, or not fully ready yet.",
    questions: [
      {
        question: "I’ve never been to therapy before. What should I expect?",
        answer:
          "It is completely okay to feel unsure or nervous before your first session. The first session is usually a space to slow down, understand what brought you to therapy, and begin making sense of what has been feeling difficult. You do not need to come prepared with the “right” words or a perfectly clear problem. We can begin wherever you are.",
      },
      {
        question: "Do I need to know exactly what I want to work on?",
        answer:
          "No. Many people begin therapy with confusion, emotional overwhelm, numbness, anxiety, relationship concerns, or simply a sense that something feels difficult to carry alone. We can work together to name what is happening and gradually identify what needs attention.",
      },
      {
        question: "What if I don’t know how to talk about my feelings?",
        answer:
          "That is okay. Therapy does not require you to be emotionally fluent from the beginning. Sometimes we start with thoughts, body sensations, situations, patterns, or even silence. Part of therapy can be learning how to notice, name, and understand your inner experience at your own pace.",
      },
      {
        question: "What if my problems are not big enough for therapy?",
        answer:
          "You do not need to be in crisis to begin therapy. Therapy can help with emotional clarity, self-understanding, relationship patterns, stress, transitions, and feeling more connected to yourself. If something is affecting your emotional life, it is valid enough to bring into the room.",
      },
      {
        question: "What if I don’t know whether therapy is right for me?",
        answer:
          "That uncertainty is welcome too. The first session can help you understand what therapy may offer, whether the space feels right, and what kind of support may be useful. You do not have to be completely sure before beginning.",
      },
    ],
  },
  {
    id: "first-session",
    label: "First Session",
    title: "What the first session may feel like",
    description:
      "The first session is less about performing therapy correctly and more about beginning gently.",
    questions: [
      {
        question: "What happens in the first session?",
        answer:
          "The first session is mostly about understanding you, your current concerns, your context, and what you may be hoping for from therapy. We may talk about what has been happening recently, how long it has been going on, what feels most distressing, and what support has looked like so far. You will also have space to ask questions about therapy and the process.",
      },
      {
        question: "What should I do before my first session?",
        answer:
          "You do not need to prepare extensively. If it helps, you can briefly reflect on what has been feeling difficult, what made you reach out now, and what you hope may feel different through therapy. But it is also completely okay to arrive without notes and begin from wherever you are.",
      },
      {
        question: "What if I feel anxious before or after the first session?",
        answer:
          "That is very common. Starting therapy can bring up vulnerability, uncertainty, or emotional heaviness. After the first session, you may feel relieved, tired, thoughtful, emotional, or unsure. All of these responses are valid. We can also talk about how therapy feels for you as we go along.",
      },
      {
        question: "What if I don’t feel comfortable in the first session?",
        answer:
          "It is okay to take time to settle into therapy. The first session can feel unfamiliar. You are allowed to notice how the space feels for you, ask questions, and share discomfort if it comes up. A good therapy process also includes being able to talk about what is or is not working for you.",
      },
    ],
  },
  {
    id: "therapy-process",
    label: "Therapy Process",
    title: "How the work unfolds",
    description:
      "Therapy is collaborative, paced, and shaped by what feels clinically useful for you.",
    questions: [
      {
        question: "What do I talk about in therapy?",
        answer:
          "You can talk about whatever feels important, confusing, painful, repetitive, or difficult to understand. This may include emotions, relationships, family, work, anxiety, past experiences, self-worth, grief, conflict, burnout, identity, or patterns you feel stuck in. You do not have to filter your experience to make it “serious enough.”",
      },
      {
        question: "Will you give me advice or tell me what to do?",
        answer:
          "Therapy is not usually about giving direct instructions or making decisions for you. Instead, it is a collaborative process where we explore what is happening, understand patterns, build emotional clarity, and support you in making choices that feel more grounded and aligned with you.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "This depends on what you are coming in for, your goals, your pace, and the kind of support you are looking for. Some people come for a few sessions around a specific concern, while others prefer longer-term therapy to work through deeper patterns. We can review this together as therapy progresses.",
      },
      {
        question: "How often should I come for therapy?",
        answer:
          "Most people begin with weekly sessions, especially when things feel emotionally intense or when they are just starting therapy. Over time, frequency can be discussed based on your needs, goals, and availability.",
      },
      {
        question: "Will I get homework between sessions?",
        answer:
          "Sometimes, but not always. Depending on what we are working on, you may be invited to notice patterns, reflect on something, practise a grounding skill, journal, or try a small shift between sessions. Any between-session work is discussed collaboratively and should feel realistic, not pressurizing.",
      },
      {
        question: "How do I know if therapy is working?",
        answer:
          "Therapy may be working if you begin to notice more clarity, emotional awareness, self-compassion, better boundaries, increased capacity to pause, or a deeper understanding of your patterns. Change can be gradual and sometimes subtle. We can also check in from time to time about what feels helpful and what may need to shift.",
      },
    ],
  },
  {
    id: "emotional-safety",
    label: "Emotional Safety",
    title: "Being met with care",
    description:
      "You do not have to hold yourself together perfectly in therapy. The work can slow down when it needs to.",
    questions: [
      {
        question: "Will I be judged for what I share?",
        answer:
          "Therapy is intended to be a non-judgmental and reflective space. You can bring in difficult emotions, complicated relationships, confusion, shame, anger, grief, or thoughts you have not said out loud before. The goal is not to label you, but to understand what has shaped your experience and what support you may need.",
      },
      {
        question: "What if I cry during the session?",
        answer:
          "Crying is welcome in therapy. You do not have to apologize for it or hold yourself together. Emotional expression can be part of the process, and we will move at a pace that feels manageable for you.",
      },
      {
        question: "What if I become overwhelmed during a session?",
        answer:
          "We can slow down. You do not have to share everything at once. Therapy can include grounding, pauses, checking in with your body, and making sure the pace feels safe enough. You are allowed to say, “I need a minute,” “this feels too much,” or “can we slow down?”",
      },
      {
        question: "Do I have to talk about my childhood?",
        answer:
          "Not unless it feels relevant or you are ready to. Sometimes early experiences help us understand present patterns, but therapy does not force you to revisit anything before there is enough safety and readiness. We can begin with your current concerns and move from there.",
      },
      {
        question: "Can I talk about relationships in therapy?",
        answer:
          "Yes. Relationships are often a big part of therapy. You can talk about romantic relationships, friendships, family dynamics, conflict, attachment patterns, breakups, loneliness, trust, boundaries, or repeated emotional patterns in relationships.",
      },
      {
        question: "What if I feel embarrassed about what I want to discuss?",
        answer:
          "Embarrassment, shame, and hesitation are very common in therapy. You can name that something feels hard to say, and we can approach it gently. You do not have to disclose everything immediately. Therapy can move at the pace at which trust develops.",
      },
    ],
  },
  {
    id: "confidentiality-practical",
    label: "Confidentiality & Practicalities",
    title: "Clear expectations",
    description:
      "A few practical details around privacy, rescheduling, endings, and the therapy frame.",
    questions: [
      {
        question: "Is everything I say confidential?",
        answer:
          "Yes, therapy is confidential. What you share in sessions stays private, except in specific safety-related situations, such as risk of harm to yourself or someone else, abuse, or when required by law. These limits to confidentiality will be discussed clearly during the consent process.",
      },
      {
        question: "What if I miss a session or need to reschedule?",
        answer:
          "Life happens, and sometimes schedules need to change. Rescheduling and cancellation policies will be shared clearly before beginning therapy so that expectations are transparent from the start.",
      },
      {
        question: "Can I stop therapy whenever I want?",
        answer:
          "Yes. You are allowed to pause or end therapy. Ideally, ending is discussed together so there is space for reflection, closure, and planning next steps. Therapy works best when you feel a sense of choice and agency in the process.",
      },
      {
        question: "Will therapy make me feel better immediately?",
        answer:
          "Sometimes people feel lighter after a session, and sometimes therapy brings up emotions that take time to process. Therapy is not always about immediate relief. It is often about building understanding, capacity, emotional safety, and new ways of relating to yourself and others over time.",
      },
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
            <div className="nav-item has-dropdown" key={group.label}>
              <div className="nav-trigger">
                <a href={group.href}>{group.label}</a>
                <span aria-hidden="true">⌄</span>
              </div>

              <div className="dropdown-menu">
                {group.links.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {directLinks.map((link) => (
            <div className="nav-item" key={link.label}>
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
              <details className="mobile-nav-group" key={group.label}>
                <summary>
                  <span>{group.label}</span>
                  <span aria-hidden="true">⌄</span>
                </summary>

                <div className="mobile-sub-links">
                  {group.links.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </details>
            ))}

            {directLinks.map((link) => (
              <a
                href={link.href}
                className="mobile-direct-link"
                key={link.label}
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

function FAQIndex({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="mb-10 lg:hidden">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
          On this page
        </p>

        <div className="-mx-6 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8">
          <div className="flex min-w-max gap-3">
            {faqSections.map((section) => (
              <a
                href={`#${section.id}`}
                key={section.id}
                className="border border-[#d8d0c5]/85 bg-[#f7f3ed]/70 px-4 py-3 text-left shadow-[0_18px_50px_rgba(79,95,75,0.045)]"
              >
                <span className="block text-[0.64rem] font-medium uppercase tracking-[0.17em] text-[#c58a5c]">
                  {section.label}
                </span>

                <span className="mt-1 block whitespace-nowrap text-[0.82rem] italic leading-6 text-[#4f5f4b]/80">
                  {section.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <aside className="hidden h-fit max-h-[calc(100vh-8rem)] overflow-y-auto border border-[#d8d0c5]/80 bg-[#f7f3ed]/65 p-6 shadow-[0_28px_80px_rgba(79,95,75,0.06)] sm:p-7 lg:sticky lg:top-28 lg:mt-8 lg:block">
      <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
        On this page
      </p>

      <div className="space-y-5 text-[0.82rem] leading-6 text-[#4f5f4b]/80">
        {faqSections.map((section) => (
          <a
            href={`#${section.id}`}
            key={section.id}
            className="block border-b border-[#d8d0c5]/80 pb-4 transition hover:text-[#c58a5c]"
          >
            <p className="text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
              {section.label}
            </p>

            <p className="mt-1 italic">{section.title}</p>
          </a>
        ))}
      </div>

      <div className="mt-6 border border-[#d8d0c5]/75 bg-[#f4f1ec]/70 p-4">
        <p className="text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
          Still unsure?
        </p>

        <p className="mt-3 text-[0.82rem] leading-6 text-[#4f5f4b]/78">
          You can reach out with a small note. You do not need to have
          everything figured out first.
        </p>

        <a
          href="/contact"
          className="mt-5 inline-flex text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-[#4f5f4b] transition hover:text-[#c58a5c]"
        >
          Contact Solregn
        </a>
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

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#4f5f4b]">
      <SiteNavigation />

      <section className="px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <FAQIndex />

          <div className="space-y-12 sm:space-y-14">
            <section className="border-b border-[#d8d0c5]/80 pb-10 sm:pb-12">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                Frequently Asked Questions
              </p>

              <h1
                className="mb-7 max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-semibold leading-[1.08] tracking-[0.03em] text-[#4f5f4b]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Before beginning therapy.
              </h1>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  It is natural to have questions before reaching out. This page
                  offers gentle answers about the first session, the therapy
                  process, emotional safety, confidentiality, and what beginning
                  may feel like.
                </p>
              </div>
            </section>

            <FAQIndex mobile />

            {faqSections.map((section) => (
              <section
                id={section.id}
                key={section.id}
                className="scroll-mt-32"
              >
                <div className="mb-6">
                  <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                    {section.label}
                  </p>

                  <h2
                    className="max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-normal leading-[1.08] tracking-[0.04em] text-[#4f5f4b]"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    {section.title}
                  </h2>

                  <p className="mt-4 max-w-3xl text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                    {section.description}
                  </p>
                </div>

                <div className="border-t border-[#d8d0c5]/80">
                  {section.questions.map((item) => (
                    <details
                      key={item.question}
                      className="group border-b border-[#d8d0c5]/80 py-4"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 [&::-webkit-details-marker]:hidden">
                        <h3
                          className="max-w-3xl text-[1.03rem] font-normal leading-7 tracking-[0.01em] text-[#4f5f4b] sm:text-[1.08rem]"
                          style={{ fontFamily: "var(--font-heading), serif" }}
                        >
                          {item.question}
                        </h3>

                        <span
                          aria-hidden="true"
                          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d8d0c5] text-sm text-[#c58a5c] transition group-open:rotate-180"
                        >
                          ⌄
                        </span>
                      </summary>

                      <p className="mt-4 max-w-3xl text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ))}

            <section className="bg-[#e7ded2]/55 px-6 py-9 sm:px-10 sm:py-10">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Begin Here
              </p>

              <h2
                className="max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-normal leading-[1.08] tracking-[0.035em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                You can begin with a question, a note, or a little uncertainty.
              </h2>

              <div className="mt-6 space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Reaching out does not mean you need to be fully ready. It can
                  simply be the first step in understanding what kind of support
                  may feel right.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <BottomButton href="/contact">Contact</BottomButton>

                <BottomButton href="/services">View Services</BottomButton>

                <BottomButton href="/about">About Solregn</BottomButton>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}