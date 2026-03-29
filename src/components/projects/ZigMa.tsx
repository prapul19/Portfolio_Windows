import React, { useEffect, useRef } from "react";
import "./oceanedge.css";

const ZigMa: React.FC = () => {
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
          <div className="oe-meta">ZigMa — Career Progress Ecosystem</div>
          <h1 className="oe-title">ZigMa</h1>
          <div className="oe-sub">Career Progress Ecosystem</div>
        </div>
      </header>

      <main className="oe-hero" ref={heroRef}>
        <div className="oe-hero-grid">
          <div>
            <div className="oe-kicker">Overview</div>
            <p className="oe-lead reveal" data-reveal>
              ZigMa is a mobile platform designed to support users throughout their professional journey — from learning skills to applying for jobs and connecting with recruiters. The project addresses the fragmented nature of current career platforms by bringing learning, networking, and job discovery into a single unified experience. The focus was not just on helping users find jobs, but on enabling continuous career progress.
            </p>

            <div className="oe-accent reveal" data-reveal />

            <div style={{ marginTop: 14 }} className="oe-cta reveal" data-reveal>
              <a
                className="oe-btn"
                href="https://www.figma.com/proto/89uLsutxXe20WhbSp8wqSZ/Zigma?node-id=2-44&p=f&t=ByB6f8qgFQyVfmoJ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A44"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Prototype
              </a>
            </div>
          </div>

          <aside className="oe-panel reveal" data-reveal>
            <h4>Quick snapshot</h4>
            <p>
              Platform: Mobile<br />
              Role: Product / UX Designer<br />
              Scope: End-to-end experience design<br />
              Focus: Career discovery · Job application · Networking · Profile systems
            </p>
          </aside>
        </div>
      </main>

      <section className="reveal" data-reveal>
        <h3>Overview</h3>
        <p>
          ZigMa is designed around a simple idea — career growth is a continuous journey, not a one-time event.
        </p>
        <p>
          By connecting learning, profile building, networking, and job discovery into a single ecosystem, the platform helps users move forward with clarity, reduces decision friction, and improves confidence at every stage of their career.
        </p>
        <div className="oe-image-wrap">
          <img className="oe-image" src="/images/zigmaa.avif" alt="ZigMa main" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Problem</h3>
        <p>Users face several challenges:</p>
        <ul>
          <li>No clear transition from learning skills to applying for jobs</li>
          <li>Difficulty maintaining a structured professional identity</li>
          <li>Limited and uncontextual networking opportunities</li>
          <li>Inefficient job filtering and tracking</li>
        </ul>
        <p>
          Recruiters also struggle to assess candidates beyond static resumes, making it harder to identify true readiness.
        </p>
        <div className="oe-image-wrap">
          <img className="oe-image" src="/images/problemzig.png" alt="Problem ZigMa" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Goal</h3>
        <ul>
          <li>Enable continuous professional development</li>
          <li>Simplify job discovery with intelligent filtering</li>
          <li>Support meaningful candidate–recruiter interaction</li>
          <li>Provide visibility into user growth and readiness</li>
        </ul>
      </section>

      <section className="reveal" data-reveal>
        <h3>User Persona</h3>
        <p>Representative personas captured during research.</p>
        <div className="oe-image-grid">
          <img className="oe-image" src="/images/personazig1.png" alt="Persona Zig 1" />
          <img className="oe-image" src="/images/personazig2.png" alt="Persona Zig 2" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>User Flow</h3>
        <ol>
          <li>User signs up / logs in</li>
          <li>Completes onboarding</li>
          <li>Lands on dashboard</li>
          <li>Explores learning or job recommendations</li>
          <li>Builds profile progressively</li>
          <li>Applies to jobs</li>
          <li>Connects with recruiters</li>
          <li>Tracks progress</li>
        </ol>
        <p><strong>Key Drop-off Point:</strong> Users struggle during the transition from learning to applying due to lack of clarity and guidance.</p>
        <div className="oe-image-wrap">
          <img className="oe-image" src="/images/flowzig.png" alt="User Flow ZigMa" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Wireframing</h3>
        <p>Initial explorations included separate modules vs integrated dashboard, static profile vs progressive profile system, and basic job listing vs structured filtering. Final direction: a unified dashboard with interconnected flows across learning, profile, and job discovery.</p>
        <div className="oe-image-wrap">
          <img className="oe-image" src="/images/wireframezig.png" alt="Wireframing ZigMa" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Core Product Insight</h3>
        <p>
          Instead of designing ZigMa as a traditional job portal, the platform was built around the idea that career growth is a continuous journey, not a one-time event. This led to a progression-based experience where users move seamlessly through: Learning → Profile Building → Networking → Job Discovery → Application. This approach reduces uncertainty and increases user motivation.
        </p>
        <div className="oe-image-grid oe-grid-2" style={{ marginTop: 14 }}>
          <img className="oe-image oe-image--small" src="/images/zigmain.png" alt="Zig Main 1" />
          <img className="oe-image oe-image--small" src="/images/zigmain2.png" alt="Zig Main 2" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Solution</h3>
        <ol>
          <li><strong>Unified Home Dashboard:</strong> A central hub combining learning suggestions, job recommendations, and activity signals to support continuous engagement.</li>
          <li><strong>Structured Job Discovery:</strong> Skill-based filtering and organised listings help users find relevant opportunities quickly and reduce overwhelm.</li>
          <li><strong>Progressive Profile Builder:</strong> A modular profile system allows users to gradually build their professional identity, improving clarity and confidence.</li>
          <li><strong>Contextual Networking:</strong> A social layer enables users to interact with peers and recruiters, encouraging engagement and visibility.</li>
          <li><strong>Recruiter Interaction Flow:</strong> Simplified job posting and direct communication channels improve efficiency for both recruiters and candidates.</li>
          <li><strong>Guided Application Flow:</strong> A step-by-step application process reduces confusion and improves completion rates.</li>
        </ol>
        <div className="oe-image-grid" style={{ marginTop: 14 }}>
          <img className="oe-image oe-image--small" src="/images/zig1.png" alt="Zig Solution 1" />
          <img className="oe-image oe-image--small" src="/images/zig2.png" alt="Zig Solution 2" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Screen Sections</h3>
        <ul>
          <li>Onboarding & Authentication</li>
          <li>Home Dashboard</li>
          <li>Job Discovery & Filtering</li>
          <li>Job Detail View</li>
          <li>Profile Builder</li>
          <li>Social Feed & Networking</li>
          <li>Recruiter Job Posting</li>
          <li>Messaging & Communication</li>
          <li>Application Flow</li>
        </ul>
        <div className="oe-image-grid" style={{ marginTop: 14 }}>
          <img className="oe-image oe-image--small" src="/images/zigmain3.png" alt="Zig Screen 1" />
          <img className="oe-image oe-image--small" src="/images/zigmain4.png" alt="Zig Screen 2" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Impact</h3>
        <p>Improved clarity in career progression, reduced friction across multiple platforms, increased engagement through structured experience, and better alignment between candidates and recruiters.</p>
      </section>

      <section className="reveal" data-reveal>
        <h3>Key Learnings</h3>
        <ul>
          <li>Designing ecosystems requires balancing multiple user goals</li>
          <li>Career platforms benefit from progress visibility rather than static listings</li>
          <li>Networking significantly improves engagement and retention</li>
          <li>System-level thinking is essential when multiple user roles exist</li>
        </ul>
      </section>

      <section className="reveal" data-reveal>
        <h3>Conclusion</h3>
        <p>ZigMa demonstrates how integrating fragmented career touchpoints into a single platform can improve user confidence, engagement, and decision-making. By focusing on progression instead of isolated actions, the platform supports users not just in finding jobs, but in building their careers.</p>
      </section>

      <footer className="oe-foot">
        <div>
          <a href="/" className="oe-back">← Back to portfolio</a>
        </div>
      </footer>
      <a className="oe-next" href="/projects/oceanedge" aria-label="Next project: Ocean Edge">
        <img className="oe-next-thumb" src="/images/oceanedge%20cover.png" alt="Ocean Edge thumbnail" />
        <span className="oe-next-meta">
          <span className="oe-next-prefix">Next project</span>
          <span className="oe-next-label">Ocean Edge</span>
        </span>
        <div className="oe-next-tooltip" role="group" aria-hidden="true">
          <img src="/images/oceanedge%20cover.png" alt="Ocean Edge preview" className="oe-next-tooltip-img" />
          <div className="oe-next-tooltip-text">
            <strong>Ocean Edge</strong>
            <div className="oe-next-tooltip-sub">Experience-first booking platform</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ZigMa;
