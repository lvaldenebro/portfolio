// STYLES
import '../styles/App.scss';

//IMAGES
import avatar from '../images/avatar.jpg';
import criaturesBattle from '../images/projects/criatures-battle.png';
import landingPage from '../images/projects/landing-page.png';
import simpleLandingPage from '../images/projects/simple-landing-page.png';
import adalaberManagement from '../images/projects/adalaber-management.png';
import minionGenerator from '../images/projects/minion-generator.png';
import bbSearcher from '../images/projects/BB-character-searcher.png';
import introductoryLanding from '../images/projects/introductory-landing.png';
import reactRefactor from '../images/projects/react-refactor.png';
import rmSearcher from '../images/projects/RM-character-searcher.png';
import bookHostel from '../images/projects/book-hostel.png';
import portfolio from '../images/projects/portfolio.png';
import logo from '../images/logo.png';


//DOCUMENTS
import cvPDF from '../documents/Valdenebro,Laura-JuniorFullstackDeveloper.pdf';

//TechStack

import bash from '../images/bash.svg';
import bootstrap from '../images/bootstrap.svg';
import canva from '../images/canva.svg';
import css from '../images/css.svg';
import git from '../images/git.svg';
import html from '../images/html.svg';
import js from '../images/js.svg';
import nodejs from '../images/node.svg';
import python from '../images/python.svg';
import react from '../images/react.svg';
import sass from '../images/sass.svg';
import sql from '../images/sql.svg';
import sqlite from '../images/sqlite.svg';
import zeplin from '../images/zeplin.svg';
// import restApi from '../images/rest-api.svg';
import miro from '../images/miro.png';

import cv from '../images/cv.svg';
import github from '../images/github.svg';
import email from '../images/email.svg';
import linkedin from '../images/linkedin.svg';
import code from '../images/code.svg';
import webPage from '../images/web-page.svg';


