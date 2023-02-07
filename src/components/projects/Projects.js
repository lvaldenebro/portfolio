

//Components
import Title from '../general/Title';
import ProjectsImportant from './ProjectsImportant';
import Carousel from './Carousel';

//Generic
// import code from '../../images/code.svg';
// import webPage from '../../images/web-page.svg';


const Projects = () => {
    
    return (
        <section id="projects" className="container-fluid section">
            <div className="row row-projects">
                <div className="col">
                    <Title title="projects"/>
                </div>
            </div>
            
            <ProjectsImportant/>   
            <Carousel/>

        </section>
)};

export default Projects;