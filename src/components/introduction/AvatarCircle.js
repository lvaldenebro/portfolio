import avatar from '../../images/avatar.jpg';

const AvatarCircle = () => {
    
    return (
        <div className="col-12 col-lg-5 circle-box">
            <div className="circle">
                <img className="img" src= {avatar} title="Laura" alt="Laura Valdenebro" />
            </div>
        </div>
)};
export default AvatarCircle;