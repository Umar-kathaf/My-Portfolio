import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=""/>
        <h1> <span>I'm Umar Kathab,</span> Software developer based in India</h1>
        <p>Driven software developer and completed engineering graduate from
           Nellai College of Engineering (Class of 2022)</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero