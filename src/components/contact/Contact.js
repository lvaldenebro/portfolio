import cvPDF from '../../documents/Valdenebro,Laura-JuniorFullstackDeveloper.pdf';
import cv from '../../images/cv.svg';
import github from '../../images/github.svg';
import email from '../../images/email.svg';
import linkedin from '../../images/linkedin.svg';

//Components
import Title from "../general/Title";
import ContactElementDownload from './ContactElementDownload';
import ContactElement from './ContactElement';

const Contact = () => {
    
    return (
        <section id="contact"className="container-fluid contact section paper-background">
                <div className="row">
                    <div className="col">
                        <Title title="contact"/>
                    </div>
                </div>
                <div className="row text-center">
                    <ContactElementDownload href={ cvPDF } src={ cv } title="cv" alt="cv" text="Know me!" />
                    <ContactElement href="https://github.com/lvaldenebro" src={ github } title="github" alt="github" text="Fork me!" />
                    <ContactElement href="mailto:lauravaldeal@gmai.com" src={ email } title="email" alt="email" text="Contact me!" />
                    <ContactElement href="https://www.linkedin.com/in/laura-valdenebro/" src={ linkedin } title="linkedin" alt="linkedin" text="Hire me!" />
                </div>
            </section>
)};

export default Contact;