import logo from '../../images/logo-yellow.png';

const PersonalLogo = () => {
    return (
        <a className="navbar-brand" href="/#">
            <img className="personal-logo" src={ logo } alt="Personal logo" />
        </a>
)};

export default PersonalLogo;