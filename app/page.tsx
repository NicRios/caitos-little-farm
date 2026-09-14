import Image from 'next/image';

const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

const contactDetails = [
  {
    number: '01',
    label: 'Say hello',
    detail: 'hello@example.com',
  },
  {
    number: '02',
    label: 'Plan a visit',
    detail: 'By appointment only',
  },
  {
    number: '03',
    label: 'Find the farm',
    detail: 'Address coming soon',
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav-group nav-left" aria-label="Primary navigation">
          <a href="#story">Our story</a>
          <a href="#visit">The farm</a>
        </nav>

        <a
          className="wordmark"
          href="#top"
          aria-label="Caito’s Little Farm, home"
        >
          Caito’s Little Farm
        </a>

        <nav className="nav-group nav-right" aria-label="Secondary navigation">
          <a href="#visit">Visit</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src={assetPath('/placeholders/hero-caito-home-natural-foliage.jpg')}
          alt="Straight-on view of the red Caito home framed by naturally detailed trees in warm evening light"
          width={1600}
          height={980}
          priority
          unoptimized
        />
        <div className="hero-wash" aria-hidden="true">
          <Image
            className="hero-wave-divider"
            src={assetPath('/placeholders/hero-wave-divider.svg')}
            alt=""
            width={1600}
            height={440}
            unoptimized
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Welcome to our little Farm</p>
          <h1 id="hero-title">
            The Caito Home
          </h1>
        </div>
        <a
          className="scroll-cue"
          href="#main-content"
          aria-label="Continue to the farm story"
        >
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section
        className="story-section"
        id="main-content"
        aria-labelledby="story-title"
      >
        <div className="photo-stack" aria-label="Photos from the Caito home">
          <figure className="photo-card photo-card-back">
            <Image
              src={assetPath('/placeholders/home-vanity-detail.jpg')}
              alt="Double vanity with a lighted mirror and herringbone tile in the Caito home"
              width={720}
              height={1080}
              unoptimized
            />
          </figure>
          <figure className="photo-card photo-card-front">
            <Image
              src={assetPath('/placeholders/guest-room-portrait.jpg')}
              alt="A neatly made bedroom with an olive green accent wall in the Caito home"
              width={720}
              height={1080}
              unoptimized
            />
          </figure>
        </div>

        <div className="story-copy" id="story">
          <p className="eyebrow">Rooted in simple things</p>
          <h2 id="story-title">Small harvests. Big-hearted days.</h2>
          <p>
            Caito’s Little Farm is a place for muddy boots, open skies, and food
            grown close to home. We’re making room for slower mornings and the
            kind of moments that stay with you.
          </p>
          <p>
            This space will soon hold seasonal notes, visiting details, and
            stories from the field. For now, consider it an open gate—and a warm
            invitation to say hello.
          </p>
          <a className="text-link" href="#contact">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section
        className="field-break"
        id="visit"
        aria-label="Farm visit preview"
      >
        <Image
          src={assetPath('/placeholders/backyard-farm-panorama-chickens.jpg')}
          alt="Five chickens roaming the Caito backyard beside a flowering bush, gazebo, and garden house at sunset"
          width={1600}
          height={760}
          unoptimized
        />
        <div className="field-caption">
          <span>Seasonal visits</span>
          <strong>Come as you are.</strong>
        </div>
      </section>

      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-intro">
          <p className="eyebrow">Let’s keep in touch</p>
          <h2 id="contact-title">Come say hello.</h2>
          <p>
            Questions, visit ideas, or simply curious about what’s growing? We’d
            love to hear from you.
          </p>
          <a className="primary-button" href="mailto:hello@example.com">
            Email the farm
          </a>
          <small className="placeholder-note">
            Replace the sample email and address before sharing publicly.
          </small>
        </div>

        <figure className="contact-photo">
          <Image
            src={assetPath('/placeholders/contact-farm.svg')}
            alt="Placeholder for a welcoming photograph of the farm"
            width={720}
            height={960}
            unoptimized
          />
          <figcaption>There’s always something growing.</figcaption>
        </figure>

        <div className="contact-list" aria-label="Contact details">
          {contactDetails.map((item) => (
            <div className="contact-item" key={item.number}>
              <span className="contact-number">{item.number}</span>
              <div>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <a className="footer-mark" href="#top">
          Caito’s Little Farm
        </a>
        <p>Growing slowly. Welcoming warmly.</p>
        <p>© {new Date().getFullYear()} Caito’s Little Farm</p>
      </footer>
    </main>
  );
}
