// pages/index.js
import { useState } from 'react';

import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import HomeSection from '../components/sections/Home/Home';
import SolutionsSection from '../components/sections/Solutions/Solutions';
import ServicesSection from '../components/sections/Services/Services';
import ProductsSection from '../components/sections/Products/Products';
import ContactSection from '../components/sections/Contact/Contact';

export default function Home() {
  
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <Head>
        <title>AGUAS AMBIENTALES SAS</title>
        <meta name="description" content="Aguas Ambientales SAS" />
      </Head>
      <Navbar onSectionChange={setActiveSection} />

      <main>
        {activeSection === 'home' && (
          <section id="home">
            <HomeSection />
          </section>
        )}
        {activeSection === 'products' && (
          <section id="products">
            <ProductsSection />
          </section>
        )}
        {activeSection === 'services' && (
          <section id="services">
            <ServicesSection />
          </section>
        )}
        {activeSection === 'solutions' && (
          <section id="solutions">
            <SolutionsSection />
          </section>
        )}
        {activeSection === 'contact' && (
          <section id="contact">
            <ContactSection />
          </section>
        )}
      </main>
    </>
  );
}
