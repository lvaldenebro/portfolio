// STYLES
import '../styles/App.scss';

//IMAGES




//DOCUMENTS

//TechStack

// import cv from '../images/cv.svg';
// import github from '../images/github.svg';
// import email from '../images/email.svg';
// import linkedin from '../images/linkedin.svg';


//Components
import Header from './header/Header';
import Introduction from './introduction/Introduction';
import AboutMe from './aboutMe/AboutMe';
import TechStack from './techStack/TechStack';
import SoftSkills from './softSkills/SoftSkills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

function App() {
return (
    <div>
        <Header />
        <main>
            <Introduction />
{/* LOS TÏTULOS TIENEN QUE SER UN COMPONENT ÜNICO */}
{/* REVISAR TODO LO REUTILIZABLE */}
            <AboutMe />
            <TechStack />
            <SoftSkills />
            <Projects />
            <Contact />

        </main>
        <footer className="container-fluid footer section text-center">
            <div className="row">
                <div className="col">
                    <nav className="nav col flex-column nav-bottom">
                        <a className="nav-link link" aria-current="page" href="#about-me"><span className="highlight-container"><span className="highlight">About Me</span></span></a>
                        <a className="nav-link link" href="#tech-stack"><span className="highlight-container"><span className="highlight">Tech Stack</span></span></a>
                        <a className="nav-link link" href="#soft-skills"><span className="highlight-container"><span className="highlight">Soft Skills</span></span></a>
                        <a className="nav-link link" href="#projects"><span className="highlight-container"><span className="highlight">Projects</span></span></a>
                        <a className="nav-link link"  href="#contact"><span className="highlight-container"><span className="highlight">Contact</span></span></a>
                    </nav>
                </div>

                <div className="col credits">
                    <p>Designed and built by Laura Valdenebro | 2023</p>
                    <p>Highlight your passion!💙</p>
                </div>
            </div>
        </footer>

    </div>
);
}

export default App;