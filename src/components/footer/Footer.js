import NavList from '../general/NavList';
import Credits from './Credits';

const Footer = () => {
    return (
        <footer className="container-fluid footer section text-center">
            <div className="row">
                <div className="col">
                    <NavList />
                </div>
                <Credits />
            </div>

    </footer>
)};

export default Footer;