import React from 'react'
import './contact.css'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import mail from '../../assets/gmail.png'
import github from '../../assets/github.png'

export default function Contact() {
  return (
    <section id="contactPage">
      <h2 className="contactPageTitle">
            Contact Me
        </h2>
        <div id="connectSection">
        
        <p className="contactDesc"> </p>
        <div className="contactIcons">
            <img src={linkedin} alt="linkdiln" className="contactIcon" />
            <img src={mail} alt="mail" className="contactIcon" />
            <img src={instagram} alt="instagram" className="contactIcon" />
            <img src={github} alt="github" className="contactIcon" />
        </div>
        </div>
        
    </section>
  )
}

