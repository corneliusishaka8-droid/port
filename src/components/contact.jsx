import './contact.css'

const contactLinks = [
  {
    name: 'WhatsApp',
    detail: 'Message me directly',
    url: 'https://wa.me/08130562333',
    mark: 'WA',
  },
  {
    name: 'Instagram',
    detail: 'Follow my updates',
    url: 'https://instagram.com/corne_coco',
    mark: 'IG',
  },
  {
    name: 'LinkedIn',
    detail: 'Connect professionally',
    url: 'https://www.linkedin.com/in/cornelius-ishaka-936bb130a?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    mark: 'IN',
  },
  {
    name: 'GitHub',
    detail: 'Explore my code',
    url: 'https://github.com/corneliusishaka8-droid',
    mark: 'GH',
  },
]

export default function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="contact-eyebrow">Let’s connect</p>
        <h2 id="contact-title">Have an opportunity?<br /><span>Let’s talk.</span></h2>
        <p className="contact-intro">
          I’m looking for a software engineering internship and would be glad to hear from you.
          Reach me through any of these channels.
        </p>
      </div>

      <ul className="contact-list">
        {contactLinks.map((link) => (
          <li key={link.name}>
            <a
              className="contact-link"
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${link.name}: ${link.detail}`}
            >
              <span className="contact-mark" aria-hidden="true">{link.mark}</span>
              <span className="contact-link-copy">
                <strong>{link.name}</strong>
                <small>{link.detail}</small>
              </span>
              <span className="contact-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
