import Navbar  from '@/components/Navbar';
import Hero    from '@/components/Hero';
import About   from '@/components/About';
import Works   from '@/components/Works';
import Services from '@/components/Services';
import Skills  from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer  from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
