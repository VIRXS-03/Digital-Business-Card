import React from 'react'
import ReactDOM from 'react-dom/client'
import profilePic from './assets/photo.png'
import emailIcon from './assets/email-Icon.png'
import linkedinIcon from './assets/linkedin-Icon.png'
export default function Info(){
    return(
        <div>
            <img className="profile-pic" src={profilePic}/>
            <div className="Intro">
                <h3 className="name">Laura Smith</h3>
                <h5>Frontend Developer</h5>
                <h6>laurasmith.website</h6>
            </div>
            <div className='btns'>
                <a className="email-btn" href=''><img src={emailIcon}/>Email</a>
                <a className="linkedIn-btn" href=''><img src={linkedinIcon}/>LinkedIn</a>
            </div> 
        </div>
    )
}