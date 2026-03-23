import React from 'react'
import Home from './Component/Home';
import Services from './Component/Services';
import Feature from './Component/Feature';
import Gallery from './Component/Gallery';
import FAQ from './Component/FAQ';
import Pricing from './Component/Pricing';
const App = () => {
  return (
    <div className='bg-black'>
      <Home/>
      <Services/>
      <Feature/>
      <Gallery/>
      <FAQ/>
      <Pricing/>

    </div>
  )
}

export default App