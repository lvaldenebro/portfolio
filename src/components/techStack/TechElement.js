const TechElement = (props) => {
    
    return (
        <>
            {/* TODO:REVIEW ALT TO ADD 'logo' */}
            <li className="list"><img className="logo tech-stack-logo" src= { props.logo } title={ props.nameLogo } alt={ props.nameLogo } /></li>
        </>

)};

export default TechElement;