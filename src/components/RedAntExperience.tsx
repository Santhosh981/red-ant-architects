import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ArchitecturalCanvas, GlobeCanvas } from "./RedAnt3D";
import { images, processStages, projects, services, type Project } from "@/data/red-ant";

const chars = (text: string) => text.split("").map((char, index) => <span className="char" key={`${char}-${index}`}>{char === " " ? "\u00a0" : char}</span>);
const Meta = ({ project, index }: { project: Project; index: number }) => <div className="project-meta"><span>{String(index + 1).padStart(2, "0")}</span><h3>{project.name}</h3><p>{project.city} / {project.country}</p><p>{project.year} — {project.category}</p></div>;

function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="site-nav" data-nav><a className="brand" href="#top">RED ANT</a><nav className={open ? "nav-links is-open" : "nav-links"}>{[["WORK","#work"],["STUDIO","#studio"],["SERVICES","#services"],["CONTACT","#contact"]].map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav><button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}><i /><i /></button></header>;
}

function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(pointer: coarse)").matches) return;
    const x = gsap.quickTo(el, "x", { duration: .45, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration: .45, ease: "power3" });
    const move = (e: MouseEvent) => { x(e.clientX); y(e.clientY); };
    const over = (e: MouseEvent) => { const target = (e.target as HTMLElement).closest("[data-cursor]") as HTMLElement | null; el.dataset["label"] = target?.dataset["cursor"] ?? ""; };
    window.addEventListener("mousemove", move); document.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); };
  }, []);
  return <div ref={ref} className="cursor" aria-hidden="true"><span /></div>;
}

function LoadingScreen() { return <div className="loader" data-loader><div className="loader-mark">RED ANT</div><span>ARCHITECTURE / DESIGN / SPACE</span><strong data-progress>00</strong></div>; }

function Hero() { return <section className="hero" id="top"><div className="hero-media" data-hero-media><img src={images.hero} width={1600} height={1104} fetchPriority="high" alt="Cantilevered concrete residence at dusk" /></div><div className="hero-shade" /><div className="hero-copy"><p className="technical">INDEPENDENT ARCHITECTURE STUDIO <span>— 01</span></p><h1><span className="hero-red">{chars("RED")}</span><span>{chars("ANT")}</span></h1><div className="hero-disciplines"><span>ARCHITECTURE</span><span>DESIGN</span><span>SPACE</span></div></div><div className="hero-line" data-hero-line /><div className="scroll-cue">SCROLL TO ENTER <b>↓</b></div></section>; }

function Years() { return <section className="years exhibition" id="studio"><div className="drawing-grid" /><div className="years-inner"><p className="technical">STUDIO / EXPERIENCE</p><div className="years-display"><strong className="years-number">25+</strong><div className="years-words"><span>YEARS</span><span>OF</span><span>DESIGN</span></div></div><p className="years-copy word-reveal">Architecture shaped by experience, experimentation and a constant pursuit of better spaces.</p></div></section>; }

