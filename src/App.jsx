import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { css } from "./styles/global";

export default function App() {
  const [page, setPage] = useState("Home");
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const pages = {
    "Home": Home,
    "Services": Services,
    "How It Works": HowItWorks,
    "About": About,
    "Contact": Contact
  };

  const Page = pages[page];

  return (
    <>
      <style>{css}</style>
      <Nav page={page} setPage={setPage} />
      <Page setPage={setPage} />
      <Footer setPage={setPage} />
    </>
  );
}
