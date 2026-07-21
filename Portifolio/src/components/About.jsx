import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        statsRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <span className="section-label">Sobre</span>
            <h2 className="section-heading">
              Desenvolvedor voltado a <br />
              <em>código limpo</em> &amp; <em>experiência do usuário</em>
            </h2>
          </div>

          <div className="about__right" ref={textRef}>
            <p className="about__text">
              Sou desenvolvedor full-stack focado em construir aplicações web
              performáticas e acessíveis. Gosto de atuar em toda a stack &mdash; desde
              o design de interfaces intuitivas até a arquitetura de APIs robustas e
              bancos de dados.
            </p>
            <p className="about__text">
              Com experiência em frameworks modernos de JavaScript, bancos de dados
              relacionais e ferramentas de DevOps, trago uma abordagem holística para
              cada projeto. Acredito que softwares de qualidade são construídos na
              interseção entre rigor de engenharia e design pensado.
            </p>

            <div className="about__stats" ref={statsRef}>
              <div className="about__stat">
                <span className="about__stat-number">15+</span>
                <span className="about__stat-label">Projetos Concluídos</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">3+</span>
                <span className="about__stat-label">Anos de Experiência</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">10+</span>
                <span className="about__stat-label">Tecnologias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
