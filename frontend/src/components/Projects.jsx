

const projects = [
    {
        name: 'SILVERMARK',
        //image: silvermark,
        description: 'SILVERMARK is a minimalist bookmark manager application that allows users to create, view, and delete bookmarks. SILVERMARK utilizes a Ruby on Rails backend and a JavaScript frontend. SILVERMARK utilizes a React framework and Redux middleware.',
        github: 'https://github.com/am20dipi/silvermark'
    },
    {
        name: 'UPFRONT',
        //image: upfront,
        description: 'UPFRONT is a single page application that allows users to create, view, edit and delete items (or tasks) in a to-do list format. UPFRONT utilizes a Ruby on Rails backend and a JavaScript frontend.',
        github: 'https://github.com/am20dipi/upfront-task-2'
    },
    {
        name: 'dillonperino.com',
        //image: null,
        description: "dillonperino.com is an art-portfolio website built using ReactJS, HTML, CSS and Bootstrap. Dillonperino.com is a living and changing collection of art that reflects the artist's accomplishments, skills and experiences.",
        github: 'https://github.com/am20dipi/dillonperino'
    },
    {
        name: 'ADR-UI',
        //image: tooltip2,
        description: 'ADR-UI is a UI library that exemplifies simple, reusable code to be utilized in future applications. ADR-UI utilizes JavaScript, HTML, CSS, Webpack and Node Package Manager.',
        github: 'https://github.com/am20dipi/adr-ui'
    }
]

function Projects() {
    return (
        <div className="p">
            <h4>Frontend Focused Software Engineer with Fullstack Experience</h4>
            <br/>
            <div className="card-columns">
                {projects.map((project, index) => {
                    return (
                    <div className="card" id="project" key={index} onClick={() => window.open(project.github)}>
                        <img className="card-img-top" src={project.image} alt={project.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p className="card-text text-muted">{project.description}</p>
                        </div>
                        <div className="card-footer">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link" ><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Projects