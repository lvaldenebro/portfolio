import bbSearcher from '../../images/projects/BB-character-searcher.png';
import rmSearcher from '../../images/projects/RM-character-searcher.png';
import bookHostel from '../../images/projects/book-hostel.png';
import portfolio from '../../images/projects/portfolio.png';

//Components
import ProjectCard from './ProjectCard';


const ImportantProjects = () => {
    
    return (
        <div className="col-12 col-sm-6 col-xl-3 mb-4">
            {/* //Src + card-title + desc + techs + ink web + link gith */}
            <ProjectCard src={ bookHostel } title="BookHostel (under construction)" desc="A page in which exchange freely your old books" techStack="HTML5 | Sass | React | Bootstrap | API Rest | NextJS | ExpressJS | DB" web="https://github.com/lvaldenebro/book-hostel" github="https://github.com/lvaldenebro/book-hostel"/>

            <ProjectCard src={ portfolio } title="Porfolio (Welcome to the v 1.0!)" desc="Portfolio actively being improved to show what I can do" techStack="HTML5 | Bootstrap | Sass | React" web="https://github.com/lvaldenebro/portfolio" github="https://github.com/lvaldenebro/portfolio"/>

            <ProjectCard src={ bbSearcher } title="Breaking bad, dead or alive?" desc="Breaking Bad based character searcher" techStack="HTML5 | Sass | JS | localeStorage | API Rest" web="https://github.com/lvaldenebro/breaking-bad-character-searcher-js" github="https://github.com/lvaldenebro/breaking-bad-character-searcher-js"/>

            <ProjectCard src={ rmSearcher } title="Rick and Morty, who is what?" desc="Rick and Morty, who is what?" techStack="HTML5 | Sass | React | React Router | localStorage | API Rest" web="https://github.com/lvaldenebro/rick-morty-character-searcher-react" github="https://github.com/lvaldenebro/rick-morty-character-searcher-react"/>
        </div>    
)};

export default ImportantProjects;