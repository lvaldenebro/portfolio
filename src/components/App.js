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
    <nav>
        <ul className="nav justify-content-end nav-top">
            <li className="nav-item">
                <a className="nav-link" href="#about-me"><span className="highlight-container"><span className="highlight">About Me</span></span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#tech-stack"><span className="highlight-container"><span className="highlight">Tech Stack</span></span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#projects"><span className="highlight-container"><span className="highlight">Projects</span></span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact"><span className="highlight-container"><span className="highlight">Contact</span></span></a>
            </li>
        </ul>
    </nav>

    <main>
        <section className="container">
            <div className="row introduction-div">
                {/* mx-auto + d-block center the image */}
                {/* TODO: review the picture is not being centered */}
                <div className="col-md-6 circle-box">
                    <div className="circle">
                        <img className="img" src= {avatar} title="Laura" alt="Laura Valdenebro" />
                    </div>
                </div>
                <div className="col-md-6 text-center text-md-start">
                    <h1 className="h1">Laura Valdenebro</h1>
                    <p className="subtitle">Full-stack developer</p>
                    <p className="motto">Highlight your passion💙</p>
                </div>
            </div>
        </section>

        <section id="about-me" className="container-fluid about-me section">
            <div className="row">
                <h2 className="h2"><span className="highlight-container"><span className="highlight">About Me</span></span></h2>
                <p className="about-me_description">Horse jumping requires planning, discipline and practice, but also such a strong link between rider and animal that they act as a single being. That's me, a team player with a unique and different perspective that helps me find innovative solutions to all problems. Always in a crusade for self-explicative and super-effective code, I'm looking for a place to apply all my experience in tech while I evolve and learn as a fullstack developer. My motto: "try, learn, share".</p>
            </div>
            <div className="row text-center justify-content-center">              
                <a className="link" href="#">
                    <img  className="logo" src={ cv } title="CV" alt="Cv's icon" />
                    <p><span className="highlight-container"><span className="highlight">Resumé</span></span></p>
                </a>
            </div>
        </section>

        <section id="tech-stack" className="container-fluid tech-stack section">
            <h2 className="h2"><span className="highlight-container"><span className="highlight">Tech Stack</span></span></h2>
                {/* <!-- TODO: revisar la lista --> */}
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
                    <li className="list tech-stack-nologo">RESTful APIs</li>
                    <li className="list tech-stack-nologo">Agile</li>
                    <li className="list tech-stack-nologo">Scrum</li>
                </ul>
        </section>

        <section id="projects" className="container-fluid section">
            <div className="row row-projects">
                <h2 className="h2"><span className="highlight-container"><span className="highlight">Projects</span></span></h2>
            </div>
            <div className="row row-projects important-projects">

            <div className="card text-center">
                    <img src={bookHostel} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">BookHostel (under construction)</h5>
                        <p className="card-text">A page in which exchange freely your old books</p>
                        <hr />
                        <p className="card-text">HTML5 | Sass | React | Bootstrap | API Rest | NextJS | ExpressJS | DB</p>
                        <hr />
                        {/* <a className="btn btn-primary" href="#">
                            <img  className="logo" src={ webPage } alt="Demo" />
                        </a> */}
                        <a className="btn btn-primary" href="https://github.com/lvaldenebro/book-hostel">
                            <img  className="logo" src={ code } alt="Web page's code" />
                        </a>
                    </div>
                </div>

            <div className="card text-center">
                    <img src={portfolio} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Porfolio (Welcome to the v 1.0!)</h5>
                        <p className="card-text">Portfolio actively being improved to show what I can do</p>
                        <hr />
                        <p className="card-text">HTML5 | Sass | React | Bootstrap</p>
                        <hr />
                        <a className="btn btn-primary" href="www.lauravaldenebro.com">
                            <img  className="logo" src={ webPage } alt="Demo" />
                        </a>
                        <a className="btn btn-primary" href="https://github.com/lvaldenebro/portfolio">
                            <img  className="logo" src={ code } alt="Web page's code" />
                        </a>
                    </div>
                </div>

                <div className="card text-center">
                    <img src={ bbSearcher } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Breaking bad, dead or alive?</h5>
                        <p className="card-text">Breaking Bad based character searcher</p>
                        <hr />
                        <p className="card-text">HTML5 | Sass | JS | localeStorage | API Rest</p>
                        <hr />
                        <a className="btn btn-primary" href="https://lvaldenebro.github.io/breaking-bad-character-searcher-js/">
                            <img  className="logo" src={ webPage } alt="Demo" />
                        </a>
                        <a className="btn btn-primary" href="https://github.com/lvaldenebro/breaking-bad-character-searcher-js">
                            <img  className="logo" src={ code } alt="Web page's code" />
                        </a>
                    </div>
                </div>

                <div className="card text-center">
                    <img src={ rmSearcher } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Rick and Morty, who is what?</h5>
                        <p className="card-text">Rick and Morty's based character searcher</p>
                        <hr />
                        <p className="card-text">HTML5 | Sass | React | React Router | localStorage | API Rest</p>
                        <hr />
                        <a className="btn btn-primary" href="https://lvaldenebro.github.io/rick-morty-character-searcher-react/">
                            <img  className="logo" src={ webPage } alt="Demo" />
                        </a>
                        <a className="btn btn-primary" href="https://github.com/lvaldenebro/rick-morty-character-searcher-react">
                            <img  className="logo" src={ code } alt="Web page's code" />
                        </a>
                    </div>
                </div>
            </div>



