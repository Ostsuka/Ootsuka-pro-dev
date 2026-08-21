import Navbar      from '@/components/Navbar';
import Hero        from '@/components/Hero';
import About       from '@/components/About';
import Projects    from '@/components/Projects';
import Services    from '@/components/Services';
import Skills      from '@/components/Skills';
import Experience  from '@/components/Experience';
import Process     from '@/components/Process';
import Contact     from '@/components/Contact';
import Footer      from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
