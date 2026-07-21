import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headingRef.current.children,
        { y: 80, opacity: 0, rotateX: -15 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15 }
      )
        .fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 },
          '-=0.4'
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          '-=0.2'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__bg">
        <div className="hero__grid" />
      </div>

      <div className="hero__content container">
        <div className="hero__heading" ref={headingRef}>
          <span className="hero__line hero__line--muted">Full-Stack</span>
          <span className="hero__line">
            Developer<span className="hero__dot">.</span>
          </span>
        </div>

        <p className="hero__sub" ref={subRef}>
          Dev fullstack em desenvolvimento de web apps com JavaScript moderno,
          arquitetura limpa e design incrível.
        </p>

        <div className="hero__cta" ref={ctaRef}>
          <a href="#projects" className="btn btn--primary">Ver Projetos</a>
          <a href="#contact" className="btn btn--outline">Entre em contato</a>
        </div>
      </div>

      <div className="hero__scroll" ref={scrollRef}>
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
