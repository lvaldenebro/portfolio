import bash from '../../images/bash.svg';
import bootstrap from '../../images/bootstrap.svg';
import canva from '../../images/canva.svg';
import css from '../../images/css.svg';
import git from '../../images/git.svg';
import html from '../../images/html.svg';
import js from '../../images/js.svg';
import nodejs from '../../images/node.svg';
import python from '../../images/python.svg';
import react from '../../images/react.svg';
import sass from '../../images/sass.svg';
import sql from '../../images/sql.svg';
import sqlite from '../../images/sqlite.svg';
import zeplin from '../../images/zeplin.svg';
import github from '../../images/github.svg';
import miro from '../../images/miro.png';

import TechElement from './TechElement';

const TechList = () => {
    
    return (
        <ul>
            <TechElement logo={html} namelogo="html" />
            <TechElement logo={css} namelogo="css" />
            <TechElement logo={sass} namelogo="sass" />
            <TechElement logo={bootstrap} namelogo="bootstrap" />
            <TechElement logo={js} namelogo="js" />
            <TechElement logo={react} namelogo="react" />
            <TechElement logo={python} namelogo="python" />
            <TechElement logo={nodejs} namelogo="nodejs" />
            <TechElement logo={sql} namelogo="sql" />
            <TechElement logo={sqlite} namelogo="sqlite" />
            <TechElement logo={bash} namelogo="bash" />
            <TechElement logo={git} namelogo="git" />
            <TechElement logo={github} namelogo="github" />
            <TechElement logo={zeplin} namelogo="zeplin" />
            <TechElement logo={canva} namelogo="canva" />
            <TechElement logo={miro} namelogo="miro" />
            <li className="badge rounded-pill text-bg-skills">MySQL</li>
            <li className="badge rounded-pill text-bg-skills">RESTful APIs</li>
        </ul>
)};

export default TechList;