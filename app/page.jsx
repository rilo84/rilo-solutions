"use client";

import { useEffect, useState } from "react";

const services = [
  {
    icon: "⌘",
    title: "Systemutveckling",
    text: "Robusta digitala produkter och tjänster, byggda med kvalitet, användarnytta och långsiktighet i fokus.",
  },
  {
    icon: "◫",
    title: "Systemarkitektur",
    text: "Tydliga teknikval och strukturer som gör era system enklare att utveckla, skala och förvalta.",
  },
  {
    icon: "↗",
    title: "Teknisk rådgivning",
    text: "Erfaret stöd i vägval, modernisering och teamarbete — när besluten behöver vara både snabba och välgrundade.",
  },
];

const steps = [
  ["01", "Förstå", "Vi lär känna ert sammanhang, era användare och vad som faktiskt skapar värde."],
  ["02", "Förenkla", "Vi hittar den tydligaste vägen framåt och gör väl avvägda teknikval tillsammans."],
  ["03", "Förverkliga", "Vi bygger, förbättrar och lämnar efter oss ett system som teamet kan äga med trygghet."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header id="top" className={scrolled ? "scrolled" : ""}>
        <div className="wrap nav">
          <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="mark">R</span>Rilo Solutions
          </a>
          <nav className={menuOpen ? "links open" : "links"}>
            <a href="#tjanster" onClick={() => setMenuOpen(false)}>Tjänster</a>
            <a href="#arbetssatt" onClick={() => setMenuOpen(false)}>Arbetssätt</a>
            <a href="#kontakt" className="nav-cta" onClick={() => setMenuOpen(false)}>Prata med oss</a>
          </nav>
          <button className="menu" aria-label="Öppna meny" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">Systemutveckling &amp; arkitektur</div>
              <h1>Teknik som tar er <em>framåt.</em></h1>
              <p className="lead">Rilo Solutions hjälper er att förvandla komplexa behov till stabila, skalbara digitala lösningar — från första idé till förvaltning.</p>
              <div className="actions">
                <a className="button" href="#kontakt">Låt oss prata <span className="arrow">→</span></a>
                <a className="text-link" href="#tjanster">Se våra tjänster</a>
              </div>
              <div className="signal"><span className="pulse" />Tillgängliga för nya uppdrag</div>
            </div>
            <div className="architecture" aria-label="Illustration av sammanlänkade system">
              <span className="code-label">System / connected</span><span className="orbit" /><span className="orbit two" /><span className="axis" />
              <span className="node main">RILO<br />CORE</span><span className="node small n1">CLOUD</span><span className="node small n2">DATA</span><span className="node small n3">API</span><span className="node n4">UX</span><span className="code-label bottom">01—04</span>
            </div>
          </div>
        </section>

        <section className="trust"><div className="wrap trust-inner"><p>Vi bygger med teknik som håller</p><div className="stack"><span>.NET</span><span>Azure</span><span>React</span><span>TypeScript</span><span>Cloud native</span></div></div></section>

        <section className="services" id="tjanster">
          <div className="wrap">
            <div className="section-head"><div><div className="eyebrow">Vad vi gör</div><h2>Rätt grund för nästa steg.</h2></div><p>Oavsett om ni behöver förstärka teamet, modernisera en plattform eller få riktning i en komplex teknisk fråga, arbetar vi nära er verksamhet.</p></div>
            <div className="cards">{services.map((service) => <article className="card" key={service.title}><div className="icon">{service.icon}</div><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
          </div>
        </section>

        <section className="approach" id="arbetssatt">
          <div className="wrap">
            <div className="section-head"><div><div className="eyebrow">Vårt arbetssätt</div><h2>Från komplexitet till klarhet.</h2></div><p>Vi tror på transparens, korta återkopplingsvägar och tekniska lösningar som är lätta att förstå — även om de löser svåra problem.</p></div>
            <div className="steps">{steps.map(([number, title, text]) => <div className="step" key={number}><span className="step-num">{number}</span><h3>{title}</h3><p>{text}</p><span>↘</span></div>)}</div>
          </div>
        </section>

        <section className="contact" id="kontakt"><div className="wrap contact-grid"><div><div className="eyebrow">Kontakta oss</div><h2>Har ni en utmaning vi kan lösa tillsammans?</h2></div><div><p>Berätta kort om var ni står. Vi återkommer gärna för ett första, förutsättningslöst samtal.</p><a href="mailto:hej@rilosolutions.se" className="button">hej@rilosolutions.se <span className="arrow">→</span></a></div></div></section>
      </main>

      <footer><div className="wrap footer-inner"><div className="footer-brand">Rilo Solutions</div><div>Systemutveckling &amp; arkitektur · Sverige</div><div>© {new Date().getFullYear()} Rilo Solutions</div></div></footer>
    </>
  );
}