function TileProject() { const p = projects.at(0); if (!p) return null; return <article className="project tile-project"><div className="tile-frame" data-cursor="VIEW">{Array.from({length: 7}, (_, i) => <div className="tile" key={i} style={{"--tile": i} as React.CSSProperties}><img src={p.image} width={1600} height={1104} alt={p.name} /></div>)}</div><Meta project={p} index={0} /></article>; }
function TheatreProject() { const p = projects.at(1); if (!p) return null; return <article className="project theatre-project"><div className="theatre-image" data-cursor="VIEW"><img loading="lazy" src={p.image} width={1600} height={1104} alt={p.name} /></div><Meta project={p} index={1} /></article>; }
function HorizontalProjects() { return <section className="horizontal-wrap"><div className="horizontal-track">{projects.slice(2,4).map((p,i) => <article className="horizontal-panel" key={p.name}><div className="horizontal-image" data-cursor="VIEW"><img loading="lazy" src={p.image} width={1600} height={1104} alt={p.name} /></div><Meta project={p} index={i+2} /></article>)}</div></section>; }
function CircularProject() { const p = projects.at(4); if (!p) return null; return <article className="project circular-project"><div className="orbit"><span>LAT 55.6761° N</span><span>LONG 12.5683° E</span><span>BUILT / 2024</span><span>TYPE / COMMERCIAL</span></div><div className="circle-image" data-cursor="VIEW"><img loading="lazy" src={p.image} width={1600} height={1104} alt={p.name} /></div><Meta project={p} index={4} /></article>; }
function ZoomProject() { const p = projects.at(5); const next = projects.at(6); if (!p || !next) return null; return <article className="project zoom-project"><div className="zoom-under"><img loading="lazy" src={next.image} width={1600} height={1104} alt={next.name} /></div><div className="zoom-front"><img loading="lazy" src={p.image} width={1600} height={1104} alt={p.name} /></div><Meta project={p} index={5} /></article>; }
function SplitProject() { const p = projects.at(6); if (!p) return null; return <article className="project split-project"><div className="split-media"><img loading="lazy" src={p.image} width={1600} height={1104} alt={p.name} /></div><div className="split-info"><Meta project={p} index={6} /><p>AN URBAN HOME AS A LIVING LANDSCAPE.</p></div></article>; }

function Work() { return <section className="work" id="work"><div className="section-title"><span className="technical">02 / SELECTED PROJECTS</span><h2>SELECTED<br/><i>WORK</i></h2></div><TileProject/><TheatreProject/><HorizontalProjects/><CircularProject/><ZoomProject/><SplitProject/></section>; }

function ObjectSection() { return <section className="object-section"><div className="canvas-wrap"><ArchitecturalCanvas /></div><div className="object-label"><span className="technical">03 / MATERIAL STUDY</span><h2>MATTER<br/>IN <i>MOTION</i></h2><p>CONCRETE / GLASS / LIGHT</p></div></section>; }
function ShapeSection() { return <section className="shape-section"><div className="canvas-wrap"><ArchitecturalCanvas morph /></div><div className="shape-words"><span>FORM</span><span>SPACE</span><span>MATERIAL</span><span>LIGHT</span></div><p className="technical shape-index">04 / SHAPE STUDY</p></section>; }

function Services() { return <section className="services exhibition" id="services"><div className="services-heading"><span className="technical">05 / CAPABILITIES</span><h2>WHAT<br/>WE <i>DO</i></h2></div><div className="service-list">{services.map((service, i) => <div className="service" key={service}><span>{String(i+1).padStart(2,"0")}</span><h3>{chars(service)}</h3><b>↗</b></div>)}</div></section>; }

