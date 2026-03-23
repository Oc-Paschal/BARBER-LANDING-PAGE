import React from 'react'
import Home from './Component/Home';
import Services from './Component/Services';
import Feature from './Component/Feature';
import Gallery from './Component/Gallery';

const App = () => {
  return (
    <div className='bg-black'>
      <Home/>
      <Services/>
      <Feature/>
      <Gallery/>

    </div>
  )
}

export default App