import React from 'react'
import './skills.css'
import app from '../../assets/app.png'
import frontend from '../../assets/frontend.png'
import backend from '../../assets/backend.png'

export default function Skills() {
  return (
    <section id="skills">
    <span className="skillTitle">What I Have</span>
    <span className="skillPara">My studies have involved extensive training in HTML, CSS, JavaScript, and modern libraries like React.js. I have undertaken various projects that involve designing and developing responsive websites, ensuring a seamless user experience across different devices.</span>
    <div className="skillBars">
        <div className="skillBar">
            <img src={frontend} alt="degree" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Fronted Development</h2>
                <p>This is a sample text. put your score here.</p>
            </div>
        </div>

        <div className="skillBar">
            <img src={backend} alt="12th" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Backend Development</h2>
                <p>This is a sample text. put your score here.</p>
            </div>
        </div>


        <div className="skillBar">
            <img src={app} alt="10th" className="skillBarImg" />
            <div className="skillBarText">
                <h2>App Development with Flutterflow</h2>
                <p>This is a sample text. put your score here.</p>
            </div>
        </div>
    </div>
</section>
  )
}
