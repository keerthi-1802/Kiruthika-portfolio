
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experiences";
import Hero from "./components/hero";
import TechStack from "./components/stack";
import SelectedWorks from "./components/work";
import TananAdminPanel from "./components/admin";
import GnxtCaseStudy from "./components/gnxt";
import SocialSidebar from "./components/sidebar";
import Navbar from "./components/navbar";

function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />

      <main>
        <Hero />
        <About />
        <SelectedWorks />
        <TechStack />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/work/tanan-admin-panel"
          element={<TananAdminPanel />}
        />
        <Route path="/work/gnxt" element={<GnxtCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}
