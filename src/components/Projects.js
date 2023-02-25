function Projects(){
    const projectList = [
        {
          name: 'Project 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: 'https://via.placeholder.com/300',
          link: 'https://example.com/project1',
          source:'github.com'
        },
        {
          name: 'Project 2',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          image: 'https://via.placeholder.com/300',
          link: 'https://example.com/project2',
          source:'github.com'
        },
        {
          name: 'Project 3',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          image: 'https://via.placeholder.com/300',
          link: 'https://example.com/project3',
          source:'github.com'
        }
      ];

      const projects = projectList.map(project =>(
        <div className="flex">
            <div className="project-content">
                <h2 className="project-title">{project.name}</h2>
                <p>{project.description}</p>
                <button className="source-btn"><a href={project.source} target="_blank" rel="noreferrer">Source Code</a></button>
            </div>
            <a className="project-image" href={project.link} target="_blank" rel="noreferrer"><img src={project.image} alt="project" /></a>
        </div>
      ))

      return(
        <section id="projects">
            <h1 className="section-title">Projects</h1>
            {projects}
        </section>
      )
}

export default Projects