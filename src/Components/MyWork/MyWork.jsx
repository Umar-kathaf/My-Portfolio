import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import Arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='Mywork'>
        <div className="Mywork-title">
            <h1>My latest Work</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={Arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork