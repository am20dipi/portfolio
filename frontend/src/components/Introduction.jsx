import React from 'react'
import blacknwhiteselfie1 from '../images/blacknwhiteselfie1.jpg'



const skillset = [
    {
        name: 'JavaScript'
    },
    {
        name: 'React'
    },
    {
        name: 'HTML | CSS'
    },
    {
        name: 'Bootstrap'
    },
    {
        name: 'Ruby'
    },
    {
        name: 'Ruby on Rails'
    },
]

function Introduction(){
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    {/* <h3 style={{ fontSize: '30px'}}>Hello, my name is</h3> */}
                    <h2 className="i-name">.ADRIANA. DIPIETRO.</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Technical Writer</div>
                            <div className="i-title-item">Freelancer</div>
                        </div>
                    </div>
                    <br/>
                    <ul className="i-skillset" style={{paddingTop:'60px'}} >
                        {skillset.map((skill, index) => {
                            return (
                                <li key={index}>{skill.name}</li>
                            )
                        })}
                    </ul>
                    <br/>
                    <div className="c-info" >
                        {/* linkedin */}
                        <div className="c-info-item" id="introduction">
                            <a href="https://www.linkedin.com/in/adriana-dipietro/" className="c-icon" id="introduction" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                            {/*  /adriana-dipietro */}
                        </div>
                        {/*  email */}
                        <div className="c-info-item" id="introduction">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adrianadipietro4@gmail.com&su=Hi+Adriana" className="c-icon" id="introduction" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-envelope"></i></a>
                            {/* adrianadipietro4@gmail.com */}
                        </div>
                        {/* github */}
                        <div className="c-info-item" id="introduction">
                            <a href="https://github.com/am20dipi" target="_blank" className="c-icon" id="introduction" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-right-wrapper">
                   <img className="i-img" src={blacknwhiteselfie1} alt="" /> 
                </div>
                
            </div>
        </div>
    )
}

export default Introduction