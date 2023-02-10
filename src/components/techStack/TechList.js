import bash from '../../images/technologies/bash.svg';
import bootstrap from '../../images/technologies/bootstrap.svg';
import canva from '../../images/technologies/canva.svg';
import css from '../../images/technologies/css.svg';
import git from '../../images/technologies/git.svg';
import html from '../../images/technologies/html.svg';
import js from '../../images/technologies/js.svg';
import nodejs from '../../images/technologies/node.svg';
import python from '../../images/technologies/python.svg';
import react from '../../images/technologies/react.svg';
import sass from '../../images/technologies/sass.svg';
import sql from '../../images/technologies/sql.svg';
import sqlite from '../../images/technologies/sqlite.svg';
import zeplin from '../../images/technologies/zeplin.svg';
import github from '../../images/github.svg';
import miro from '../../images/technologies/miro.png';
import mysql from '../../images/technologies/mysql.png';
import api from '../../images/technologies/api.png';
import json from '../../images/technologies/json.png';

import TechElement from './TechElement';

const TechList = () => {
    
    return (
        <ul>
            <TechElement logo={html} nameLogo="HTML" />
            <TechElement logo={css} nameLogo="CSS" />
            <TechElement logo={sass} nameLogo="Sass" />
            <TechElement logo={bootstrap} nameLogo="Bootstrap" />
            <TechElement logo={js} nameLogo="JavaScript" />
            <TechElement logo={react} nameLogo="ReactJS" />
            <TechElement logo={python} nameLogo="Python" />
            <TechElement logo={nodejs} nameLogo="NodeJS" />
            <TechElement logo={json} nameLogo="JSON" />
            <TechElement logo={sql} nameLogo="SQL" />
            <TechElement logo={sqlite} nameLogo="SQLite" />
            <TechElement logo={mysql} nameLogo="MySQL" />
            <TechElement logo={bash} nameLogo="Bash" />
            <TechElement logo={git} nameLogo="git" />
            <TechElement logo={github} nameLogo="gitHub" />
            <TechElement logo={zeplin} nameLogo="Zeplin" />
            <TechElement logo={canva} nameLogo="Canva" />
            <TechElement logo={miro} nameLogo="Miro" />
            <TechElement logo={api} nameLogo="API" />
        </ul>
)};

export default TechList;