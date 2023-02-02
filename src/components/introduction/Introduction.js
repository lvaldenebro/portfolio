import AvatarCircle from './AvatarCircle';
import TextIntroduction from './TextIntroduction';

const Introduction = () => {
    return (
        <section className="container-fluid paper-background">
            <div className="row introduction-div">
                <AvatarCircle />
                <TextIntroduction />
            </div>
    </section>
)};
export default Introduction;