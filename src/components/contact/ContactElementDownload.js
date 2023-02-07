const ContactElementDownload= ( props ) => {
    
    return (
        <div className="col-6 col-md-3 btn btn-wo-background">
            <a className="link btn" href= { props.href } download>
                <img  className="logo contact-logo" src={ props.src } title="CV" alt="Cv's icon" />
                <p>{ props.text }</p>
            </a>
        </div>
)};

export default ContactElementDownload;