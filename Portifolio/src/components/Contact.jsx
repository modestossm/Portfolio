import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact__content > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact__content',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact__content">
          <span className="section-label">Fale Comigo</span>
          <h2 className="section-heading">
            Vamos trabalhar<br />
            <em>juntos</em>
          </h2>
          <p className="contact__text">
            Tem um projeto em mente ou só quer trocar uma ideia? Estou sempre aberto a
            discutir novas oportunidades e ideias.
          </p>
          <a href="mailto:sam@example.com" className="btn btn--primary contact__btn">
            modestossm@gmail.com 
          </a>

          <div className="contact__socials">
            <a href="https://github.com/modestossm" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              GitHub
            </a>
            <a href="https://linkedin.com/samuel-s-modesto" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__copy">&copy; 2026 Sam. Feito com React &amp; GSAP.</span>
          <a href="#" className="footer__top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Voltar ao topo &uarr;
          </a>
        </div>
      </footer>
    </section>
  );
}
