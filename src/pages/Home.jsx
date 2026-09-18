import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Classes from '../components/Classes';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return <><Navbar /><main id="main-content" tabIndex={-1}><Hero /><About /><Experience /><Projects /><Education /><Classes /></main><Footer /></>;
}
