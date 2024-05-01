import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Eager to leverage my adaptable nature and rapid learning skills to
                       make an impactful contribution in a Software Developer role.
                       With a passion for tackling complex problems and a knack for quickly
                       mastering new programming languages and databases,
                       I am dedicated to fostering both personal and company growth
                    </p>
                    <p>My passion for software development is not only reflected in my extensive experirnce but 
                        also in the enthuiasm and dedication in bring to each project
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>ReactJS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About