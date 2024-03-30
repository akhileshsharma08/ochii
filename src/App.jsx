import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Client from "./components/Client";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Eyes from "./components/Eyes";
import Extra from "./components/Extra";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-100">
      <Navbar />
      <Home />
      <Marquee />
      <About />
      <Eyes />
      <Projects />
      {/* <Client/> */}
      <Cards />
      <Extra />
      <Footer />
    </div>
  );
}

export default App;
