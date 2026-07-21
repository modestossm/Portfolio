import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Next.js', 'Express', 'EJS', 'Rest API', 'Axios'],
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'Prisma ORM'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'Git/GitHub', 'GitHub Actions', 'Vite', 'Jest/Vitest'],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-group',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.skills__grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <span className="section-label">Especialidades</span>
        <h2 className="section-heading">
          Minha <em>stack</em>
        </h2>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-group__title">{group.category}</h3>
              <ul className="skill-group__list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-group__item">
                    <span className="skill-group__dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
