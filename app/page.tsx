import About from "./components/About/About";
import Hero from "./components/Hearo/Hero";
import Skells from "./components/Skiles/Skells";
import Projckts from "./components/card/Projckts";

export default function Home() {
  return (
    <>
      <Hero />
      <Skells />
      <Projckts />
      <About />
    </>
  );
}
