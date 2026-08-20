import Header from "./components/Header";
import Hero from "./components/Hero";
import SubjectHub from "./components/SubjectHub";
import ResourceLibrary from "./components/ResourceLibrary";
import Events from "./components/Events";
import Mentors from "./components/Mentors";
import About from "./components/About";
import Join from "./components/Join";
import Impact from "./components/Impact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="skip">
        <a href="#main">Skip to content</a>
      </div>

      <Header />

      <main id="main">
        <Hero />
        <SubjectHub />
        <ResourceLibrary />
        <Events />
        <Mentors />
        <About />
        <Join />
        <Impact />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
