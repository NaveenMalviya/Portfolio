import React from 'react'
import './intro.css'
import bg from '../../assets/bg3.png'
import hire_me from '../../assets/hire_me.png'
import {Link} from 'react-scroll'

export default function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Naveen</span><br />Full Stack Developer</span>
            <p className="introPara">I am a skilled full stack developer with experience in creating <br /> visually appealing and user friendly websites.</p>
            <Link to="#"><button className="btn"><img src={hire_me} alt="" className="btnImg"/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="" className="bg" /> 
    </section>
  )
}



