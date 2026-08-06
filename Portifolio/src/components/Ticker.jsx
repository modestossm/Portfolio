import './Ticker.css';

const items = [
  'Node.js', 'EJS', 'Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'REST API', 'Docker',
  'PostgreSQL', 'Prisma ORM', 'Express', 'Git/GitHub', 'GitHub Actions', 'Vite', 'Vitest'
];

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker__track">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="ticker__item">
            {item}
            <span className="ticker__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
