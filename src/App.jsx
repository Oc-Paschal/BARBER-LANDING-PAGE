import React from 'react'
import Home from './Component/Home';
import Services from './Component/Services';
import Feature from './Component/Feature';
import Gallery from './Component/Gallery';
import FAQ from './Component/FAQ';
import Pricing from './Component/Pricing';
import Testimonials from './Component/Testimonial';
import Footer from './Component/Footer';
import ContactUs from './Component/ContactUs';
import Navbar from './Component/Navbar';

const App = () => {
  return (
    <div className='bg-black overflow-x-hidden w-full'>
      <Navbar />
      <Home/>
      <Services/>
      <Feature/>
      <Gallery/>
      <FAQ/>
      <Pricing/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App