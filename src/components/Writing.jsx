import React from 'react';
import { writings } from '../data';
import '../styles/Writing.css';

const formatDate = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const wordsToReadTime = (text = '') => {
  const words = String(text).trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 220));
  return `${mins} min read`;
};

const PostCard = ({ post, index }) => {
  const isDraft = post.status === 'draft' || !post.link;
  const Tag = isDraft ? 'article' : 'a';
  const linkProps = isDraft
    ? {}
    : { href: post.link, target: '_blank', rel: 'noreferrer' };

  return (
    <Tag
      {...linkProps}
      className={`writing-card fade-in-up ${isDraft ? 'is-draft' : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="writing-card-stripe" aria-hidden="true" />

      <div className="writing-card-body">
        <div className="writing-meta">
          {post.date && (
            <span className="writing-date">{formatDate(post.date)}</span>
          )}
          {post.summary && (
            <span className="writing-readtime">
              {wordsToReadTime(post.summary + ' ' + (post.title || ''))}
            </span>
          )}
          {isDraft && <span className="writing-badge">Draft</span>}
        </div>

        <h3 className="writing-title">{post.title}</h3>

        {post.summary && <p className="writing-summary">{post.summary}</p>}

        {post.tags?.length ? (
          <div className="writing-tags">
            {post.tags.map((t) => (
              <span key={t} className="writing-tag">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <span className="writing-read-more">
          {isDraft ? 'Publishing soon' : 'Read post →'}
        </span>
      </div>
    </Tag>
  );
};

const Writing = () => {
  const hasPosts = writings && writings.length > 0;

  return (
    <div className="section-container" id="writing">
      <h1 className="section-title">Writing</h1>
      <div className="title-underline"></div>
      <p className="writing-intro">
        Short build notes from things I&rsquo;m shipping — what worked, what
        didn&rsquo;t, and what I&rsquo;d do differently next time.
      </p>

      {hasPosts ? (
        <div className="writing-grid">
          {writings.map((post, idx) => (
            <PostCard key={idx} post={post} index={idx} />
          ))}
        </div>
      ) : (
        <div className="writing-empty fade-in-up">
          <div className="writing-empty-stripe" aria-hidden="true" />
          <div className="writing-empty-body">
            <span className="writing-empty-eyebrow">Coming soon</span>
            <h3>First posts dropping with the AI Resume Tailor launch</h3>
            <p>
              Each project I ship will come with a short write-up. On the way:
            </p>
            <ul className="writing-empty-topics">
              <li>Prompting Claude for structured, validated output</li>
              <li>RAG with pgvector — what tripped me up the first time</li>
              <li>Designing streaming UX in React (and when not to stream)</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Writing;
