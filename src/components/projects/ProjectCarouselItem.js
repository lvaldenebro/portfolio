import code from '../../images/code.svg';
import webPage from '../../images/web-page.svg';

const ProjectCarouselItem = ( props ) => {
    
    return (
        <div className="carousel-item active">
            <img src={ props.src } className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5 className="carousel-projects-title">{ props.title }</h5>
                <a className="btn btn-projects" href={ props.web}>
                    <img  className="logo logo-carousel" src={ webPage } alt="Demo" />
                </a>
                <a className="btn btn-projects" href={props.github}>
                    <img  className="logo logo-carousel" src={ code } alt="Web page's code" />
                </a>
            </div>
        </div>
)};

export default ProjectCarouselItem;