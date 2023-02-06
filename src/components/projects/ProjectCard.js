import code from '../../images/code.svg';
import webPage from '../../images/web-page.svg';

const ProjectCard = (props) => {
        
    return (
        <div className="col-12 col-sm-6 col-xl-3 mb-4">
            <div className="card mx-auto text-center">
                {/* mx-auto to center the card */}
                <img src={ props.src } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ props.title }</h5>
                    <p className="card-text">{ props.desc }</p>
                    <hr />
                    <p className="card-text">{props.techStack}</p>
                    <hr />
                    <a className="btn btn-imp-projects disabled" href={props.web}>
                        <img  className="logo" src={ webPage } alt="Demo" />
                    </a>
                    <a className="btn btn-imp-projects" href={ props.github}>
                        <img  className="logo" src={ code } alt="Web page's code" />
                    </a>
                </div>
            </div>
        </div>

)};
export default ProjectCard;