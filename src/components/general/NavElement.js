const NavElement = (props) => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={`#${props.href}`}><span className="highlight-container"><span className="highlight">{props.text}</span></span></a>
            </li>
        </>
)};

export default NavElement;