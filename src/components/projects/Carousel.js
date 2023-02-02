import criaturesBattle from '../../images/projects/criatures-battle.png';
import landingPage from '../../images/projects/landing-page.png';
import simpleLandingPage from '../../images/projects/simple-landing-page.png';
import adalaberManagement from '../../images/projects/adalaber-management.png';
import minionGenerator from '../../images/projects/minion-generator.png';

import introductoryLanding from '../../images/projects/introductory-landing.png';
import reactRefactor from '../../images/projects/react-refactor.png';

//Components
import ProjectCarouselItem from './ProjectCarouselItem';

const Carousel = (  ) => {
    
    return (
        <div className="row">
            <div className="column">
                <div id="carouselExampleAutoplaying" className="carousel slide mx-auto" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        {/* src + title + github + web */}
                        <ProjectCarouselItem src={ landingPage } title="Landing Page" web="https://lvaldenebro.github.io/landing-page/" github="https://github.com/lvaldenebro/landing-page"/>

                        <ProjectCarouselItem src={ criaturesBattle } title="Criature's battle" web="https://lvaldenebro.github.io/creatures-battle/" github="https://github.com/lvaldenebro/creatures-battle"/>
                        
                        <ProjectCarouselItem src={ reactRefactor } title="React Refactor Challenge" web="https://react-refactor-challenge-production.up.railway.app/" github="https://github.com/lvaldenebro/creatures-battle"/>

                        <ProjectCarouselItem src={ minionGenerator } title="Minion Card Generator" web="https://lvaldenebro.github.io/minion-card-generator/" github="https://github.com/lvaldenebro/minion-card-generator"/>

                        <ProjectCarouselItem src={ introductoryLanding } title="Team Introduction Landing" web="https://lvaldenebro.github.io/team-introduction-landing/" github="https://github.com/lvaldenebro/team-introduction-landing"/>

                        <ProjectCarouselItem src={ adalaberManagement } title="Adalaber's Info Management" web="https://lvaldenebro.github.io/adalaber-management" github="https://github.com/lvaldenebro/adalaber-management"/>

                        <ProjectCarouselItem src={ simpleLandingPage } title="Adalaber's Info Management" web="https://lvaldenebro.github.io/simple-landing-page/" github="https://github.com/lvaldenebro/simple-landing-page"/>
                    </div>
                </div>
            </div>
        </div>
)};

export default Carousel;