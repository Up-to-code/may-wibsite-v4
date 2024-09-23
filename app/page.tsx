import dynamic from 'next/dynamic';
import Certifications from './components/Certifications/Certifications';

const Hero = dynamic(() => import('./components/Hearo/Hero'), { loading: () => <p>Loading...</p> });
const Skells = dynamic(() => import('./components/Skiles/Skells'), { loading: () => <p>Loading...</p> });
const Projckts = dynamic(() => import('./components/card/Projckts'), { loading: () => <p>Loading...</p> });
const About = dynamic(() => import('./components/About/About'), { loading: () => <p>Loading...</p> });

export default function Home() {
  return (
    <>
      <Hero />
      <Certifications/>
      <Skells />
      <Projckts />
      <About />
    </>
  );
}
