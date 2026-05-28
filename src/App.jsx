import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Reel from "./components/Reel";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";

// Sub-component to hold your complete single-page landing layout structure
const HomeView = () => (
  <main>
    <Hero />
    <About />
    <Projects />
    <Services />
    <Reel />
    <Testimonials />
    <Contact />
  </main>
);

export default function App() {
  return (
    <Router>
      <Cursor />
      <Nav />

      <Routes>
        <Route path="/" element={<HomeView />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
