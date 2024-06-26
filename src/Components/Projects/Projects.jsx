import React from 'react'
import './Projects.css'
import Services_Data from '../../assets/services_data'
import Arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='projects' className="projects">
        <div className="projects-title">
            <h1>My Projects</h1>
        </div>
        <div className="projects-container">
          {Services_Data.map((service,index)=>{
            return <div key={index} className="projects-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="projects-readmore">
                <p>Read More</p>
                <img src={Arrow_icon} alt="" />
              </div>
            </div>
          })}
        </div>
    </div>
  )
}

export default Projects