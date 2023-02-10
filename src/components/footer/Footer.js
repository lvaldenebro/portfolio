import NavList from '../general/NavList';
import Credits from './Credits';

const Footer = () => {
    return (
        <footer className="container-fluid footer section">
            <div className="row d-flex justify-content-around">
                <div className="col">
                    <NavList />
                </div>
                <Credits />
            </div>

    </footer>
)};

export default Footer;