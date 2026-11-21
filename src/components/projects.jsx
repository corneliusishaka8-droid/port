import './projects.css'

const projects = [
  {
    number: '01',
    type: 'Full-stack concept',
    title: 'Real Estate Platform',
    description:
      'A property discovery experience for browsing homes, viewing listing details, and sending enquiries.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    demoUrl: 'https://estate-management-red.vercel.app/',
    alt: 'Modern home with a landscaped front yard',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    number: '02',
    type: 'Web app concept',
    title: 'Barber Salon',
    description:
      'A polished salon site concept for presenting services, introducing the team, and helping clients book.',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85',
    demoUrl: 'https://barbars-ten.vercel.app/',
    alt: 'Barber working in a modern barbershop',
    technologies: ['React', 'JavaScript', 'CSS'],
  },
  {
    number: '03',
    type: 'Movie discovery concept',
    title: 'Movie Site',
    description:
      'A cinematic browsing concept for discovering films, exploring details, and saving favorites.',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=85',
    demoUrl: 'https://streamline-five-pied.vercel.app/',
    alt: 'Rows of seats inside a movie theater',
    technologies: ['React', 'JavaScript', 'REST API'],
  },
  {
    number: '04',
    type: 'Website concept',
    title: 'Creative Studio Website',
    description:
      'A flexible business website concept with a clear introduction, service highlights, and contact details.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
    alt: 'Bright creative studio workspace with desks and chairs',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive design'],
  },
]

export default function Projects() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-heading">
        <p className="projects-eyebrow">Selected work</p>
        <h2 id="projects-title">Projects<span>.</span></h2>
        <p className="projects-intro">
          A selection of web experiences spanning full-stack applications, useful services, and
          creative websites.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image-wrap">
              <img src={project.image} alt={project.alt} loading="lazy" />
              <span className="project-number">{project.number}</span>
            </div>
            <div className="project-copy">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              {project.demoUrl && (
                <a
                  className="project-demo-link"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} live project`}
                >
                  View live project <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
