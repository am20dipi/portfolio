import React from 'react'
import cat from '../images/IMG_9796-1.jpg'

function Introduction(){
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    {/* <h3 style={{ fontSize: '30px'}}>Hello, my name is</h3> */}
                    <h2 className="i-name">ADRIANA DIPIETRO</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Technical Writer</div>
                            <div className="i-title-item">Freelancer</div>
                        </div>
                    </div>
                    <br/>
                    <div className="i-description">
                        
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg">
                   {/*  <img className="i-img" src={cat} alt="" /> */}
                </div>
                
            </div>
        </div>
    )
}

export default Introduction