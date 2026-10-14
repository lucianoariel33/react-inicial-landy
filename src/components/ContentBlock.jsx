import ConceptCard from "./ConceptCard";

export default function ContentBlock({ content, hero = false, reverse = false, children }) {
  const Heading = hero ? "h1" : "h2";

  return (
    <section
      id={content.id}
      className={`content-block${hero ? " hero" : ""}`}
      aria-labelledby={`${content.id}-title`}
    >
      <div className={`section-layout${content.image ? " with-image" : ""}${reverse ? " reverse" : ""}`}>
        <div className="section-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <Heading id={`${content.id}-title`}>{content.title}</Heading>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {content.actions && (
            <div className="actions">
              {content.actions.map((action) => (
                <a className="action-link" key={action.href} href={action.href}>
                  {action.label}
                </a>
              ))}
            </div>
          )}
        </div>
        {content.image && (
          <img
            className="section-image"
            src={content.image.src}
            alt={content.image.alt}
            width="480"
            height="380"
            loading={hero ? "eager" : "lazy"}
          />
        )}
      </div>
      {content.code && (
        <figure className="code-example">
          <figcaption>{content.code.caption}</figcaption>
          <pre tabIndex={0} aria-label={content.code.caption}>
            <code>{content.code.lines.join("\n")}</code>
          </pre>
        </figure>
      )}
      {content.cards && (
        <div className="concept-grid">
          {content.cards.map((card) => (
            <ConceptCard key={card.id} content={card} />
          ))}
        </div>
      )}
      {content.steps && (
        <ol className="practice-list">
          {content.steps.map((step) => <li key={step.id}>{step.text}</li>)}
        </ol>
      )}
      {children}
      {content.note && <p className="section-note">{content.note}</p>}
      {content.resource && (
        <p className="resource-link">
          <a
            href={content.resource.href}
            target={content.resource.target}
            rel={content.resource.target === "_blank" ? "noopener noreferrer" : undefined}
          >
            {content.resource.label}
          </a>
        </p>
      )}
    </section>
  );
}
