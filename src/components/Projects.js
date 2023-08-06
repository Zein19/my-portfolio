function Projects(){
    const projectList = [
        {
          key: 1,
          name: 'NBA Player Stats app',
          description: 'An nba player stats web app made using React. Using the balldontlie api, I fetched the player data. Also made use of hooks. I still intend to add to this project, and one improvement I am planning is to be able to select stats from different seasons, as it is currently only using the 2022 season.',
          image: '/images/nba-app.png',
          link: 'https://zbs-nbasearchapp.netlify.app/',
          source:'https://github.com/Zein19/NBA-Search-app'
        },
        {
          key: 2,
          name: 'Weather App',
          description: 'A weather app made using React which allows you to search for the weather in real time of any city around the world. Made use of hooks, and also terniary to change the background depending on the temperature.',
          image: '/images/weather-app.png',
          link: 'https://zbs-weatherapp.netlify.app/',
          source:'https://github.com/Zein19/Weather-app'
        },
        {
          key: 3,
          name: 'Movie database app',
          description: 'A movie data base app made using HTML, CSS and vanilla JavaScript. It includes the poster, rating and summary of the films. Made use of the moviedb api. Possible improvement I plan to make in future is to be able to sort the movies by rating.',
          image: '/images/movie-app.png',
          link: 'https://zbs-moviesearch.netlify.app/',
          source:'https://github.com/Zein19/MovieSearchApp'
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