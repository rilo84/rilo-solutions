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
            <img className="brand-logo" src="/rilo-logo.jpg" alt="Rilo Solutions logotyp" />Rilo Solutions
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
            <div className="wheel-illustration" aria-label="Fyra tekniska byggblock: databas, C#, Angular och moln">
              <div className="wheel-center"><span>R</span></div>
              <div className="wheel-node node-db">
                <span className="database-glyph"><i /><i /><i /></span>
              </div>
              <div className="wheel-node node-csharp">C#</div>
              <div className="wheel-node node-angular"><span className="angular-glyph">A</span></div>
              <div className="wheel-node node-cloud"><span className="cloud-glyph"><i /><i /><i /></span></div>
            </div>
          </div>
        </section>

        <section className="trust"><div className="wrap trust-inner"><p>Vi bygger med teknik som håller</p><div className="stack"><span>.NET</span><span>Azure</span><span>React</span><span>Angular</span><span>TypeScript</span></div></div></section>

        <section className="services" id="tjanster">
          <div className="wrap">
            <div className="section-head"><div><div className="eyebrow">Vad vi gör</div><h2>Rätt grund för nästa steg.</h2></div><p>Oavsett om ni behöver förstärka teamet, modernisera en plattform eller få riktning i en komplex teknisk fråga, arbetar vi nära er verksamhet.</p></div>
            <div className="cards">{services.map((service) => <article className="card" key={service.title}><div className="icon">{service.icon}</div><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
          </div>
        </section>

        <section className="contact" id="kontakt"><div className="wrap contact-grid"><div><div className="eyebrow">Kontakta oss</div><h2>Har ni en utmaning vi kan lösa tillsammans?</h2></div><div><p>Berätta kort om var ni står. Vi återkommer gärna för ett första, förutsättningslöst samtal.</p><a href="mailto:rilosolutions@gmail.com" className="button">hej@rilosolutions.se <span className="arrow">→</span></a></div></div></section>
      </main>

      <footer><div className="wrap footer-inner"><div className="footer-brand">Rilo Solutions</div><div>Systemutveckling &amp; arkitektur · Sverige</div><div>© {new Date().getFullYear()} Rilo Solutions</div></div></footer>
    </>
  );
}
