export default function ConceptCard({ content }) {
  return (
    <article className="concept-card">
      <h3>{content.title}</h3>
      <p>{content.text}</p>
    </article>
  );
}
