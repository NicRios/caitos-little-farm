import Image from 'next/image';

const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

const contactDetails = [
  {
    number: '01',
    label: 'Say hello',
    detail: 'MC3caito@gmail.com',
  },
  {
    number: '02',
    label: 'Plan a visit',
    detail: 'By appointment only',
  },
  {
    number: '03',
    label: 'Find the farm',
    detail: 'West Valley City, Utah',
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="Caito’s Corner, home"
        >
          <Image
            className="wordmark-mark"
            src={assetPath('/logo/tree-of-life-logo-nav.svg')}
            alt=""
            aria-hidden="true"
            width={860}
            height={808}
            unoptimized
          />
          <span className="wordmark-label">
            <span className="wordmark-caito">
              Caito<span className="wordmark-possessive">’s</span>
            </span>
            <span className="wordmark-corner">Corner</span>
          </span>
        </a>

        <nav className="nav-group nav-right" aria-label="Primary navigation">
          <a href="#story">About</a>
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
            className="hero-mountain-divider"
            src={assetPath('/placeholders/hero-reference-mountain-divider.svg')}
            alt=""
            width={1118}
            height={301}
            unoptimized
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Welcome to our little Farm</p>
          <h1 id="hero-title">
            The Caito Home
          </h1>
        </div>
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
          <p className="eyebrow">Rooted in Simple Living</p>
          <h2 id="story-title">More Than Just a Place to Stay</h2>
          <p>
            We think of our home as a tiny farm—a place where everyday life
            has a little more room to breathe. The property is surrounded by
            fruit trees, open yard space, and a few free-roaming chickens,
            creating a relaxed setting that feels a world away from a typical
            rental. Each unit offers its own private space, while the
            property itself is designed around a shared appreciation for
            healthy, active, and sustainable living. From growing and
            harvesting what we can to spending time outdoors, we’ve created a
            home where simple, thoughtful living is part of the experience.
          </p>
        </div>
      </section>

      <section
        className="field-break"
        id="visit"
        aria-label="Farm visit preview"
      >
        <Image
          src={assetPath('/placeholders/backyard-farm-panorama-balanced-chickens.png')}
          alt="Six chickens roaming the Caito backyard beside a flowering bush, gazebo, and garden house at sunset"
          width={1600}
          height={760}
          unoptimized
        />
        <div className="field-caption">
          <span>Short term rentals</span>
          <strong>Come as you are.</strong>
        </div>
      </section>

      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-intro">
          <p className="eyebrow">Get in Touch</p>
          <h2 id="contact-title">Come say hello.</h2>
          <p>
            If you’re looking for a comfortable, welcoming place to stay
            while you’re in transition, we’d love to hear from you. Reach
            out to learn more about the property and available housing
            options.
          </p>
          <a className="primary-button" href="mailto:MC3caito@gmail.com">
            Email the farm
          </a>
        </div>

        <figure className="contact-photo">
          <Image
            src={assetPath('/placeholders/contact-hosts-field.jpg')}
            alt="The two of us smiling together in a golden wheat field at sunset"
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
          <Image
            className="wordmark-mark"
            src={assetPath('/logo/tree-of-life-logo-nav.svg')}
            alt=""
            aria-hidden="true"
            width={860}
            height={808}
            unoptimized
          />
          Caito’s Corner
        </a>
        <p>Growing slowly. Welcoming warmly.</p>
        <p>© {new Date().getFullYear()} Caito’s Corner</p>
      </footer>
    </main>
  );
}
