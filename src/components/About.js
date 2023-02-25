function About(){
    return(
        <section id="about">
            <div className="flex">
                <div className="about-content">
                    <h1 className="section-title">About me</h1>
                    <p>An engineering graduate looking to transition into web development. I bring a unique set of skills and problem-solving abilities to the table. My background in engineering has given me a strong foundation in math, logic, and analytical thinking, which will serve me well in the world of software development.</p>
                </div>
                <img src="https://media.licdn.com/dms/image/D4E03AQF_G6qx0FzOQQ/profile-displayphoto-shrink_800_800/0/1665866307830?e=1682553600&v=beta&t=4PFh0aVp0aPGBOyALuqF6EXYrBzV5w7opckfoF3AYwM" 
                alt="me" className="me" />
            </div>
        </section>
    )
}

export default About