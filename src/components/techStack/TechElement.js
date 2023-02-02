const TechElement = (props) => {
    
    return (
        <>
            {/* TODO:REVIEW ALT TO ADD 'logo' */}
            <li className="list"><img className="logo tech-stack-logo" src= { props.logo } title={ props.logoname } alt={ props.logoname } /></li>
        </>

)};

export default TechElement;