import React from 'react'
import './edu.css'
import edu from '../../assets/edu.png'
import degree from '../../assets/degree.png'

export default function Edu() {
    return (
        <section id="edu">
            <span className="eduTitle">My Qualifications</span>
            <span className="eduPara">As a final-year student at Mandsaur University, I am pursuing a Bachelor’s degree in Computer Science & Engineering. This academic background is equipping me with the technical expertise and creative skills necessary for a successful career in web development.</span>
            <div className="eduBars">
                <div className="eduBar">
                    <img src={degree} alt="degree" className="eduBarImg" />
                    <div className="eduBarText">
                        <h2>B.Tech CSE</h2>
                        <p>This is a sample text. put your score here.</p>
                    </div>
                </div>

                <div className="eduBar">
                    <img src={edu} alt="12th" className="eduBarImg" />
                    <div className="eduBarText">
                        <h2>12th</h2>
                        <p>This is a sample text. put your score here.</p>
                    </div>
                </div>


                <div className="eduBar">
                    <img src={edu} alt="10th" className="eduBarImg" />
                    <div className="eduBarText">
                        <h2>10th</h2>
                        <p>This is a sample text. put your score here.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
