function About(){
    return(
        <section id="about">
            <div className="flex">
                <div className="about-content">
                    <h1 className="section-title">About me</h1>
                    <p className="about-text">Hello and welcome to my portfolio! My name is Zein and I am an aspiring software engineer. I am passionate about using technology to solve complex problems and make a positive impact on the world. I have experience in React, JavaScript, HTML, CSS and I am always eager to learn new tools and techniques to improve my craft. In my free time, I enjoy working on personal projects. Thank you for taking the time to explore my portfolio and I look forward to connecting with you!</p>
                </div>
                <img src="/images/me.png" 
                alt="me" className="me" />
            </div>
        </section>
    )
}

export default About