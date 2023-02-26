function Projects(){
    const projectList = [
        {
          name: 'Meme Generator',
          description: 'A meme generator web app made using React. The memes were fetched from a meme api and the page was styled using CSS. The app generates a random meme from the API, and has two inputs where the top and bottom text on the meme can be added.',
          image: '/images/meme-generator.png',
          link: 'https://delightful-longma-b4a428.netlify.app/',
          source:'https://github.com/Zein19/meme-generator'
        },
        {
          name: 'Travel Journal',
          description: 'A travel journal made using react. The destinations are contained in a seperate data file and mapped onto the app, so they can be updated and the page would update accordingly, instead of having to hardcode the details.',
          image: '/images/travel-journal.png',
          link: 'https://euphonious-kleicha-bff46a.netlify.app/',
          source:'https://github.com/Zein19/travel-journal'
        },
        {
          name: 'Tenzies',
          description: 'A tenzies game web app. The game is essentially won when you manage to roll 10 of the same number as soon as possible. I used React and CSS to style, and made use of the useEffect and useState hooks to enable the game to function.',
          image: '/images/tenzies.png',
          link: 'https://effulgent-sundae-b34e82.netlify.app/',
          source:'https://github.com/Zein19/Tenzies'
        }
      ];

      const projects = projectList.map(project =>(
        <div className="flex">
            <div className="project-content">
                <h2 className="project-title">{project.name}</h2>
                <p>{project.description}</p> <br /><br />
                <a className="source-btn" href={project.source} target="_blank" rel="noreferrer">Source Code</a>
            </div>
            <a className="project-image" href={project.link} target="_blank" rel="noreferrer"><img className="project-image" src={project.image} alt="project" /></a>
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