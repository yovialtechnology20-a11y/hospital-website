import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { About } from './components/About';
import { Departments } from './components/Departments';
import { Doctors } from './components/Doctors';
import { Appointment } from './components/Appointment';
import { HealthPackages } from './components/HealthPackages';
import { Testimonials } from './components/Testimonials';
import { Stats } from './components/Stats';
import { Facilities } from './components/Facilities';
import { Blog } from './components/Blog';
import { Insurance } from './components/Insurance';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Loading } from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <EmergencyBanner />
        <About />
        <Departments />
        <Doctors />
        <Appointment />
        <HealthPackages />
        <Testimonials />
        <Stats />
        <Facilities />
        <Blog />
        <Insurance />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
