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
import mysql from '../../images/mysql.png';
import api from '../../images/api.png';
import json from '../../images/json.png';

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