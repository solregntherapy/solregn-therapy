export default function Home() {
  return (
    <main className="home-page">
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
            <div className="nav-item has-dropdown">
              <div className="nav-trigger">
                <a href="/about">About</a>
                <span aria-hidden="true">⌄</span>
              </div>

              <div className="dropdown-menu">
                <a href="/about">About Solregn</a>
                <a href="/about">About Founder</a>
              </div>
            </div>

            <div className="nav-item has-dropdown">
              <div className="nav-trigger">
                <a href="/services">Services</a>
                <span aria-hidden="true">⌄</span>
              </div>

              <div className="dropdown-menu">
                <a href="/services">Individual Therapy</a>
                <a href="/services">Couples Therapy</a>
                <a href="/services">Supervision</a>
              </div>
            </div>

            <div className="nav-item has-dropdown">
              <div className="nav-trigger">
                <a href="/resources">Resources</a>
                <span aria-hidden="true">⌄</span>
              </div>

              <div className="dropdown-menu">
                <a href="/resources">Emotional Regulation</a>
                <a href="/resources">Anxiety & Overthinking</a>
                <a href="/resources">Crisis Support</a>
              </div>
            </div>

            <div className="nav-item has-dropdown">
              <div className="nav-trigger">
                <a href="/workshops">Workshops</a>
                <span aria-hidden="true">⌄</span>
              </div>

              <div className="dropdown-menu">
                <a href="/workshops">Workplace Programs</a>
                <a href="/workshops">Webinars</a>
                <a href="/workshops">Trainings</a>
              </div>
            </div>

            <div className="nav-item has-dropdown">
              <div className="nav-trigger">
                <a href="/contact">Contact</a>
                <span aria-hidden="true">⌄</span>
              </div>

              <div className="dropdown-menu">
                <a href="/contact">Enquiry Form</a>
                <a href="/referral-network">Referral Network</a>
              </div>
            </div>

            <div className="nav-item">
              <a href="/blog">Blog</a>
            </div>

            <div className="nav-item">
              <a href="/testimonials">Testimonials</a>
            </div>
          </div>

          <details className="mobile-menu">
            <summary>
              <span>Menu</span>
              <span aria-hidden="true">⌄</span>
            </summary>

            <div className="mobile-menu-panel">
              <details className="mobile-nav-group">
                <summary>
                  <span>About</span>
                  <span aria-hidden="true">⌄</span>
                </summary>

                <div className="mobile-sub-links">
                  <a href="/about">About Solregn</a>
                  <a href="/about">About Founder</a>
                </div>
              </details>

              <details className="mobile-nav-group">
                <summary>
                  <span>Services</span>
                  <span aria-hidden="true">⌄</span>
                </summary>

                <div className="mobile-sub-links">
                  <a href="/services">Individual Therapy</a>
                  <a href="/services">Couples Therapy</a>
                  <a href="/services">Supervision</a>
                </div>
              </details>

              <details className="mobile-nav-group">
                <summary>
                  <span>Resources</span>
                  <span aria-hidden="true">⌄</span>
                </summary>

                <div className="mobile-sub-links">
                  <a href="/resources">Emotional Regulation</a>
                  <a href="/resources">Anxiety & Overthinking</a>
                  <a href="/resources">Crisis Support</a>
                </div>
              </details>

              <details className="mobile-nav-group">
                <summary>
                  <span>Workshops</span>
                  <span aria-hidden="true">⌄</span>
                </summary>

                <div className="mobile-sub-links">
                  <a href="/workshops">Workplace Programs</a>
                  <a href="/workshops">Webinars</a>
                  <a href="/workshops">Trainings</a>
                </div>
              </details>

              <details className="mobile-nav-group">
                <summary>
                  <span>Contact</span>
                  <span aria-hidden="true">⌄</span>
                </summary>

                <div className="mobile-sub-links">
                  <a href="/contact">Enquiry Form</a>
                  <a href="/referral-network">Referral Network</a>
                </div>
              </details>

              <a href="/blog" className="mobile-direct-link">
                Blog
              </a>

              <a href="/testimonials" className="mobile-direct-link">
                Testimonials
              </a>
            </div>
          </details>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-bg" />
        <div className="shadow-left" />
        <div className="shadow-center" />
        <div className="shadow-right" />

        <div className="hero-copy">
          <div className="hero-copy-inner">
            <h1>
              Solregn
              <br />
              Therapy
            </h1>

            <div className="hero-line" />

            <p>
              A steady space to think,
              <br />
              feel, and make sense of things.
            </p>

            <div className="tiny-leaf" aria-hidden="true">
              <svg
                width="34"
                height="34"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 37C22 26.5 26.5 17.5 34.5 8"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                />
                <path
                  d="M22 27C15.5 24.8 11.2 19.4 10.5 12.5C17.2 13.4 22 17.4 24.2 23.7"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.4 23.5C28.8 21.8 33.2 17 34 10.5C28.2 11.4 24.1 15.1 22.3 20.4"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="hero-vase" aria-hidden="true">
          <div className="vase-shadow" />
          <img src="/images/hero-vase.png" alt="" className="vase-image" />
        </div>

        <div className="stone-shelf" aria-hidden="true" />
      </section>
    </main>
  );
}