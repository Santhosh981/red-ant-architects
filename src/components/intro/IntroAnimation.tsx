import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { images, projects } from "@/data/red-ant";

/** Centralized intro configuration — tweak timing/feel here. */
export const INTRO_CONFIG = {
  imageDuration: 1.5,
  zoomDuration: 1.3,
  brandDuration: 0.8,
  brandHold: 0.6,
  curtainDuration: 1.0,
  tileStagger: 0.04,
  tiles: { desktop: 14, mobile: 7 },
  cards: { desktop: 9, mobile: 5 },
  depth: { desktop: 1, mobile: 0.55 },
  zoomZ: 1400,
  ease: "power3.inOut",
} as const;

export const INTRO_REVEAL_EVENT = "redant:intro-reveal";
export const INTRO_DONE_EVENT = "redant:intro-done";

type Card = { x: number; y: number; z: number; w: number; h: number; rx: number; ry: number; rz: number; shape: "rect" | "square" | "circle" | "round" };

const LAYOUT: Card[] = [
  { x: 0, y: 0, z: 120, w: 30, h: 20, rx: 0, ry: 0, rz: 0, shape: "rect" },
  { x: -30, y: -18, z: -120, w: 14, h: 14, rx: 8, ry: 18, rz: -4, shape: "square" },
  { x: 30, y: 18, z: -80, w: 13, h: 13, rx: -6, ry: -20, rz: 0, shape: "circle" },
  { x: 29, y: -20, z: 20, w: 18, h: 12, rx: 10, ry: -14, rz: 5, shape: "round" },
  { x: -29, y: 20, z: 40, w: 17, h: 12, rx: -10, ry: 16, rz: -6, shape: "rect" },
  { x: -42, y: 0, z: -260, w: 12, h: 17, rx: 0, ry: 28, rz: 2, shape: "round" },
  { x: 42, y: 1, z: -240, w: 11, h: 11, rx: 0, ry: -28, rz: 0, shape: "circle" },
  { x: 2, y: -30, z: -200, w: 15, h: 9, rx: 20, ry: 0, rz: -3, shape: "rect" },
  { x: -2, y: 31, z: -180, w: 10, h: 10, rx: -20, ry: 0, rz: 8, shape: "square" },
];

function ImageMontage({ count, depth }: { count: number; depth: number }) {
  const sources = [images.hero, ...projects.map((p) => p.image)];
  return (
    <div className="intro-stage" data-intro-stage>
      <div className="intro-camera" data-intro-camera>
        {LAYOUT.slice(0, count).map((c, i) => (
          <div
            key={i}
            className={`intro-card is-${c.shape}`}
            data-intro-card
            data-x={c.x}
            data-y={c.y}
            style={{
              width: `${c.w}vmax`,
              height: `${c.shape === "circle" || c.shape === "square" ? c.w : c.h}vmax`,
              transform: `translate(-50%,-50%) translate3d(${c.x}vmax, ${c.y}vmax, ${c.z * depth}px) rotateX(${c.rx * depth}deg) rotateY(${c.ry * depth}deg) rotateZ(${c.rz}deg)`,
            }}
          >
            <img src={sources[i % sources.length]} alt="" draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandReveal() {
  return (
    <div className="intro-brand" data-intro-brand>
      <h2><span>RED</span> ANT</h2>
      <p>ARCHITECTURE / DESIGN / SPACE</p>
      <i className="intro-sweep" data-intro-sweep />
    </div>
  );
}

function CurtainTile({ index, count }: { index: number; count: number }) {
  return <div className="curtain-tile" data-curtain-tile style={{ width: `${100 / count + 0.08}%`, left: `${(100 / count) * index}%` }} />;
}

function TileCurtain({ count }: { count: number }) {
  return <div className="intro-curtain">{Array.from({ length: count }, (_, i) => <CurtainTile key={i} index={i} count={count} />)}</div>;
}

export function IntroAnimation() {
  const root = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);
  const [mobile] = useState(() => typeof window !== "undefined" && matchMedia("(max-width: 767px)").matches);
  const cfg = INTRO_CONFIG;
  const tiles = mobile ? cfg.tiles.mobile : cfg.tiles.desktop;
  const cards = mobile ? cfg.cards.mobile : cfg.cards.desktop;
  const depth = mobile ? cfg.depth.mobile : cfg.depth.desktop;

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    document.documentElement.style.overflow = "hidden";
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveal = () => window.dispatchEvent(new Event(INTRO_REVEAL_EVENT));
    const finish = () => {
      document.documentElement.style.overflow = "";
      window.dispatchEvent(new Event(INTRO_DONE_EVENT));
      setDone(true);
    };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: finish });
      if (reduced) {
        tl.from("[data-intro-card]", { opacity: 0, duration: 0.4 })
          .to("[data-intro-stage]", { opacity: 0, duration: 0.3 }, "+=0.3")
          .from("[data-intro-brand]", { opacity: 0, duration: 0.3 })
          .add(reveal, "+=0.4")
          .to(el, { opacity: 0, duration: 0.3 });
        return;
      }
      const cardsEls = gsap.utils.toArray<HTMLElement>("[data-intro-card]");
      // 1. Montage enters
      tl.from(cardsEls, { opacity: 0, z: "-=600", y: "+=40", duration: 1.1, stagger: 0.06, ease: "power3.out" })
        .fromTo("[data-intro-camera]", { rotateX: 8 * depth, rotateY: -12 * depth }, { rotateX: 3 * depth, rotateY: 6 * depth, duration: cfg.imageDuration, ease: "sine.inOut" }, 0)
        // 2. Camera push through composition
        .to("[data-intro-camera]", { z: cfg.zoomZ * depth, rotateX: 0, rotateY: 0, duration: cfg.zoomDuration, ease: "power3.in" }, cfg.imageDuration)
        .to(cardsEls, {
          x: (i, t: HTMLElement) => Number(t.dataset["x"]) * 6,
          y: (i, t: HTMLElement) => Number(t.dataset["y"]) * 6,
          duration: cfg.zoomDuration, ease: "power2.in",
        }, cfg.imageDuration)
        .to("[data-intro-stage]", { opacity: 0, duration: 0.35 }, cfg.imageDuration + cfg.zoomDuration - 0.35)
        // 3. Brand reveal
        .fromTo("[data-intro-brand] h2", { opacity: 0, scale: 0.86, z: -200, letterSpacing: "0.3em" }, { opacity: 1, scale: 1, z: 0, letterSpacing: "-0.02em", duration: cfg.brandDuration, ease: "power3.out" }, "-=0.15")
        .from("[data-intro-brand] p", { opacity: 0, y: 12, duration: 0.5 }, "-=0.4")
        .fromTo("[data-intro-sweep]", { xPercent: -120 }, { xPercent: 120, duration: 0.9, ease: "power2.inOut" }, "-=0.6")
        // 4. Curtain
        .set(".intro-curtain", { autoAlpha: 1 }, `+=${cfg.brandHold}`)
        .set(["[data-intro-brand]", ".intro-bg"], { autoAlpha: 0 })
        .add(reveal)
        .to("[data-curtain-tile]", { rotateY: -92, opacity: 0.2, duration: cfg.curtainDuration, stagger: cfg.tileStagger, ease: cfg.ease });
    }, el);
    return () => { ctx.revert(); document.documentElement.style.overflow = ""; };
  }, [cfg, depth]);

  if (done) return null;
  return (
    <div ref={root} className="intro" aria-hidden="true">
      <div className="intro-bg" />
      <ImageMontage count={cards} depth={depth} />
      <BrandReveal />
      <TileCurtain count={tiles} />
    </div>
  );
}
