import TextSection from './TextSection';
import ResumeSection from './ResumeSection';

// import cv from '../../../docs/assets/';

const AboutMe = () => {
    
    return (
        <section id="about-me" className="container-fluid section">
            <TextSection />
            {/* TODO: REVIEW SIZING RESUMË */}
            <ResumeSection />
        </section>
)};

export default AboutMe;