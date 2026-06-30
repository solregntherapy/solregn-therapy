type BlogPost = {
  title: string;
  description: string;
  category: string;
  href: string;
};

const blogPosts: BlogPost[] = [
  // Later, add blog posts like this:
  // {
  //   title: "Understanding Emotional Overwhelm",
  //   description:
  //     "A gentle reflection on why emotions can feel too much, and what it may mean to slow down with them.",
  //   category: "Emotional Regulation",
  //   href: "/blog/understanding-emotional-overwhelm",
  // },
];

export default function BlogPage() {
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

      <section className="px-6 pb-16 pt-32 text-center sm:px-8 sm:pb-20 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
            Blog
          </p>

          <h1
            className="text-[clamp(3rem,10vw,6.8rem)] font-normal leading-[0.92] tracking-[0.045em] text-[#4f5f4b] sm:tracking-[0.055em]"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Reflections on therapy, emotion, and inner life.
          </h1>

          <div className="mx-auto mt-8 h-px w-20 bg-[#c58a5c]/75" />

          <p className="mx-auto mt-8 max-w-3xl text-[1.02rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
            The Solregn Therapy blog will hold reflective writing on emotional
            regulation, relationships, trauma, attachment, grief, self-worth,
            and the slow work of understanding yourself with more compassion.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-6xl">
          {blogPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.map((post) => (
                <a
                  key={post.title}
                  href={post.href}
                  className="block border border-[#d8d0c5]/80 bg-[#f7f3ed]/65 p-6 shadow-[0_24px_70px_rgba(79,95,75,0.05)] transition hover:border-[#c58a5c] sm:p-8"
                >
                  <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                    {post.category}
                  </p>

                  <h2
                    className="text-[clamp(2.2rem,6vw,3.8rem)] font-normal leading-[0.98] tracking-[0.04em]"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    {post.title}
                  </h2>

                  <p className="mt-6 text-[1rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
                    {post.description}
                  </p>

                  <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
                    Read reflection
                  </p>
                </a>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-3xl border-y border-[#d8d0c5]/80 py-14 text-center">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Coming Soon
              </p>

              <h2
                className="mx-auto max-w-2xl text-[clamp(2.5rem,8vw,4.8rem)] font-normal leading-[0.98] tracking-[0.04em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Reflections will be added here slowly.
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-[1.02rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
                This space is being created for thoughtful writing, therapy
                reflections, and gentle psychoeducation. New pieces will be
                added as the library grows.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-6xl bg-[#e7ded2]/55 px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
            Explore More
          </p>

          <h2
            className="mx-auto max-w-4xl text-[clamp(2.25rem,8vw,4.8rem)] font-normal leading-[0.98] tracking-[0.04em]"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Looking for tools, worksheets, or grounding practices?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-[1.02rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
            The Resources page will hold practical supports and reflective
            tools that can be used alongside therapy or returned to between
            sessions.
          </p>

          <div className="mt-9">
            <a
              href="/resources"
              className="inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
            >
              View resources
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}