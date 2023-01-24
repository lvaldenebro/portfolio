// STYLES
import '../styles/App.scss';

//IMAGES
import avatar from '../images/avatar.jpg';
import cv from '../images/cv.svg';
import github from '../images/github.svg';
import email from '../images/email.svg';
import linkedin from '../images/linkedin.svg';
import code from '../images/code.svg';
import webPage from '../images/web-page.svg';

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


function App() {
return (
    <div>
    <nav>
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">About Me</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Tech Stack</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
            </li>
        </ul>
    </nav>

    <main>
        <section className="container border section">
            <div className="row gx-6 my-2">
                {/* mx-auto + d-block center the image */}
                {/* TODO: review the picture is not being centered */}
                <div className="col-md-6 text-center text-md-start border">
                    <div className="circle">
                        <img className="img" src= {avatar} title="Laura" alt="Laura Valdenebro" />
                    </div>
                </div>
                <div className="col-md-6 text-center text-md-start border">
                    <h1 className="h1">Laura Valdenebro</h1>
                    <p className="subtitle">Full-stack developer</p>
                    <p className="motto">Highlight you passion💙</p>
                </div>
            </div>
        </section>

        <section className="container-fluid border about-me section">
            <div className="row">
                <h2 className="h2">About Me</h2>
                <p className="about-me_description">Horse jumping requires planning, discipline and practice, but also such a strong link between rider and animal that they act as a single being. That's me, a team player with a unique and different perspective that helps me find innovative solutions to all problems. Always in a crusade for self-explicative and super-effective code, I'm looking for a place to apply all my experience in tech while I evolve and learn as a fullstack developer. My motto: "try, learn, share".</p>
            </div>
            <div className="row text-center">              
            {/* <!-- TODO: ojo con el icono custom para el cv y su link --> */}
                <a href="#">
                    <img  className="logo" src={ cv } title="CV" alt="Cv's icon" />
                    <p className="about-me_resume">Resumé</p>
                </a>
            </div>
        </section>

        <section className="container-fluid section">
            <h2 className="h2">Tech Stack</h2>
                {/* <!-- TODO: revisar la lista --> */}
                <ul>
                    <li><img className="logo" src= { html } title="html" alt="html logo" /></li>
                    <li><img className="logo" src= { css } title="css" alt="css logo" /></li>
                    <li><img className="logo" src= { sass } title="sass" alt="sass logo" /></li>
                    <li><img className="logo" src= { js } title="js" alt="js logo" /></li>
                    <li><img className="logo" src= { python } title="python" alt="python logo" /></li>
                    <li><img className="logo" src= { bash } title="bash" alt="bash logo" /></li>
                    <li><img className="logo" src= { git } title="git" alt="git logo" /></li>
                    <li><img className="logo" src= { github } title="github" alt="github logo" /></li>
                    <li><img className="logo" src= { bootstrap } title="bootstrap" alt="bootstrap logo" /></li>
                    <li><img className="logo" src= { nodejs } title="nodejs" alt="nodejs logo" /></li>
                    <li><img className="logo" src= { sql } title="sql" alt="sql logo" /></li>
                    <li><img className="logo" src= { sqlite } title="sqlite" alt="sqlite logo" /></li>
                    <li><img className="logo" src= { zeplin } title="zeplin" alt="zeplin logo" /></li>
                    <li><img className="logo" src= { canva } title="canva" alt="canva logo" /></li>
                    <li><img className="logo" src= { react } title="react" alt="react logo" /></li>
                    <li>APIs Rest</li>
                    <li>Miro</li>
                    <li>Agile</li>
                    <li>Scrum</li>
                </ul>
        </section>

        <section className="container-fluid section">
            <h2 className="h2">Projects</h2>
            {/* <!-- TODO: carrousel? POR todos los proyectos. Partial vacío--> */}
            <ul>
                <li>
                    <img src="http://placekitten.com/200/300" alt="Image of the project" />
                    <h3>Criature's battle</h3>
                        <p>Game player vs. machine between the good and the bad forces in the Middle Earth</p>
                        <p>JavaScript | HTML | Sass</p>
                        <ul>
                            <li>
                            <a href="https://lvaldenebro.github.io/creatures-battle/">
                                <img  className="logo" src={ webPage } alt="Demo" />
                            </a>
                            </li>
                            <li>
                            <a href="https://github.com/lvaldenebro/creatures-battle">
                                <img  className="logo" src={ code } alt="Web page0's code" />
                            </a>
                            </li>
                        </ul>
                </li>
                <li>
                    <img src="http://placekitten.com/200/300" alt="Image of the project" />
                    <h3>Criature's battle</h3>
                        <p>Game player vs. machine between the good and the bad forces in the Middle Earth</p>
                        <p>JavaScript | HTML | Sass</p>
                        <ul>
                            <li>
                            <a href="https://lvaldenebro.github.io/creatures-battle/">
                                <img  className="logo" src={ webPage } alt="Demo" />
                            </a>
                            </li>
                            <li>
                            <a href="https://github.com/lvaldenebro/creatures-battle">
                                <img  className="logo" src={ code } alt="Web page0's code" />
                            </a>
                            </li>
                        </ul>
                </li>
            </ul>
        </section>

        <section className="container-fluid section">
            <h2 className="h2">Contact</h2>
            {/* <!-- TODO: carrousel? POR todos los proyectos. Partial vacío--> */}
            <ul>
                <li>
                    {/* <!-- TODO: dowload cv --> */}
                    <img  className="logo" src={ cv } title="CV" alt="Cv's icon" />
                    <p>Know me!</p>
                </li>
                <li>
                    {/* <!-- TODO: link --> */}
                    <img  className="logo" src={ github } title= "GitHub" alt="Github's icon" />
                    <p>Fork me!</p>
                </li>
                <li>
                    {/* <!-- TODO: milto --> */}
                    <img  className="logo" src= { email } title="email" alt="Email's icon" />
                    <p>Contact me!</p>
                </li>
                <li>
                    {/* <!-- TODO: link --> */}
                    <img  className="logo" src={ linkedin } title="linkedin" alt="Linkedin's icon" />
                    <p>Hire me!</p>
                </li>
            </ul>
        </section>
    </main>

    <footer className="container-fluid footer">
            {/* <!-- <nav> TODO: revisar los enlaces --> */}
        <nav class="nav flex-column">
            <a class="nav-link active" aria-current="page" href="#">About Me</a>
            <a class="nav-link" href="#">Tech Stack</a>
            <a class="nav-link" href="#">Projects</a>
            <a class="nav-link"  href="#">Contact</a>
        </nav>

        <div>
            <p>Designed and built by Laura Valdenebro | 2023</p>
            <p>Highlight your passion!💙</p>
        </div>
    </footer>

</div>
);
}

export default App;