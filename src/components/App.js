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

 {/* <header className="container-fluid border my-5">
          <nav className="row border align-items-end gx-2">
              <ul>
                  <li className="col-sm-8 border justify-content-center list">About Me</li>
                  <li className="col-sm-8 border justify-content-center list">Tech Stack</li>
                  <li className="col-sm-8 border justify-content-center list">Projects</li>
                  <li className="col-sm-8 border justify-content-center list">Contact</li>
              </ul>
          </nav>
      </header> */}

    <main>
        <section className="container-fluid border">
            <img src= {avatar} title="Laura" alt="Laura Valdenebro" />
            <h1>Laura Valdenebro</h1>
            <p>Full-stack developer</p>
            <p>Highlight you passion 💙</p>
        </section>

        <section className="container-fluid">
            <h2>About Me</h2>
                <p>Horse jumping requires planning, discipline and practice, but also such a strong link between rider and animal that they act as a single being. That's me, a team player with a unique and different perspective that helps me find innovative solutions to all problems. Always in a crusade for self-explicative and super-effective code, I'm looking for a place to apply all my experience in tech while I evolve and learn as a fullstack developer. My motto: "try, learn, share".</p>
                {/* <!-- TODO: ojo con el icono custom para el cv y su link --> */}
                <p>Resumé</p>
        </section>

        <section className="container-fluid">
            <h2>Tech Stack</h2>
                {/* <!-- TODO: revisar la lista --> */}
                <ul>
                    <li><img src= { html } title="html" alt="html logo" /></li>
                    <li><img src= { css } title="css" alt="css logo" /></li>
                    <li><img src= { sass } title="sass" alt="sass logo" /></li>
                    <li><img src= { js } title="js" alt="js logo" /></li>
                    <li><img src= { python } title="python" alt="python logo" /></li>
                    <li><img src= { bash } title="bash" alt="bash logo" /></li>
                    <li><img src= { git } title="git" alt="git logo" /></li>
                    <li><img src= { github } title="github" alt="github logo" /></li>
                    <li><img src= { bootstrap } title="bootstrap" alt="bootstrap logo" /></li>
                    <li><img src= { nodejs } title="nodejs" alt="nodejs logo" /></li>
                    <li><img src= { sql } title="sql" alt="sql logo" /></li>
                    <li><img src= { sqlite } title="sqlite" alt="sqlite logo" /></li>
                    <li><img src= { zeplin } title="zeplin" alt="zeplin logo" /></li>
                    <li><img src= { canva } title="canva" alt="canva logo" /></li>
                    <li><img src= { react } title="react" alt="react logo" /></li>
                    <li>APIs Rest</li>
                    <li>Miro</li>
                    <li>Agile</li>
                    <li>Scrum</li>
                </ul>
        </section>

        <section className="container-fluid">
            <h2>Projects</h2>
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
                                <img src={ webPage } alt="Demo" />
                            </a>
                            </li>
                            <li>
                            <a href="https://github.com/lvaldenebro/creatures-battle">
                                <img src={ code } alt="Web page0's code" />
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
                                <img src={ webPage } alt="Demo" />
                            </a>
                            </li>
                            <li>
                            <a href="https://github.com/lvaldenebro/creatures-battle">
                                <img src={ code } alt="Web page0's code" />
                            </a>
                            </li>
                        </ul>
                </li>
            </ul>
        </section>

        <section className="container-fluid">
            <h2>Contact</h2>
            {/* <!-- TODO: carrousel? POR todos los proyectos. Partial vacío--> */}
            <ul>
                <li>
                    {/* <!-- TODO: dowload cv --> */}
                    <img src={ cv } title="CV" alt="Cv's icon" />
                    <p>Know me!</p>
                </li>
                <li>
                    {/* <!-- TODO: link --> */}
                    <img src={ github } title= "GitHub" alt="Github's icon" />
                    <p>Fork me!</p>
                </li>
                <li>
                    {/* <!-- TODO: milto --> */}
                    <img src= { email } title="email" alt="Email's icon" />
                    <p>Contact me!</p>
                </li>
                <li>
                    {/* <!-- TODO: link --> */}
                    <img src={ linkedin } title="linkedin" alt="Linkedin's icon" />
                    <p>Hire me!</p>
                </li>
            </ul>
        </section>
    </main>

    <footer className="container-fluid">
            {/* <!-- <nav> TODO: revisar los enlaces --> */}
        <nav class="nav flex-column">
            <a class="nav-link active" aria-current="page" href="#">About Me</a>
            <a class="nav-link" href="#">Tech Stack</a>
            <a class="nav-link" href="#">Projects</a>
            <a class="nav-link"  href="#">Contact</a>
        </nav>

        <div>
            <p>Designed and built by Laura Valdenebro | 2023</p>
            <p>Highlight your passion! 💙</p>
        </div>
    </footer>

</div>
);
}

export default App;