import PersonalLogo from './PersonalLogo';
import NavList from '../general/NavList';

const Header = () => {
    return (
        <header id="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <PersonalLogo />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavList />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;