{/* 
carousel -- for less important projects*/}
            <div className="row row-projects justify-content-center">
                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>

                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={ landingPage } className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Criature's battle</h5>
                            <a className="btn btn-primary" href="https://lvaldenebro.github.io/landing-page/">
                                <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                            </a>
                            <a className="btn btn-primary" href="https://github.com/lvaldenebro/landing-page">
                                <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                            </a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={ criaturesBattle } className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Criature's battle</h5>
                            <a className="btn btn-primary" href="https://lvaldenebro.github.io/creatures-battle/">
                                <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                            </a>
                            <a className="btn btn-primary" href="https://github.com/lvaldenebro/creatures-battle">
                                <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                            </a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={ reactRefactor } className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>React Refactor Challenge</h5>
                            <a className="btn btn-primary" href="https://react-refactor-challenge-production.up.railway.app/">
                                <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                            </a>
                            <a className="btn btn-primary" href="https://github.com/lvaldenebro/react-refactor-challenge">
                                <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                            </a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={ minionGenerator } className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Minion Card Generator</h5>
                            <a className="btn btn-primary" href="https://lvaldenebro.github.io/minion-card-generator/">
                                <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                            </a>
                            <a className="btn btn-primary" href="https://github.com/lvaldenebro/minion-card-generator">
                                <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                            </a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={ introductoryLanding } className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Team Introduction Landing</h5>
                            <a className="btn btn-primary" href="https://lvaldenebro.github.io/team-introduction-landing/">
                                <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                            </a>
                            <a className="btn btn-primary" href="https://github.com/lvaldenebro/team-introduction-landing">
                                <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                            </a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={ adalaberManagement } className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Adalaber's Info Management</h5>
                            <a className="btn btn-primary" href="https://github.com/lvaldenebro/adalaber-management">
                                <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                            </a>
                            <a className="btn btn-primary" href="https://lvaldenebro.github.io/adalaber-management/">
                                <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                            </a>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={ simpleLandingPage } className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Simple Landing Page</h5>
                            <a className="btn btn-primary" href="https://lvaldenebro.github.io/simple-landing-page/">
                                <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                            </a>
                            <a className="btn btn-primary" href="https://github.com/lvaldenebro/simple-landing-page">
                                <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                            </a>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
{/* 
carousel */}
            
        </section>

        <section id="contact"className="container-fluid contact section">
            <div className="row">
                <h2 className="h2"><span className="highlight-container"><span className="highlight">Contact</span></span></h2>
            </div>
            <div className="row text-center">
                <ul>
                    <li className="list">
                        <a className="link" href= {cvPDF} download>
                            <img  className="logo contact-logo" src={ cv } title="CV" alt="Cv's icon" />
                            <p className="contact-desc">Know me!</p>
                        </a>
                    </li>
                    <li className="list">
                        <a className="link" href="https://github.com/lvaldenebro">
                            <img  className="logo contact-logo" src={ github } title= "GitHub" alt="Github's icon" />
                            <p className="contact-desc">Fork me!</p>
                        </a>
                    </li>
                    <li className="list">
                        <a className="link" href="mailto:lauravaldeal@gmai.com">
                            <img  className="logo contact-logo" src= { email } title="email" alt="Email's icon" />
                            <p className="contact-desc">Contact me!</p>
                        </a>
                    </li>
                    <li className="list">
                        <a className="link" href="https://www.linkedin.com/in/laura-valdenebro/">
                            <img  className="logo contact-logo" src={ linkedin } title="linkedin" alt="Linkedin's icon" />
                            <p className="contact-desc">Hire me!</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </main>
    <footer className="container-fluid footer section text-center">
        <div className="row">
            <nav className="nav col flex-column nav-bottom">
                <a className="nav-link active" aria-current="page" href="#"> <span className="highlight-container"><span className="highlight">About Me</span></span></a>
                <a className="nav-link" href="#"> <span className="highlight-container"><span className="highlight">Tech Stack</span></span></a>
                <a className="nav-link" href="#"> <span className="highlight-container"><span className="highlight">Projects</span></span></a>
                <a className="nav-link"  href="#"> <span className="highlight-container"><span className="highlight">Contact</span></span></a>
            </nav>

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