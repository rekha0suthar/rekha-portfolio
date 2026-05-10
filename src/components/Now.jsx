import React from 'react';
import { currentlyBuilding } from '../data';
import '../styles/Now.css';

const Now = () => {
  if (!currentlyBuilding || currentlyBuilding.length === 0) return null;

  return (
    <div className="section-container" id="now">
      <h1 className="section-title">Currently Building</h1>
      <div className="title-underline"></div>
      <p className="now-intro">
        Live momentum — what's actively in progress right now.
      </p>

      <div className="now-grid">
        {currentlyBuilding.map((item, idx) => (
          <article
            className="now-card glass-card glass-card-hover fade-in-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
            key={idx}
          >
            <header className="now-card-header">
              <h3>{item.title}</h3>
              <span className={`now-status now-status--${slugify(item.status)}`}>
                {item.status}
              </span>
            </header>

            <p className="now-summary">{item.summary}</p>

            {item.tags?.length ? (
              <div className="now-tags">
                {item.tags.map((t) => (
                  <span key={t} className="now-tag">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}

            <footer className="now-card-footer">
              {item.target && (
                <span className="now-target">Targeting · {item.target}</span>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="now-link"
                >
                  Live Preview →
                </a>
              )}
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
};

function slugify(str = '') {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default Now;
