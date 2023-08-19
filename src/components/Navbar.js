import React from "react";

function Navbar(){

    const [showNav, setShowNav] = React.useState(false);

    function toggleNavBar(){
      setShowNav(!showNav);
    }

    return(
        <header className="navbar">
            <nav>
                <a className="nav-item" href="#top"><img className="logo" src="/images/logo-no-background.png" alt="logo" /></a>
                <ul className={showNav ? "show" : ""}>
                    <li className="nav-item"><a href="#about">About</a></li>
                    <li className="nav-item"><a href="#projects">Projects</a></li>
                    <li className="nav-item"><a href="#contact">Contact Me</a></li>
                    <li className="nav-item"><a href="Zein-Sharif-CV.pdf" download="Zein-Sharif-CV">My CV</a></li>
                </ul>
                
                
                    <button className="nav-toggle" onClick={toggleNavBar}>
                    <img src="/images/navtoggle.png" alt="nav toggle" />
                </button>
            </nav>
        </header>
    )
}

export default Navbar