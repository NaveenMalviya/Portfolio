import React from 'react'
import './projects.css'
import photo from '../../assets/photo.png'
import event from '../../assets/event.jpg'

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="mainTitle">My Projects</h2>
      <span className="projectsDesc">
        <div className="projectsImg">
          <a href="https://eventslayer.000webhostapp.com"><img src={event} alt="1" className="img" /></a>
          <a href="https://eventslayer.000webhostapp.com"><img src={event} alt="1" className="img" /></a>
          <a href="https://eventslayer.000webhostapp.com"><img src={event} alt="1" className="img" /></a>
          <a href="https://eventslayer.000webhostapp.com"><img src={event} alt="1" className="img" /></a>
          <a href="https://eventslayer.000webhostapp.com"><img src={event} alt="1" className="img" /></a>
          <a href="https://eventslayer.000webhostapp.com"><img src={event} alt="1" className="img" /></a>
          <a href="https://eventslayer.000webhostapp.com"><img src={event} alt="1" className="img" /></a>
          <a href="https://eventslayer.000webhostapp.com"><img src={event} alt="1" className="img" /></a>
        </div>
      </span>
    </section>
  )
}
