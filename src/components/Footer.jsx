import Container from "./Container";

export default function Footer({ content }) {
  return (
    <footer className="site-footer">
      <Container>
        <p>{content.text}</p>
        <a href={content.link.href}>{content.link.label}</a>
      </Container>
    </footer>
  );
}
