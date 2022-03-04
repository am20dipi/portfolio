


function Contact(){
    return (
        <div className="c">
            <div className="c-bg">
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Contact me</h1>
                        <div className="c-info">
                            {/* linkedin */}
                            <div className="c-info-item">
                                <a href="https://www.linkedin.com/in/adriana-dipietro/" className="c-icon" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                            </div>
                           {/*  email */}
                            <div className="c-info-item">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adrianadipietro4@gmail.com&su=Hi+Adriana" className="c-icon" target="_blank" rel="noopener noreferrer"><i className="fa fa-google"></i></a>
                            </div>
                            {/* github */}
                            <div className="c-info-item">
                            <a href="https://github.com/am20dipi" target="_blank" className="c-icon" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <div className="c-description">
                            <b>Questions?</b> Get in touch. 
                        </div>
                        <form>
                            <input type="text" placeholder="name" name="name" />
                            <input type="email" placeholder="email" name="email"/>
                            <textarea rows="5" placeholder="type your message here" name="message"></textarea>
                            <button>submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact