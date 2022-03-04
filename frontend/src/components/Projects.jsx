

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
            <div className="p-wrapper">
                <h1 className="p-title">recent work</h1>
                <div className="p-list">
                    {projects.map((project, index) => {
                        return (
                            <div className="project" key={index}>
                                <h4>{project.name}</h4>
                                <p>{project.description}</p>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link" ><i className="fa fa-github"></i></a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects