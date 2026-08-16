import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Portfólio Dev',
    description:
      'Site portfólio pessoal para desenvolvedores com apresentação de projetos, habilidades técnicas, animações suaves e design responsivo.',
    tech: ['React', 'Vite', 'GSAP', 'CSS', 'GitHub Actions'],
    live: 'https://portifolio-pi-seven-11.vercel.app/',
    github: 'https://github.com/modestossm/Portfolio',
  },
  {
    title: 'Family Travel Tracker',
    description:
      'Aplicação para rastrear os países que cada membro da família já visitou, com mapa-múndi visual destacando os destinos por perfil, criação e alternância de membros e gerenciamento completo das viagens registradas.',
    tech: ['Node.js', 'Express', 'EJS', 'PostgreSQL', 'Docker'],
    live: 'portfolio-ejs.modssm.com.br',
    github: 'https://github.com/modestossm/Projeto_EJS-Family-Travel-Tracker',
  },
  // {
  //   title: 'CMS para Blog de Dev',
  //   description:
  //     'Blog alimentado por CMS headless com suporte a markdown, destaque de sintaxe e otimização para SEO.',
  //   tech: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
  //   live: '#',
  //   github: '#',
  // },
  // {
  //   title: 'App de Chat em Tempo Real',
  //   description:
  //     'Aplicação de chat baseada em Websockets com salas, mensagens diretas e compartilhamento de arquivos.',
  //   tech: ['React', 'Express', 'Socket.io', 'PostgreSQL', 'Vitest'],
  //   live: '#',
  //   github: '#',
  // },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects section" id="projects" ref={sectionRef}>
      <div className="container">
        <span className="section-label">Projetos em Destaque</span>
        <h2 className="section-heading">
          O que eu <em>construí</em>
        </h2>

        <div className="projects__grid" ref={cardsRef}>
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__links">
                  <a href={project.github} className="project-card__link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                  <a href={project.live} className="project-card__link" aria-label="Live demo" target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>

              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="project-card__tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
