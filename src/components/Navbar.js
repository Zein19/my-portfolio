function Navbar(){
    return(
        <header className="navbar">
            <nav>
                <a href="#landing">ZS</a>
                <ul>
                    <li className="nav-item"><a href="#about">About</a></li>
                    <li className="nav-item"><a href="#projects">Projects</a></li>
                    <li className="nav-item"><a href="#contact">Contact Me</a></li>
                </ul>
                <a href="github.com">My CV</a>
            </nav>
        </header>
    )
}

export default Navbar