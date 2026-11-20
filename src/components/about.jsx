import mypic from '../assets/MYPIC,.jpeg'
import './about.css'

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-photo-wrap">
        <img
          className="about-photo"
          src={mypic}
          alt="Ishaka Cornelius Soghenekparobor"
          loading="lazy"
        />
        <span className="about-photo-caption">Ishaka Cornelius</span>
      </div>

      <div className="about-copy">
        <p className="about-eyebrow">A little about me</p>
        <h2 id="about-title">Curious by nature.<br /><span>Developer by choice.</span></h2>
        <p className="about-intro">
          I’m Ishaka Cornelius Soghenekparobor, an aspiring software engineer looking for an
          internship where I can learn from a team, contribute to real projects, and grow as a
          developer.
        </p>
        <p className="about-detail">
          I enjoy creating clear, responsive web experiences with HTML, CSS, JavaScript, and React.
          I’m also building my skills with Node.js, Express, PostgreSQL, and GSAP, and I’m ready to
          bring curiosity, care, and a strong willingness to learn to my next team.
        </p>
        <a className="about-link" href="#skills">
          Explore my skills <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
