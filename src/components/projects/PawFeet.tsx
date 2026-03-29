import React, { useEffect, useRef } from "react";
import "./oceanedge.css";

const PawFeet: React.FC = () => {
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
          <div className="oe-meta">Project • Product Design</div>
          <h1 className="oe-title">PawFeet</h1>
          <div className="oe-sub">Mobile App — Pet Adoption</div>
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
            <div className="oe-kicker">PawFeet</div>
            <p className="oe-lead reveal" data-reveal>
              Designing Confidence-Driven Pet Adoption Experience
            </p>

            <div className="oe-accent reveal" data-reveal />

            <div className="reveal" data-reveal>
              <p style={{ marginTop: 12 }}>
                <strong>Role:</strong> UX Designer &nbsp; • &nbsp; <strong>Duration:</strong> 4 Weeks &nbsp; • &nbsp; <strong>Platform:</strong> Mobile Application
              </p>
              <p style={{ marginTop: 8 }}>
                Contribution: End-to-end UX process including research synthesis, interaction design, prototyping, and usability evaluation.
              </p>

              <div style={{ marginTop: 14 }} className="oe-cta">
                <a
                  className="oe-btn"
                  href="https://www.figma.com/proto/Mt2tsIltIXfu47COg4GPzP/PawFeet?node-id=2-1516&t=8E39LSRZRwYPHXdQ-0&scaling=scale-down&content-scaling=fixed&page-id=2%3A1503&starting-point-node-id=2%3A1516"
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
              Role: UX Designer<br />Duration: 4 Weeks<br />Platform: Mobile Application<br />Contribution: End-to-end UX process — research synthesis, interaction design, prototyping, usability evaluation
            </p>
          </aside>
        </div>
      </main>

      <section className="reveal" data-reveal>
        <h3>Project Overview</h3>
        <p>
          PawFeet is a mobile experience concept aimed at simplifying how people discover and adopt pets through a structured, emotionally reassuring digital journey. The project explores how thoughtful interaction design can reduce uncertainty and help users make confident adoption decisions.
        </p>
        <div className="oe-image-wrap">
          <img className="oe-image" src="/images/pawfeet.avif" alt="PawFeet overview" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>User Problem</h3>
        <p>
          Adopting a pet is an emotionally driven decision, but current digital platforms fail to support users during this journey.
        </p>
        <p>
          Users are often presented with dense listings, unclear adoption processes, and overwhelming information, which creates confusion instead of confidence.
        </p>
        <div className="oe-image-wrap">
          <img className="oe-image" src="/images/pawproblem.png" alt="User problem" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Context</h3>
        <p>
          Adopting a pet is an emotionally significant decision that involves trust, clarity, and logistical coordination. While many digital platforms attempt to streamline adoption, they often focus heavily on listing information rather than supporting the user’s decision-making journey.
        </p>
        <p>
          Users typically face fragmented discovery experiences, unclear adoption steps, and cognitive overload due to dense interfaces. These gaps create hesitation, reduce engagement, and sometimes lead users to abandon the digital adoption process altogether.
        </p>
        <p>
          This project investigates how a guided and empathetic interaction model can bridge the gap between emotional intent and practical action.
        </p>
        <div className="oe-image-grid oe-grid-2" style={{ marginTop: 14 }}>
          <img className="oe-image" src="/images/paw1.png" alt="Context image 1" />
          <img className="oe-image" src="/images/paw2.png" alt="Context image 2" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Core Insight</h3>
        <p>
          During early research conversations, a recurring behavioural pattern emerged: users were not only searching for pets — they were searching for confidence in their decision. Existing platforms attempted to solve this by providing more information and filters. However, users often felt overwhelmed rather than empowered. This shifted the design focus from feature expansion to decision reassurance through structured guidance and clarity.
        </p>
      </section>

      <section className="reveal" data-reveal>
        <h3>Problem Definition</h3>
        <ul>
          <li>Ineffective filtering mechanisms that did not align with real user decision criteria</li>
          <li>Overcrowded interfaces that increased cognitive effort and reduced trust</li>
          <li>Lengthy and ambiguous adoption workflows that disrupted emotional engagement</li>
        </ul>
        <p>These issues collectively weakened user motivation during a sensitive and time-bound decision journey.</p>
        <div className="oe-image-grid oe-grid-2" style={{ marginTop: 14 }}>
          <img className="oe-image oe-image--small" src="/images/paw3.png" alt="Problem image 1" />
          <img className="oe-image oe-image--small" src="/images/paw4.png" alt="Problem image 2" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Design Objective</h3>
        <p>
          The goal of PawFeet was not just to make pet discovery easier, but to design a journey that builds trust progressively. The experience aimed to enable meaningful discovery through preference-based filtering, present essential information in digestible and reassuring formats, reduce friction in scheduling interactions or adoption steps, and create an emotionally positive and accessible interface environment.
        </p>
      </section>

      <section className="reveal" data-reveal>
        <h3>Design Direction & Key Decisions</h3>
        <ol>
          <li><strong>Guided Discovery over Information Overload</strong> — Prioritise progressive filtering and curated presentation of pets to reduce decision fatigue.</li>
          <li><strong>Emotional Clarity through Visual Hierarchy</strong> — Use a friendly visual tone, clear content grouping, and balanced whitespace to create a calm and trustworthy browsing environment.</li>
          <li><strong>Simplified Commitment Flow</strong> — Redesign adoption interactions as step-by-step guided actions rather than complex multi-form processes.</li>
        </ol>
        <div className="oe-image-grid oe-grid-2" style={{ marginTop: 14 }}>
          <img className="oe-image oe-image--small" src="/images/paw5.png" alt="Key direction 1" />
          <img className="oe-image oe-image--small" src="/images/paw6.png" alt="Key direction 2" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Exploration Process</h3>
        <p>
          The design process began with rapid paper explorations to map core behavioural journeys — from initial curiosity to final adoption intent. Low-fidelity prototypes were then developed to test navigation clarity and feature prioritisation. Iterations were guided by usability observations, particularly around filtering logic, button accessibility, and form simplification.
        </p>
      </section>

      <section className="reveal" data-reveal>
        <h3>User Persona</h3>
        <div className="oe-image-wrap">
          <img className="oe-image" src="/images/PawPersona.png" alt="PawFeet persona" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Final Experience</h3>
        <p>
          The resulting mobile experience introduced structured preference filters aligned with real adoption decision factors, clear pet profile layouts emphasising essential emotional and practical information, a guided adoption flow that progressively builds user commitment, and accessible interaction components designed for improved readability and ease of use.
        </p>
      </section>

      <section className="reveal" data-reveal>
        <h3>Outcome & Reflection</h3>
        <p>
          User feedback on the refined prototype indicated improved clarity in understanding adoption steps and reduced effort in locating suitable pets. More importantly, users expressed increased confidence in navigating the digital adoption journey.
        </p>
      </section>

      <section className="reveal" data-reveal>
        <h3>Key Learnings</h3>
        <ul>
          <li>Designing for emotional reassurance can be as critical as designing for functional efficiency</li>
          <li>Reducing cognitive load often requires removing features rather than adding them</li>
          <li>Early behavioural insights can significantly influence interaction strategy</li>
          <li>Structured guidance improves engagement in decision-intensive experiences</li>
        </ul>
      </section>

      

      <footer className="oe-foot">
        <div>
          <a href="/" className="oe-back">← Back to portfolio</a>
        </div>
      </footer>
      <a className="oe-next" href="/projects/vellora" aria-label="Next project: Vellora">
        <img className="oe-next-thumb" src="/images/velora.png" alt="Vellora thumbnail" />
        <span className="oe-next-meta">
          <span className="oe-next-prefix">Next project</span>
          <span className="oe-next-label">Vellora</span>
        </span>
        <div className="oe-next-tooltip" role="group" aria-hidden="true">
          <img src="/images/velora.png" alt="Vellora preview" className="oe-next-tooltip-img" />
          <div className="oe-next-tooltip-text">
            <strong>Vellora</strong>
            <div className="oe-next-tooltip-sub">Smart urban bicycle booking experience</div>
          </div>
        </div>
      </a>
      <a className="oe-prev" href="/projects/oceanedge" aria-label="Previous project: Ocean Edge">
        <img className="oe-prev-thumb" src="/images/oceanedge%20cover.png" alt="Ocean Edge thumbnail" />
        <span className="oe-prev-meta">
          <span className="oe-prev-prefix">Previous project</span>
          <span className="oe-prev-label">Ocean Edge</span>
        </span>
        <div className="oe-prev-tooltip" role="group" aria-hidden="true">
          <img src="/images/oceanedge%20cover.png" alt="Ocean Edge preview" className="oe-prev-tooltip-img" />
          <div className="oe-prev-tooltip-text">
            <strong>Ocean Edge</strong>
            <div className="oe-prev-tooltip-sub">Experience-first booking platform</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PawFeet;
