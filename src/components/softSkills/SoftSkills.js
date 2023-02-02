import Title from '../general/Title';
import SkillsList from './SkillsList'

const SoftSkills = () => {
    
    return (
        <section id="soft-skills" className="container-fluid soft-skills section paper-background">
                <div className="row">
                    <div className="column">
                        <Title title="soft skills"/>
                    </div>
                </div>
                <div className="row">
                    <div className="column text-center">
                        <SkillsList />
                    </div>
                </div>    
            </section>
)};

export default SoftSkills;