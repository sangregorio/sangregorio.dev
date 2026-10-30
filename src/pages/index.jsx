import Head from 'next/head';
import { model } from '../data/model.en';

const description = 'Landing page for the Sangregorio brothers: Paolo and Fabio Sangregorio, software engineers based in Milan.';

function Arrow() {
  return (
    <svg className="arrow" width="18" height="14" viewBox="0 0 30 23" aria-hidden="true">
      <path d="M18.5368 0.0108948L17.0211 1.56177L25.8632 10.4239H0V12.5761H25.8632L17.0211 21.4382L18.5368 22.9891L30 11.5L18.5368 0.0108948Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Sangregorio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#0c0f0e" />
        <meta property="og:title" content="Sangregorio" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://sangregorio.dev/" />
        <link rel="canonical" href="https://sangregorio.dev/" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <div className="page">
        <header className="intro">
          <p className="eyebrow mono">{model.eyebrow}</p>
          <h1 className="header">{model.header}</h1>
          <p className="lede">{model.lede}</p>
        </header>

        <div className="cards">
          {model.people.map(person => (
            <a key={person.name} className="card" href={person.url}>
              <div className="photo">
                <img src={person.image} alt={person.name} width="500" height="500" />
              </div>
              <div className="card-info">
                <h2 className="person-name">{person.name}</h2>
                <p className="person-role">
                  {person.role} <span className="at">at</span> <span className="company">{person.company}</span>
                </p>
                <p className="person-location">{person.location}</p>
                <span className="link mono">
                  {person.urlText}
                  <Arrow />
                </span>
              </div>
            </a>
          ))}
        </div>

        <footer className="footer mono">{model.footer}</footer>
      </div>
    </>
  );
}
