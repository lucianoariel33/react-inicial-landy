import Container from "../components/Container";
import ContentBlock from "../components/ContentBlock";
import StateDemo from "../components/StateDemo";

export default function Home({ content }) {
  return (
    <main id={content.mainId} tabIndex={-1}>
      <Container>
        <ContentBlock content={content.intro} hero />
        <ContentBlock content={content.structure} reverse />
        <ContentBlock content={content.components} />
        <ContentBlock content={content.thinking} />
        <ContentBlock content={content.state}>
          <StateDemo content={content.state.demo} />
        </ContentBlock>
        <ContentBlock content={content.practice} />
      </Container>
    </main>
  );
}
