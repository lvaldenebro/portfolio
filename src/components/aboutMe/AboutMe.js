import TextSection from './TextSection';
import ResuméSection from './ResuméSection';

// import cv from '../../../docs/assets/';

const AboutMe = () => {
    
    return (
        <section id="about-me" className="container-fluid about-me section">
            <TextSection />
            {/* TODO: REVIEW SIZING RESUMË */}
            <ResuméSection />
        </section>
)};

export default AboutMe;