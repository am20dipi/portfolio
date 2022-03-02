import React from 'react'

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
                            <div className="i-title-item">Writer</div>
                        </div>
                    </div>
                    <div className="i-description">
                        Frontend Focused Software Engineer with Fullstack Experience
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img className="i-img" src="" alt="" />
                
            </div>
        </div>
    )
}

export default Introduction