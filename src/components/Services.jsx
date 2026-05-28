import { useReveal } from '../hooks/useReveal';
import './Services.css';

const services = [
  {
    category: 'WEBSITE',
    items: ['Web Design', 'Development', 'UI/UX', 'App', 'E-commerce'],
  },
  {
    category: 'BRANDING',
    items: ['Logo', 'Brandmark', 'Storytelling', 'Marketing', 'Advertising'],
  },
  {
    category: 'GRAPHIC',
    items: ['Product', 'Presentations', 'Packaging', 'Motion Graphics'],
  },
];

export default function Services() {
  const sectionRef = useReveal();

  return (
    <section className="services" id="service" ref={sectionRef}>
      <div className="services-ghost" aria-hidden="true">SERVICE</div>
      <div className="services-inner">
        <span className="services-eyebrow reveal">WHAT WE DO</span>
        <h2 className="services-title reveal">SERVICE<br />SPECTRUM</h2>

        <div className="services-grid">
          {services.map((svc) => (
            <div key={svc.category} className="service-col reveal">
              <h3 className="service-category">{svc.category}</h3>
              <ul className="service-list" role="list">
                {svc.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
