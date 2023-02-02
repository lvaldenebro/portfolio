import Description from './Description';
import Title from '../general/Title';

const TextSection = () => {
    return (
        <div className="row">
            <div className="col">
                <Title title="about me"/>
                <Description />
            </div>
        </div>
)};

export default TextSection;