function App() {
return (
    <div>
        <header className="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">
                        <img className="personal-logo" src={ logo } alt="Personal logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* ms-auto -> margin start */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#about-me"><span className="highlight-container"><span className="highlight">About Me</span></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#tech-stack"><span className="highlight-container"><span className="highlight">Tech Stack</span></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#soft-skills"><span className="highlight-container"><span className="highlight">Soft Skills</span></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#projects"><span className="highlight-container"><span className="highlight">Projects</span></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#contact"><span className="highlight-container"><span className="highlight">Contact</span></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <main>
            <section className="container-fluid paper-background">
                <div className="row introduction-div">
                    <div className="col-12 col-lg-5 circle-box">
                        <div className="circle">
                            <img className="img" src= {avatar} title="Laura" alt="Laura Valdenebro" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 text-center text-lg-start">
                        <h1 className="h1">Laura Valdenebro</h1>
                        <p className="subtitle">Full-stack Developer /</p>
                        <p className="subtitle">Computational Linguist</p>
                        <p className="motto"><span className="highlight-container"><span className="highlight">Highlight</span></span> your passion💙</p>
                    </div>
                </div>
            </section>

            <section id="about-me" className="container-fluid about-me section">
                <div className="row">
                    <div className="col">
                        <h2 className="h2"><span className="highlight-container"><span className="highlight">About Me</span></span></h2>
                        <p className="about-me_description">Horse jumping requires planning, discipline and practice, but also such a strong link between rider and animal that they act as a single being. That's me, a team player with a unique and different perspective that helps me find innovative solutions to all problems. Always in a crusade for self-explicative and super-effective code, I'm looking for a place to apply all my experience in tech while I evolve and learn as a fullstack developer. My motto: "try, learn, share".</p>
                    </div>
                </div>
                {/* TODO: REVIEW SIZING RESUMË */}
                <div className="row text-center justify-content-center">
                    <div className="col btn btn-wo-background">
                        {/* TODO: REACT ROUTER   */}
                        <a className="link" href="/#">
                            <img  className="logo" src={ cv } title="CV" alt="Cv's icon" />
                            <p><span className="highlight-container"><span className="highlight">Resumé</span></span></p>
                        </a>
                    </div>
                </div>
            </section>

            <section id="tech-stack" className="container-fluid tech-stack section paper-background">
                <div className="row">
                    <div className="column">
                        <h2 className="h2"><span className="highlight-container"><span className="highlight">Tech Stack</span></span></h2>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="column">
                        <ul>
                            <li className="list"><img className="logo tech-stack-logo" src= { html } title="html" alt="html logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { css } title="css" alt="css logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { sass } title="sass" alt="sass logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { js } title="js" alt="js logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { python } title="python" alt="python logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { bash } title="bash" alt="bash logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { git } title="git" alt="git logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { github } title="github" alt="github logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { bootstrap } title="bootstrap" alt="bootstrap logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { nodejs } title="nodejs" alt="nodejs logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { sql } title="sql" alt="sql logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { sqlite } title="sqlite" alt="sqlite logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { zeplin } title="zeplin" alt="zeplin logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { canva } title="canva" alt="canva logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { react } title="react" alt="react logo" /></li>
                            <li className="list"><img className="logo tech-stack-logo" src= { miro } title="miro" alt="miro logo" /></li>
                            <li className="badge rounded-pill text-bg-skills">RESTful APIs</li>
                        </ul>
                    </div>
                </div>    
            </section>

            <section id="soft-skills" className="container-fluid soft-skills section paper-background">
                <div className="row">
                    <div className="column">
                        <h2 className="h2"><span className="highlight-container"><span className="highlight">Soft skills</span></span></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="column text-center">
                        {/* REVIEW LIST MANAGEMENT WITH BOOSTRAP */}
                        <ul>
                            <li className="badge rounded-pill text-bg-skills">Agile</li>
                            <li className="badge rounded-pill text-bg-skills">Scrum</li>
                            <li className="badge rounded-pill text-bg-skills">Communication</li>
                            <li className="badge rounded-pill text-bg-skills">Computational thinking</li>
                            <li className="badge rounded-pill text-bg-skills">Team worker</li>
                            <li className="badge rounded-pill text-bg-skills">Remote work</li>
                            <li className="badge rounded-pill text-bg-skills">Out of the box thinker</li>
                            <li className="badge rounded-pill text-bg-skills">Motivation</li>
                            <li className="badge rounded-pill text-bg-skills">Passion</li>
                        </ul>
                    </div>
                </div>    
            </section>

            <section id="projects" className="container-fluid section projects">
                <div className="row row-projects">
                    <div className="col">
                        <h2 className="h2"><span className="highlight-container"><span className="highlight">Projects</span></span></h2>
                    </div>
                </div>

                <div className="row row-projects important-projects">
                    <div className="col-12 col-sm-6 col-xl-3 mb-4">
                        <div className="card mx-auto">
                            {/* mx-auto to center the card */}
                            <img src={bookHostel} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">BookHostel (under construction)</h5>
                                <p className="card-text">A page in which exchange freely your old books</p>
                                <hr />
                                <p className="card-text">HTML5 | Sass | React | Bootstrap | API Rest | NextJS | ExpressJS | DB</p>
                                <hr />
                                <a className="btn btn-imp-projects disabled" href="/#">
                                    <img  className="logo" src={ webPage } alt="Demo" />
                                </a>
                                <a className="btn btn-imp-projects" href="https://github.com/lvaldenebro/book-hostel">
                                    <img  className="logo" src={ code } alt="Web page's code" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-xl-3 mb-4">
                        <div className="card mx-auto">
                            <img src={portfolio} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Porfolio (Welcome to the v 1.0!)</h5>
                                <p className="card-text">Portfolio actively being improved to show what I can do</p>
                                <hr />
                                <p className="card-text">HTML5 | Sass | React | Bootstrap</p>
                                <hr />
                                <a className="btn btn-imp-projects" href="www.lauravaldenebro.com">
                                    <img  className="logo" src={ webPage } alt="Demo" />
                                </a>
                                <a className="btn btn-imp-projects" href="https://github.com/lvaldenebro/portfolio">
                                    <img  className="logo" src={ code } alt="Web page's code" />
                                </a>
                            </div>
                        </div>
                    </div>

                        
                    <div className="col-12 col-sm-6 col-xl-3 mb-4">
                        <div className="card mx-auto">
                            <img src={ bbSearcher } className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Breaking bad, dead or alive?</h5>
                                <p className="card-text">Breaking Bad based character searcher</p>
                                <hr />
                                <p className="card-text">HTML5 | Sass | JS | localeStorage | API Rest</p>
                                <hr />
                                <a className="btn btn-imp-projects" href="https://lvaldenebro.github.io/breaking-bad-character-searcher-js/">
                                    <img  className="logo" src={ webPage } alt="Demo" />
                                </a>
                                <a className="btn btn-imp-projects" href="https://github.com/lvaldenebro/breaking-bad-character-searcher-js">
                                    <img  className="logo" src={ code } alt="Web page's code" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-xl-3 mb-5">
                        <div className="card mx-auto">
                            <img src={ rmSearcher } className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Rick and Morty, who is what?</h5>
                                <p className="card-text">Rick and Morty's based character searcher</p>
                                <hr />
                                <p className="card-text">HTML5 | Sass | React | React Router | localStorage | API Rest</p>
                                <hr />
                                <a className="btn btn-imp-projects" href="https://lvaldenebro.github.io/rick-morty-character-searcher-react/">
                                    <img  className="logo" src={ webPage } alt="Demo" />
                                </a>
                                <a className="btn btn-imp-projects" href="https://github.com/lvaldenebro/rick-morty-character-searcher-react">
                                    <img  className="logo" src={ code } alt="Web page's code" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

{/* carousel */}
                <div className="row">
                    <div className="column">
                        <div id="carouselExampleAutoplaying" className="carousel slide mx-auto" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={ landingPage } className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="carousel-projects-title">Landing Page</h5>
                                        <a className="btn btn-projects" href="https://lvaldenebro.github.io/landing-page/">
                                            <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                                        </a>
                                        <a className="btn btn-projects" href="https://github.com/lvaldenebro/landing-page">
                                            <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img src={ criaturesBattle } className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="carousel-projects-title">Criature's battle</h5>
                                        <a className="btn btn-projects" href="https://lvaldenebro.github.io/creatures-battle/">
                                            <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                                        </a>
                                        <a className="btn btn-projects" href="https://github.com/lvaldenebro/creatures-battle">
                                            <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img src={ reactRefactor } className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="carousel-projects-title">React Refactor Challenge</h5>
                                        <a className="btn btn-projects" href="https://react-refactor-challenge-production.up.railway.app/">
                                            <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                                        </a>
                                        <a className="btn btn-projects" href="https://github.com/lvaldenebro/react-refactor-challenge">
                                            <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img src={ minionGenerator } className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="carousel-projects-title">Minion Card Generator</h5>
                                        <a className="btn btn-projects" href="https://lvaldenebro.github.io/minion-card-generator/">
                                            <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                                        </a>
                                        <a className="btn btn-projects" href="https://github.com/lvaldenebro/minion-card-generator">
                                            <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img src={ introductoryLanding } className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="carousel-projects-title">Team Introduction Landing</h5>
                                        <a className="btn btn-projects" href="https://lvaldenebro.github.io/team-introduction-landing/">
                                            <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                                        </a>
                                        <a className="btn btn-projects" href="https://github.com/lvaldenebro/team-introduction-landing">
                                            <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img src={ adalaberManagement } className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="carousel-projects-title">Adalaber's Info Management</h5>
                                        <a className="btn btn-projects" href="https://github.com/lvaldenebro/adalaber-management">
                                            <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                                        </a>
                                        <a className="btn btn-projects" href="https://lvaldenebro.github.io/adalaber-management/">
                                            <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                                        </a>
                                    </div>
                                </div>

                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={ simpleLandingPage } className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 className="carousel-projects-title">Simple Landing Page</h5>
                                        <a className="btn btn-projects" href="https://lvaldenebro.github.io/simple-landing-page/">
                                            <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                                        </a>
                                        <a className="btn btn-projects" href="https://github.com/lvaldenebro/simple-landing-page">
                                            <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    {/* 
    carousel */}
            </section>

            <section id="contact"className="container-fluid contact section paper-background">
                <div className="row">
                    <div className="col">
                        <h2 className="h2"><span className="highlight-container"><span className="highlight">Contact</span></span></h2>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-6 col-md-3 btn btn-wo-background">
                        <a className="link btn" href= {cvPDF} download>
                            <img  className="logo contact-logo" src={ cv } title="CV" alt="Cv's icon" />
                            <p className="contact-desc">Know me!</p>
                        </a>
                    </div>
                    <div className="col-6 col-md-3 btn btn-wo-background">
                        <a className="link btn" href="https://github.com/lvaldenebro">
                            <img  className="logo contact-logo" src={ github } title= "GitHub" alt="Github's icon" />
                            <p className="contact-desc">Fork me!</p>
                        </a>
                    </div>
                    <div className="col-6 col-md-3 btn btn-wo-background">
                        <a className="link btn" href="mailto:lauravaldeal@gmai.com">
                            <img  className="logo contact-logo" src= { email } title="email" alt="Email's icon" />
                            <p className="contact-desc">Contact me!</p>
                        </a>
                    </div>
                    <div className="col-6 col-md-3 btn btn-wo-background">
                        <a className="link btn" href="https://www.linkedin.com/in/laura-valdenebro/">
                            <img  className="logo contact-logo" src={ linkedin } title="linkedin" alt="Linkedin's icon" />
                            <p className="contact-desc">Hire me!</p>
                        </a>
                    </div>
                </div>
            </section>
        </main>
        <footer className="container-fluid footer section text-center">
            <div className="row">
                <div className="col">
                    <nav className="nav col flex-column nav-bottom">
                        <a className="nav-link active" aria-current="page" href="#about-me"><span className="highlight-container"><span className="highlight">About Me</span></span></a>
                        <a className="nav-link" href="#tech-stack"><span className="highlight-container"><span className="highlight">Tech Stack</span></span></a>
                        <a className="nav-link" href="#soft-skills"><span className="highlight-container"><span className="highlight">Soft Skills</span></span></a>
                        <a className="nav-link" href="#projects"><span className="highlight-container"><span className="highlight">Projects</span></span></a>
                        <a className="nav-link"  href="#contact"><span className="highlight-container"><span className="highlight">Contact</span></span></a>
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