import { useRef, useState } from 'react'
import './skills.css'

const skills = [
  { name: 'HTML', icon: 'html5/html5-original.svg' },
  { name: 'React', icon: 'react/react-original.svg' },
  { name: 'GSAP', image: 'https://cdn.simpleicons.org/gsap/0AE448' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
  { name: 'CSS', icon: 'css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
  { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'express/express-original.svg' },
  { name: 'Git', icon: 'git/git-original.svg' },
  { name: 'Postman', icon: 'postman/postman-original.svg' },
  { name: 'REST API', image: 'https://cdn.simpleicons.org/swagger/85EA2D' },
  { name: 'SQL', icon: 'sqlite/sqlite-original.svg' },
  { name: 'Responsiveness', image: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
]

const iconUrl = (icon) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`

export default function Skills() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollCarousel = (direction) => {
    const track = trackRef.current
    if (!track) return

    const card = track.querySelector('.skill-card')
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
    const distance = card ? card.getBoundingClientRect().width + gap : track.clientWidth
    track.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  const updateActiveIndex = () => {
    const track = trackRef.current
    const card = track?.querySelector('.skill-card')
    if (!track || !card) return

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
    const step = card.getBoundingClientRect().width + gap
    setActiveIndex(Math.min(skills.length - 1, Math.round(track.scrollLeft / step)))
  }

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="skills-heading">
        <div>
          <p className="skills-eyebrow">What I work with</p>
          <h2 id="skills-title">My skills<span>.</span></h2>
        </div>
        <div className="skills-controls" aria-label="Carousel controls">
          <button type="button" onClick={() => scrollCarousel(-1)} aria-label="Scroll skills left">
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" onClick={() => scrollCarousel(1)} aria-label="Scroll skills right">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        className="skills-track"
        ref={trackRef}
        onScroll={updateActiveIndex}
        tabIndex="0"
        aria-label="Scrollable list of skills"
      >
        {skills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <img src={skill.image || iconUrl(skill.icon)} alt={`${skill.name} icon`} loading="lazy" />
            <h3>{skill.name}</h3>
          </article>
        ))}
      </div>

      <div className="skills-progress" aria-label={`Skill ${activeIndex + 1} of ${skills.length}`}>
        <span style={{ width: `${((activeIndex + 1) / skills.length) * 100}%` }} />
      </div>
    </section>
  )
}
