// STYLES
import '../styles/App.scss';

//IMAGES




//DOCUMENTS

//TechStack

// import cv from '../images/cv.svg';
// import github from '../images/github.svg';
// import email from '../images/email.svg';
// import linkedin from '../images/linkedin.svg';


//Components
import Header from './header/Header';
import Introduction from './introduction/Introduction';
import AboutMe from './aboutMe/AboutMe';
import TechStack from './techStack/TechStack';
import SoftSkills from './softSkills/SkillsSoft';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

function App() {
return (
    <div>
        <Header />
        <main>
            <Introduction />
            <AboutMe />
            <TechStack />
            <SoftSkills />
            <Projects />
            <Contact />

        </main>
        <Footer />

    </div>
);
}

export default App;