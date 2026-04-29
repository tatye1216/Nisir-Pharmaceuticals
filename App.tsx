import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Products } from './components/sections/Products';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { MarketClients } from './components/sections/MarketClients';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary-500/30 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <MarketClients />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
