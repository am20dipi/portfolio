import trees from '../images/pexels-luis.jpg'

function About(){
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg">
                    <img className="a-img" src={trees} alt="" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    
                </p>
                <p className="a-description">
                    My name is Adriana DiPietro.
                </p>
                
            </div>
        </div>
    )

}

export default About