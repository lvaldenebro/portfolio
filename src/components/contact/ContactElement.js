const ContactElement = ( props ) => {
    
    return (
        <div className="col-6 col-md-3 btn btn-wo-background">
            <a className="link btn" href={props.href}>
                <img  className="logo contact-logo" src={ props.src } title={ props.title } alt={ props.alt } />
                <p className="contact-desc">{props.text}</p>
            </a>
        </div>
)};

export default ContactElement;