function GridSection() { return <section className="grid-section"><svg viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true"><g>{[100,260,420,580,740,900,1060].map(x=><line key={`v${x}`} x1={x} y1="0" x2={x} y2="700" />)}{[100,250,400,550].map(y=><line key={`h${y}`} x1="0" y1={y} x2="1200" y2={y} />)}<rect x="260" y="100" width="320" height="300"/><rect x="740" y="250" width="320" height="300"/></g></svg><img className="grid-image grid-image-a" loading="lazy" src={images.courtyard} width={1600} height={1104} alt="Red Courtyard"/><img className="grid-image grid-image-b" loading="lazy" src={images.monolith} width={1600} height={1104} alt="Monolith"/><div className="grid-label"><span>DRAWING 07</span><strong>SPACE IS A SYSTEM.</strong></div></section>; }

function GlobalPresence() { const [active, setActive] = useState<Project | null>(null); return <section className="world"><div className="world-copy"><span className="technical">06 / GLOBAL PRESENCE</span><h2>BUILT<br/>AROUND<br/><i>THE WORLD</i></h2></div><div className="globe-wrap"><GlobeCanvas projects={projects} onHover={setActive}/>{active && <div className="globe-tooltip"><strong>{active.name}</strong><span>{active.city}</span><span>{active.category}</span></div>}</div><div className="city-list">{projects.map(p=><span key={p.city}>{p.city}</span>)}</div></section>; }

function Philosophy() { return <section className="philosophy"><div className="philo-image"><img loading="lazy" src={images.desert} width={1600} height={1104} alt="Desert Frame"/></div><h2 className="scatter"><span>WE</span><span>{chars("DESIGN")}</span><span>FOR PEOPLE.</span></h2><h2 className="scatter second"><span>WE</span><span>{chars("BUILD")}</span><span>FOR TIME.</span></h2></section>; }
function FullImage() { return <section className="full-image"><img loading="lazy" src={images.northline} width={1600} height={1104} alt="Northline pavilion"/><span>RED ANT / ARCHITECTURE / 2026</span></section>; }
function Process() { return <section className="process exhibition"><div><span className="technical">07 / PROCESS</span><h2>FROM IDEA<br/>TO <i>SPACE</i></h2></div><div className="process-diagram"><svg viewBox="0 0 1000 200"><path d="M40 100 H960"/></svg>{processStages.map((stage,i)=><div className="stage" key={stage}><i>{String(i+1).padStart(2,"0")}</i><b/><span>{stage}</span></div>)}</div></section>; }
function FinalCta() { return <section className="final-cta" id="contact"><p>LET'S BUILD SOMETHING</p><h2>{chars("EXTRAORDINARY.")}</h2><a className="project-link" data-cursor="EXPLORE" href="mailto:hello@redant.studio">START A PROJECT <span>→</span></a><div className="cta-brand">RED ANT <small>ARCHITECTURE / DESIGN / SPACE</small></div></section>; }
function Footer() { return <footer><h2>RED ANT</h2><div className="footer-grid"><nav>{["WORK","SERVICES","ABOUT","CONTACT"].map(x=><a key={x} href={x === "WORK" ? "#work" : x === "SERVICES" ? "#services" : x === "CONTACT" ? "#contact" : "#studio"}>{x}</a>)}</nav><div><a href="mailto:hello@redant.studio">hello@redant.studio</a><span>Instagram / LinkedIn / Behance</span></div><i className="morph-mark"/></div><small>© 2026 RED ANT — ALL PROJECTS SHOWN ARE CONCEPTUAL</small></footer>; }

export function RedAntExperience() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = matchMedia("(max-width: 767px)").matches;
    const lenis = reduced ? null : new Lenis({ duration: 1.25, smoothWheel: true, wheelMultiplier: .85 });
    let raf = 0;
    const tick = (time: number) => { lenis?.raf(time); raf = requestAnimationFrame(tick); };
    if (lenis) { raf = requestAnimationFrame(tick); lenis.on("scroll", ScrollTrigger.update); }
    const ctx = gsap.context(() => {
      gsap.to("[data-progress]", { innerText: 100, duration: 1.15, snap: { innerText: 1 }, ease: "power2.inOut" });
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro.to("[data-loader]", { yPercent: -100, duration: .9, delay: 1.25 }).from("[data-hero-media]", { clipPath: "inset(50% 0)", scale: 1.22, duration: 1.4 }, "-=.55").from(".hero h1 .char", { yPercent: 120, stagger: .035, duration: 1 }, "-=1").from(".hero-disciplines span,.technical,.scroll-cue", { opacity: 0, y: 18, stagger: .08 }, "-=.55").from("[data-hero-line]", { scaleX: 0, duration: 1 }, "-=.7");
      gsap.to("[data-nav]", { backgroundColor: "rgba(8,8,8,.84)", backdropFilter: "blur(14px)", scrollTrigger: { trigger: ".years", start: "top 90%", toggleActions: "play none none reverse" } });
      if (!reduced) {
        gsap.to(".hero-media img", { yPercent: 12, scale: 1.08, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
        gsap.to(".hero-copy", { yPercent: -18, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
        gsap.timeline({ scrollTrigger: { trigger: ".years", start: "top top", end: "+=160%", scrub: true, pin: !mobile } }).from(".years-number", { scale: 2.2, transformOrigin: "center" }).to(".drawing-grid", { rotation: 6, scale: 1.15 }, 0).from(".years-copy", { opacity: 0, y: 80 }, .45);
        gsap.from(".tile", { xPercent: (i) => (i - 3) * 18, opacity: .2, scale: 1.15, stagger: .04, scrollTrigger: { trigger: ".tile-project", start: "top 75%", end: "center 50%", scrub: true } });
        gsap.timeline({ scrollTrigger: { trigger: ".theatre-project", start: "top top", end: "+=130%", scrub: true, pin: !mobile } }).from(".theatre-image", { width: "32vw", height: "34vh", borderRadius: 40 }).from(".theatre-project .project-meta", { opacity: 0, y: 40 }, .55);
        if (!mobile) gsap.to(".horizontal-track", { xPercent: -50, ease: "none", scrollTrigger: { trigger: ".horizontal-wrap", start: "top top", end: "+=180%", pin: true, scrub: true } });
        gsap.to(".orbit", { rotation: -28, scrollTrigger: { trigger: ".circular-project", start: "top bottom", end: "bottom top", scrub: true } });
        gsap.to(".circle-image", { rotation: 2.5, scale: 1.06, scrollTrigger: { trigger: ".circular-project", start: "top bottom", end: "bottom top", scrub: true } });
        gsap.to(".zoom-front", { scale: 3, opacity: 0, scrollTrigger: { trigger: ".zoom-project", start: "top top", end: "+=130%", scrub: true, pin: !mobile } });
        gsap.timeline({ scrollTrigger: { trigger: ".split-project", start: "top 70%", end: "bottom 30%", scrub: true } }).from(".split-media", { yPercent: 18 }).from(".split-info", { yPercent: -18 }, 0);
        gsap.from(".service", { yPercent: 70, opacity: 0, stagger: .1, scrollTrigger: { trigger: ".services", start: "top 65%" } });
        document.querySelectorAll(".service").forEach(el => { const letters = el.querySelectorAll(".char"); el.addEventListener("mouseenter", () => gsap.fromTo(letters, { y: 0 }, { y: (i) => Math.sin(i * .8) * -14, duration: .35, stagger: .02, yoyo: true, repeat: 1 })); });
        gsap.from(".grid-section line,.grid-section rect", { strokeDashoffset: 1000, scrollTrigger: { trigger: ".grid-section", start: "top 70%", end: "center center", scrub: true } });
        gsap.from(".grid-image", { clipPath: "inset(50% 50%)", stagger: .15, scrollTrigger: { trigger: ".grid-section", start: "top 55%" } });
        gsap.from(".scatter .char", { x: (i) => (i % 2 ? 1 : -1) * (35 + i * 8), y: (i) => (i % 3 - 1) * 60, rotation: (i) => (i - 3) * 4, stagger: .025, scrollTrigger: { trigger: ".philosophy", start: "top 65%", end: "bottom 35%", scrub: true } });
        gsap.from(".full-image", { clipPath: "inset(45% 0)", scrollTrigger: { trigger: ".full-image", start: "top 80%", end: "center center", scrub: true } });
        gsap.from(".full-image img", { scale: 1.3, scrollTrigger: { trigger: ".full-image", start: "top 80%", end: "bottom top", scrub: true } });
        gsap.from(".process-diagram path", { strokeDashoffset: 1000, scrollTrigger: { trigger: ".process", start: "top 60%", end: "bottom 60%", scrub: true } });
        gsap.from(".stage", { opacity: 0, y: 40, stagger: .2, scrollTrigger: { trigger: ".process", start: "top 55%" } });
        gsap.from(".final-cta h2 .char", { yPercent: 140, x: (i) => (i - 6) * 4, stagger: .025, scrollTrigger: { trigger: ".final-cta", start: "top 75%", end: "center 50%", scrub: true } });
      }
    }, root);
    return () => { ctx.revert(); lenis?.destroy(); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={root} className="red-ant"><LoadingScreen/><Navigation/><Cursor/><main><Hero/><Years/><Work/><ObjectSection/><ShapeSection/><Services/><GridSection/><GlobalPresence/><Philosophy/><FullImage/><Process/><FinalCta/></main><Footer/></div>;
}