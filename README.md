# Ishaka Cornelius — Developer Portfolio

A personal portfolio for Ishaka Cornelius Soghenekparobor, an aspiring software engineer seeking an internship. The site introduces me, presents my skills, and showcases four project concepts.

## Portfolio sections

- **Home:** introduction and portrait.
- **About:** background, interests, and internship goals.
- **Skills:** a horizontally scrollable skills carousel.
- **Projects:** real estate, barber salon, movie discovery, and creative studio projects.
- **Contact:** WhatsApp, Instagram, LinkedIn, and GitHub links.

## Built with

- React and Vite
- JavaScript, HTML, and CSS
- GSAP, SplitText, and ScrollTrigger

The hero introduction animates as soon as the page loads. The Skills, About, Projects, and Contact sections animate as they enter the viewport, and replay when they re-enter.

## Run locally

```sh
npm install
npm run dev
```

To create a production build:

```sh
npm run build
```

## Update project and contact details

Edit the `projects` array in `src/components/projects.jsx` to change project names, descriptions, images, technologies, and live project URLs. The real estate, barber salon, and movie site cards link to their deployed projects. The project photos are remote Unsplash images; replace them with screenshots of your own work when ready.

Replace the sample destinations in `contactLinks` in `src/components/contact.jsx` with your WhatsApp number and social profile URLs.
