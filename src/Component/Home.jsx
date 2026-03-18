import React from 'react'
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import bgImage from '../assets/Images/Getting a haircut.jpg';

const Home = () => {
  return (
    <div style={{backgroundImage:`url(${bgImage})`}}
    className='bg-center bg-cover h-screen'>
        <Navbar/>
        <HeroSection/>
    </div>
  )
}

export default Home