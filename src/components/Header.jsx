import Container from "./Container";

export default function Header({ content }) {
  return (
    <header className="site-header">
      <Container>
        <a className="wordmark" href={content.brand.href}>
          {content.brand.label}
        </a>
        <nav aria-label={content.navigationLabel}>
          {content.links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
