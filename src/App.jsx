import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import Skills from './components/skills.jsx'
import About from './components/about.jsx'
import Projects from './components/projects.jsx'
import Contact from './components/contact.jsx'
import './App.css'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  const pageRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const splitInstances = []
    const context = gsap.context(() => {
      const splitWords = (element) => {
        const split = SplitText.create(element, { type: 'words' })
        splitInstances.push(split)
        return split.words
      }

      const replayOnEntry = (trigger, start = 'top 82%') => ({
        trigger,
        start,
        end: 'bottom 15%',
        toggleActions: 'play none play reverse',
      })

      const heroTitle = splitWords(document.querySelector('.hero_div h2'))
      const heroRole = splitWords(document.querySelector('.hero_div p'))
      const heroTimeline = gsap.timeline()
      heroTimeline
        .from('nav', { y: -24, autoAlpha: 0, duration: 0.7, ease: 'power3.out' })
        .from(heroTitle, {
          yPercent: 85,
          autoAlpha: 0,
          duration: 0.75,
          stagger: 0.055,
          ease: 'power3.out',
        }, '-=0.3')
        .from(heroRole, {
          yPercent: 70,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.04,
          ease: 'power3.out',
        }, '-=0.35')
        .from('.mypic', {
          y: 28,
          scale: 0.94,
          autoAlpha: 0,
          duration: 0.9,
          ease: 'power3.out',
        }, '-=0.45')

      const skillsEyebrow = splitWords(document.querySelector('.skills-eyebrow'))
      const skillsTitle = splitWords(document.querySelector('#skills-title'))
      const skillsTimeline = gsap.timeline({
        scrollTrigger: replayOnEntry('.skills-section'),
      })
      skillsTimeline
        .from(skillsEyebrow, {
          yPercent: 70,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.035,
          ease: 'power3.out',
        })
        .from(skillsTitle, {
          yPercent: 80,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.045,
          ease: 'power3.out',
        }, '-=0.28')
        .from('.skill-card', {
          y: 28,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.065,
          ease: 'power2.out',
        }, '-=0.2')
        .from('.skills-progress span', {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.25')

      const aboutEyebrow = splitWords(document.querySelector('.about-eyebrow'))
      const aboutTitle = splitWords(document.querySelector('#about-title'))
      const aboutIntro = splitWords(document.querySelector('.about-intro'))
      const aboutDetail = splitWords(document.querySelector('.about-detail'))
      const aboutTimeline = gsap.timeline({
        scrollTrigger: replayOnEntry('.about-section', 'top 78%'),
      })
      aboutTimeline
        .from('.about-photo-wrap', {
          x: -36,
          autoAlpha: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
        .from(aboutEyebrow, {
          yPercent: 70,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.035,
          ease: 'power3.out',
        }, '-=0.55')
        .from(aboutTitle, {
          yPercent: 80,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.045,
          ease: 'power3.out',
        }, '-=0.25')
        .from(aboutIntro, {
          y: 14,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.012,
          ease: 'power2.out',
        }, '-=0.25')
        .from(aboutDetail, {
          y: 14,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.012,
          ease: 'power2.out',
        }, '-=0.25')
        .from('.about-link', {
          y: 14,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.2')

      const projectsEyebrow = splitWords(document.querySelector('.projects-eyebrow'))
      const projectsTitle = splitWords(document.querySelector('#projects-title'))
      const projectsIntro = splitWords(document.querySelector('.projects-intro'))
      const projectsTimeline = gsap.timeline({
        scrollTrigger: replayOnEntry('.projects-section', 'top 78%'),
      })
      projectsTimeline
        .from(projectsEyebrow, {
          yPercent: 70,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.035,
          ease: 'power3.out',
        })
        .from(projectsTitle, {
          yPercent: 80,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.045,
          ease: 'power3.out',
        }, '-=0.25')
        .from(projectsIntro, {
          y: 14,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.015,
          ease: 'power2.out',
        }, '-=0.2')
        .from('.project-card', {
          y: 30,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power3.out',
        }, '-=0.1')

      const contactEyebrow = splitWords(document.querySelector('.contact-eyebrow'))
      const contactTitle = splitWords(document.querySelector('#contact-title'))
      const contactIntro = splitWords(document.querySelector('.contact-intro'))
      const contactTimeline = gsap.timeline({
        scrollTrigger: replayOnEntry('.contact-section', 'top 82%'),
      })
      contactTimeline
        .from(contactEyebrow, {
          yPercent: 70,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.035,
          ease: 'power3.out',
        })
        .from(contactTitle, {
          yPercent: 80,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.045,
          ease: 'power3.out',
        }, '-=0.25')
        .from(contactIntro, {
          y: 14,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.015,
          ease: 'power2.out',
        }, '-=0.2')
        .from('.contact-link', {
          x: 22,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power3.out',
        }, '-=0.1')

    }, pageRef)

    const heroImage = pageRef.current?.querySelector('.mypic')
    const refreshAfterImageLoad = () => ScrollTrigger.refresh()
    heroImage?.addEventListener('load', refreshAfterImageLoad)
    if (heroImage?.complete) refreshAfterImageLoad()

    ScrollTrigger.refresh()

    return () => {
      heroImage?.removeEventListener('load', refreshAfterImageLoad)
      context.revert()
      splitInstances.forEach((split) => split.revert())
    }
  }, [])

  return (
    <div ref={pageRef}>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
