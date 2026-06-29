import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1ec] text-[#4f5f4b]">
      <nav className="fixed left-0 top-0 z-50 h-[88px] w-full border-b border-[#d8d0c5]/80 bg-[#f4f1ec]/95 backdrop-blur-md">
        <div className="mx-auto flex h-full w-[min(1180px,calc(100vw-88px))] items-center justify-between">
          <a
            href="/"
            className="font-heading text-[30px] font-normal tracking-[0.035em] text-[#4f5f4b]"
          >
            Solregn Therapy
          </a>

          <div className="hidden items-center gap-8 font-nav text-[12px] font-medium uppercase tracking-[0.18em] text-[#4f5f4b]/80 lg:flex">
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

      <section className="relative min-h-screen overflow-hidden bg-[#f4f1ec]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_16%_46%,rgba(79,95,75,0.10)_0%,rgba(79,95,75,0.05)_24%,transparent_52%),radial-gradient(ellipse_at_82%_36%,rgba(197,138,92,0.075)_0%,rgba(197,138,92,0.035)_30%,transparent_58%)]" />

        <div className="absolute left-[-150px] top-[165px] z-[1] h-[560px] w-[560px] rounded-full bg-[#4f5f4b]/10 blur-[85px]" />
        <div className="absolute left-[70px] top-[320px] z-[1] h-[290px] w-[290px] rounded-full bg-[#4f5f4b]/7 blur-[60px]" />
        <div className="absolute right-[8vw] top-[180px] z-[1] h-[360px] w-[360px] rounded-full bg-[#c58a5c]/8 blur-[85px]" />
        <div className="absolute left-1/2 top-1/2 z-[1] h-[360px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[90px]" />

        <div className="absolute bottom-0 left-0 z-[5] h-[128px] w-full border-t border-[#d8d0c5]/90 bg-[#d8d0c2]/82" />
        <div className="absolute bottom-[128px] left-0 z-[6] h-[42px] w-full bg-gradient-to-t from-[#4f5f4b]/5 to-transparent" />

        <div className="absolute bottom-[114px] right-[7vw] z-20 hidden w-[292px] lg:block">
          <div className="absolute bottom-[-14px] left-1/2 h-10 w-[220px] -translate-x-1/2 rounded-full bg-[#4f5f4b]/12 blur-2xl" />
          <div className="absolute bottom-[12px] left-1/2 h-24 w-[250px] -translate-x-1/2 rounded-full bg-[#4f5f4b]/5 blur-[42px]" />

          <Image
            src="/images/hero-vase.png"
            alt=""
            width={894}
            height={1424}
            priority
            className="relative h-auto w-full object-contain opacity-95 drop-shadow-[0_24px_42px_rgba(79,95,75,0.10)]"
          />
        </div>

        <div className="animate-soft-in absolute left-1/2 top-1/2 z-30 w-[min(720px,82vw)] -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="font-heading text-[clamp(4.2rem,6vw,5.9rem)] font-normal uppercase leading-[0.94] tracking-[0.145em] text-[#4f5f4b] drop-shadow-[0_20px_40px_rgba(79,95,75,0.08)]">
            Solregn
            <br />
            Therapy
          </h1>

          <div className="mx-auto my-7 h-px w-[74px] bg-[#c58a5c]/80" />

          <p className="font-heading text-[clamp(1.8rem,2.45vw,2.25rem)] italic leading-[1.35] tracking-[0.025em] text-[#4f5f4b]/90 drop-shadow-[0_14px_30px_rgba(79,95,75,0.06)]">
            A steady space to think,
            <br />
            feel, and make sense of things.
          </p>

          <div className="mt-7 flex justify-center text-[#c58a5c]/80">
            <svg
              width="34"
              height="34"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M18 31V6"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M18 19C14 17 11 14 9.5 10"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M18 23C22.3 21 25.8 17.5 27.5 13"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}