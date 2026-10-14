import content from "./content/site.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <a className="skip-link" href={`#${content.mainId}`}>
        {content.skipLink}
      </a>
      <Header content={content.header} />
      <Home content={content} />
      <Footer content={content.footer} />
    </>
  );
}
