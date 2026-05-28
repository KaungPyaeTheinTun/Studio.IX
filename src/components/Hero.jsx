import { useEffect, useState } from "react";
import "./Hero.css";

const floatingCards = [
  {
    top: "18%",
    left: "58%",
    rotate: "2.5deg",
    bg: "linear-gradient(135deg,#d4cfc6 0%,#b8b4ac 100%)",
    delay: 600,
  },
  {
    top: "52%",
    left: "5%",
    rotate: "-2deg",
    bg: "linear-gradient(135deg,#c9c4bb 0%,#9e9a93 100%)",
    delay: 800,
  },
  {
    top: "30%",
    left: "78%",
    rotate: "1.5deg",
    bg: "linear-gradient(135deg,#e0ddd7 0%,#c4bfb7 100%)",
    delay: 700,
  },
];

const words = ["BUILD", "DESIGN", "BRAND"];
const tagline = "CREATIVE SOLUTIONS FOR THE MODERN BRAND · ";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="hero-words">
        {words.map((word, i) => (
          <div
            key={word}
            className={`hero-word-wrap ${visible ? "visible" : ""}`}
            style={{ transitionDelay: `${i * 110}ms` }}
          >
            <h1 className="hero-word" data-index={i}>
              {word}
            </h1>
          </div>
        ))}
      </div>

      {floatingCards.map((card, i) => (
        <div
          key={i}
          /* Added 'card-${i}' string to easily isolate targets in media queries */
          className={`float-card card-${i} ${visible ? "visible" : ""}`}
          role="img"
          aria-hidden="true"
          style={{
            top: card.top,
            left: card.left,
            transform: `rotate(${card.rotate}) translateY(${visible ? "0" : "30px"})`,
            background: card.bg,
            transitionDelay: `${card.delay}ms`,
            opacity: visible ? 1 : 0,
          }}
        />
      ))}

      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          {/* 6 iterations is fine, but make sure to use infinite keyframe loops */}
          {Array(6)
            .fill(tagline)
            .map((t, i) => (
              <span key={i} className="marquee-item">
                {t}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
