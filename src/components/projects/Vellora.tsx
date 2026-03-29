import React, { useEffect, useRef } from "react";
import "./oceanedge.css";

const Vellora: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const dx = (e.clientX - rect.left) / rect.width - 0.5;
      const dy = (e.clientY - rect.top) / rect.height - 0.5;
      hero.style.transform = `translate3d(${dx * 6}px,${dy * 6}px,0)`;
    };
    const onLeave = () => (hero.style.transform = "none");
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="oe-wrap">
      <a className="oe-sticky-back" href="/">← Back</a>
      <header className="oe-header">
        <img src="/images/logo.png" alt="logo" className="oe-logo" />
        <div>
          <div className="oe-meta">Project • Mobility</div>
          <h1 className="oe-title">Vellora</h1>
          <div className="oe-sub">Smart Urban Bicycle Booking Platform</div>
        </div>
      </header>

      <main className="oe-hero" id="oe-hero" ref={heroRef}>
        <svg className="oe-dots" width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g1"><stop offset="0" stopColor="#6ad3ff"/><stop offset="1" stopColor="#8dd3c7" stopOpacity="0"/></radialGradient>
          </defs>
          <circle cx="30" cy="20" r="28" fill="url(#g1)" />
        </svg>

        <div className="oe-hero-grid">
          <div className="oe-hero-left">
            <div className="oe-kicker">Velora</div>
            <p className="oe-lead reveal" data-reveal>
              Designing a Seamless Bicycle Discovery & Purchase Experience
            </p>

            <div className="oe-accent reveal" data-reveal />

            <div className="reveal" data-reveal>
              <p style={{ marginTop: 12 }}>
                <strong>Role:</strong> UI / UX Designer &nbsp; • &nbsp; <strong>Platform:</strong> Mobile &nbsp; • &nbsp; <strong>Scope:</strong> Product browsing · configuration · cart interaction · checkout flow
              </p>
              <div style={{ marginTop: 14 }} className="oe-cta">
                <a
                  className="oe-btn"
                  href="https://www.figma.com/proto/uPy6xTEWighnLegwSpJEQT/Online-Bike-Shopping-App--Community-?node-id=1-2276&p=f&t=KXes9VHR3Z6KlGnQ-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A4&starting-point-node-id=1%3A2276"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Prototype
                </a>
              </div>
            </div>
          </div>

          <aside className="oe-panel reveal" data-reveal>
            <h4>Quick snapshot</h4>
            <p>
              Role: UI / UX Designer<br />Platform: Mobile<br />Scope: Product browsing · configuration · cart interaction · checkout flow
            </p>
          </aside>
        </div>
      </main>

      <section className="reveal" data-reveal>
        <h3>Project Overview</h3>
        <p>
          Velora is a mobile commerce experience designed to simplify how users explore, customise, and purchase performance bicycles through an immersive and visually guided interface. The project focuses on improving product discoverability, decision clarity, and checkout flow efficiency in high-involvement purchase scenarios such as sports equipment buying.
        </p>
        <div className="oe-image-wrap">
          <img className="oe-image" src="/images/velora.png" alt="Velora overview" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Context</h3>
        <p>
          Purchasing a bicycle online involves multiple layers of decision-making — from comparing models and specifications to evaluating pricing, accessories, and overall suitability. Existing ecommerce experiences often present dense information structures and limited visual engagement, making it difficult for users to confidently select the right product.
        </p>
        <p>
          This project explores how a visually immersive and structured mobile interface can reduce friction and support confident purchase decisions.
        </p>
      </section>

      <section className="reveal" data-reveal>
        <h3>Problem</h3>
        <ul>
          <li>Difficulty comparing bicycle variants and specifications quickly</li>
          <li>Lack of engaging product visualisation during browsing</li>
          <li>Confusing cart updates and pricing visibility</li>
          <li>Multi-step checkout interactions increasing cognitive effort</li>
        </ul>
        <p>
          These gaps can lead to hesitation, decision fatigue, and abandoned purchase journeys.
        </p>
        <div className="oe-image-wrap" style={{ marginTop: 14 }}>
          <img className="oe-image" src="/images/velproblem.png" alt="Velora problem" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Design Goal</h3>
        <p>
          The goal was to create a fluid product exploration and checkout experience that encourages visual engagement with product details, simplifies variant comparison and configuration, provides clear pricing feedback throughout the journey, and enables a smooth transition from discovery to purchase.
        </p>
        <div className="oe-image-wrap" style={{ marginTop: 14 }}>
          <img className="oe-image" src="/images/velFlow.png" alt="Velora flow" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Design Direction</h3>
        <h4>Visual-First Product Discovery</h4>
        <p>
          Large product imagery and card-based layouts were used to prioritise emotional engagement and quick scanning.
        </p>
        <h4>Progressive Information Reveal</h4>
        <p>
          Instead of overwhelming users with specifications, detailed information is introduced contextually as users move deeper into the product journey.
        </p>
        <h4>Transparent Cart Interaction</h4>
        <p>
          Dynamic cart updates and pricing breakdowns were designed to improve trust and reduce uncertainty during checkout.
        </p>
        <div className="oe-image-grid oe-grid-2" style={{ marginTop: 14 }}>
          <img className="oe-image oe-image--small" src="/images/Vel1.png" alt="Design direction 1" />
          <img className="oe-image oe-image--small" src="/images/vel2.png" alt="Design direction 2" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Wireframe</h3>
        <p>Wireframes and low-fidelity explorations guided the product layout, navigation, and progressive disclosure patterns used across the catalogue and product detail views.</p>
        <div className="oe-image-wrap" style={{ marginTop: 14 }}>
          <img className="oe-image" src="/images/velwireframe.png" alt="Velora wireframe" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>User Persona</h3>
        <div className="oe-image-wrap">
          <img className="oe-image" src="/images/velpersona.png" alt="Velora persona" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Key Experience Flow</h3>
        <ol>
          <li>Browse bicycle catalogue</li>
          <li>View detailed product overview</li>
          <li>Explore specifications and configuration options</li>
          <li>Add selected model to cart</li>
          <li>Review pricing summary</li>
          <li>Complete checkout process</li>
        </ol>
      </section>

      <section className="reveal" data-reveal>
        <h3>Outcome</h3>
        <p>
          The resulting interface delivers a more focused and visually engaging ecommerce experience. Users can evaluate products faster, understand pricing clearly, and move confidently toward purchase completion.
        </p>
        <div className="oe-image-grid oe-grid-2" style={{ marginTop: 14 }}>
          <img className="oe-image oe-image--small" src="/images/vel3.png" alt="Velora outcome 1" />
          <img className="oe-image oe-image--small" src="/images/vel4.png" alt="Velora outcome 2" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Key Learnings</h3>
        <ul>
          <li>High-value product purchases require emotional engagement alongside functional clarity</li>
          <li>Visual hierarchy significantly influences perceived product quality</li>
          <li>Transparent pricing feedback improves checkout confidence</li>
          <li>Structured interaction flows reduce abandonment in mobile commerce</li>
        </ul>
      </section>

      <footer className="oe-foot">
        <div>
          <a href="/" className="oe-back">← Back to portfolio</a>
        </div>
      </footer>
      <a className="oe-next" href="/projects/zigma" aria-label="Next project: ZigMa">
        <img className="oe-next-thumb" src="/images/zigmaa.avif" alt="ZigMa thumbnail" />
        <span className="oe-next-meta">
          <span className="oe-next-prefix">Next project</span>
          <span className="oe-next-label">ZigMa</span>
        </span>
        <div className="oe-next-tooltip" role="group" aria-hidden="true">
          <img src="/images/zigmaa.avif" alt="ZigMa preview" className="oe-next-tooltip-img" />
          <div className="oe-next-tooltip-text">
            <strong>ZigMa</strong>
            <div className="oe-next-tooltip-sub">Career progress ecosystem for job seekers</div>
          </div>
        </div>
      </a>
      <a className="oe-prev" href="/projects/pawfeet" aria-label="Previous project: PawFeet">
        <img className="oe-prev-thumb" src="/images/pawfeet.avif" alt="PawFeet thumbnail" />
        <span className="oe-prev-meta">
          <span className="oe-prev-prefix">Previous project</span>
          <span className="oe-prev-label">PawFeet</span>
        </span>
        <div className="oe-prev-tooltip" role="group" aria-hidden="true">
          <img src="/images/pawfeet.avif" alt="PawFeet preview" className="oe-prev-tooltip-img" />
          <div className="oe-prev-tooltip-text">
            <strong>PawFeet</strong>
            <div className="oe-prev-tooltip-sub">Adoption-first mobile app</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Vellora;
