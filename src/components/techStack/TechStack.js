import TechList from './TechList';
import Title from '../general/Title';

const TechStack = () => {
    
    return (
        <section id="tech-stack" className="container-fluid tech-stack section paper-background">
                <div className="row">
                    <div className="column">
                        <Title href='tech-stack' title='tech stack'/>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="column">
                        <TechList />
                    </div>
                </div>    
            </section>
)};

export default TechStack;