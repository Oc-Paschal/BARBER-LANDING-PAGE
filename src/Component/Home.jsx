import React from 'react'
import HeroSection from './HeroSection';
import bgImage from '../../public/images/Getting a haircut.jpg';

const Home = () => {
  return (
    <div id='Home' style={{backgroundImage:`url(${bgImage})`}}
    className='bg-center bg-cover h-screen filter brightness-90'>
        <HeroSection/>
    </div>
  )
}

export default Home