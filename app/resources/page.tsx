type ResourceItem = {
  title: string;
  description: string;
  href: string;
  label: string;
};

type ResourceSection = {
  number: string;
  title: string;
  description: string;
  resources: ResourceItem[];
};

const resourceSections: ResourceSection[] = [
  {
    number: "01",
    title: "Emotional Regulation",
    description:
      "Tools and reflections for understanding emotions, grounding the body, building steadiness, and responding to overwhelm with more care.",
    resources: [
      // Later, add resources like this:
      // {
      //   title: "Grounding Practice Sheet",
      //   description: "A simple worksheet for returning to the present moment.",
      //   href: "/resources/grounding-practice-sheet.pdf",
      //   label: "PDF",
      // },
    ],
  },
  {
    number: "02",
    title: "Anxiety & Overthinking",
    description:
      "Resources for working with worry, spiralling thoughts, uncertainty, body anxiety, and the need to mentally solve everything at once.",
    resources: [],
  },
  {
    number: "03",
    title: "Trauma & Nervous-System Awareness",
    description:
      "Gentle resources for understanding survival responses, emotional triggers, shutdown, hypervigilance, and the body’s protective patterns.",
    resources: [],
  },
  {
    number: "04",
    title: "Relationships & Attachment",
    description:
      "Reflections for exploring relational patterns, needs, boundaries, repair, conflict, closeness, distance, and attachment wounds.",
    resources: [],
  },
  {
    number: "05",
    title: "Therapy Reflections",
    description:
      "Journaling prompts, self-reflection questions, and therapy between-session practices to help deepen the work outside sessions.",
    resources: [],
  },
  {
    number: "06",
    title: "Crisis & Additional Support",
    description:
      "A space for crisis resources, helplines, safety planning tools, and guidance for moments that need more immediate support.",
    resources: [],
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#4f5f4b]">
      <nav className="site-nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            Solregn Therapy
          </a>

          <div className="nav-links">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/resources">Resources</a>
            <a href="/workshops">Workshops</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Blog</a>
            <a href="/testimonials">Testimonials</a>
          </div>
        </div>
      </nav>

      <section className="px-6 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
              Resources
            </p>

            <h1
              className="text-[clamp(2.8rem,10vw,6.8rem)] font-normal leading-[0.92] tracking-[0.045em] text-[#4f5f4b] sm:tracking-[0.055em]"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Gentle tools for reflection, steadiness, and support.
            </h1>

            <div className="mt-8 h-px w-20 bg-[#c58a5c]/75 sm:mt-9" />

            <p className="mt-8 max-w-3xl text-[1.02rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
              This space will hold therapy-informed resources, reflection
              prompts, worksheets, grounding practices, and supportive tools
              that can be returned to between sessions or whenever you need a
              quiet place to begin.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {resourceSections.map((section) => (
              <article
                key={section.number}
                className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/65 p-6 shadow-[0_24px_70px_rgba(79,95,75,0.05)] sm:p-8"
              >
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                  {section.number}
                </p>

                <h2
                  className="text-[clamp(2.2rem,6vw,3.8rem)] font-normal leading-[0.98] tracking-[0.04em]"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  {section.title}
                </h2>

                <p className="mt-6 text-[1rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
                  {section.description}
                </p>

                <div className="mt-8 border-t border-[#d8d0c5]/80 pt-6">
                  {section.resources.length > 0 ? (
                    <div className="space-y-4">
                      {section.resources.map((resource) => (
                        <a
                          key={resource.title}
                          href={resource.href}
                          className="block border border-[#d8d0c5]/80 bg-[#f4f1ec]/70 p-4 transition hover:border-[#c58a5c]"
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h3 className="text-base font-medium text-[#4f5f4b]">
                                {resource.title}
                              </h3>

                              <p className="mt-2 text-sm leading-7 text-[#4f5f4b]/70">
                                {resource.description}
                              </p>
                            </div>

                            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
                              {resource.label}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm leading-7 text-[#4f5f4b]/60">
                      Resources will be added here soon.
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-6xl bg-[#e7ded2]/55 px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
            A Note
          </p>

          <h2
            className="mx-auto max-w-4xl text-[clamp(2.25rem,8vw,4.8rem)] font-normal leading-[0.98] tracking-[0.04em]"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Resources can support the work, but they do not have to replace
            care.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-[1.02rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
            These resources are intended for reflection, grounding, and
            psychoeducation. They are not a substitute for therapy, crisis
            support, medical care, or emergency services.
          </p>

          <div className="mt-9">
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
            >
              Contact Solregn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}