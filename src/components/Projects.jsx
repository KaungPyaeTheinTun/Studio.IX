import { useRef, useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Projects.css';

const projects = [
  { index: '01', name: 'NOVA DESIGN', tags: ['Branding', 'Agency', 'Startup'], bg: 'linear-gradient(135deg,#c8b8a2,#9e8e7c)' },
  { index: '02', name: 'HORIZON PLATFORM', tags: ['UI/UX', 'Web Design'], bg: 'linear-gradient(135deg,#a8b4c0,#7a8a96)' },
  { index: '03', name: 'PULSE MOVEMENT', tags: ['Campaign', 'Social', 'Direction'], bg: 'linear-gradient(135deg,#b4c8a8,#8a9e80)' },
  { index: '04', name: 'VERDE COLLECTION', tags: ['Packaging', 'Artwork'], bg: 'linear-gradient(135deg,#c8c4a8,#9e9a80)' },
  { index: '05', name: 'FLOW SERIES', tags: ['Motion', 'Animation', 'Graphic'], bg: 'linear-gradient(135deg,#c4a8c8,#9a809e)' },
];

function ProjectRow({ project, onMouseMove, onMouseEnter, onMouseLeave }) {
  return (
    <article
      className="project-row"
      onMouseMove={onMouseMove}
      onMouseEnter={() => onMouseEnter(project)}
      onMouseLeave={onMouseLeave}
    >
      <span className="project-index">{project.index}</span>
      <h3 className="project-name">{project.name}</h3>
      <ul className="project-tags" role="list">
        {project.tags.map(t => <li key={t}>{t}</li>)}
      </ul>
      <span className="project-arrow" aria-hidden="true">→</span>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useReveal();
  const [thumb, setThumb] = useState({ x: 0, y: 0, project: null, visible: false });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setThumb(prev => ({ ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top }));
  };

  const handleEnter = (project) => {
    setThumb(prev => ({ ...prev, project, visible: true }));
  };

  const handleLeave = () => {
    setThumb(prev => ({ ...prev, visible: false }));
  };

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="projects-inner">
        <div className="section-header reveal">
          <span className="eyebrow-label">FEATURED PROJECT</span>
        </div>

        <div className="project-list" ref={containerRef}>
          {projects.map((p) => (
            <div key={p.index} className="reveal">
              <ProjectRow
                project={p}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              />
            </div>
          ))}

          {/* Floating thumbnail */}
          <div
            className={`project-thumb ${thumb.visible ? 'visible' : ''}`}
            aria-hidden="true"
            style={{
              left: thumb.x,
              top: thumb.y,
              background: thumb.project?.bg,
            }}
          />
        </div>
      </div>
    </section>
  );
}
