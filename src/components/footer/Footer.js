import NavList from '../general/NavList';
import Arrow from './Arrow';
import Credits from './Credits';

const Footer = () => {
    return (
        <footer className="container-fluid footer section text-center">
            <Arrow />
            <div className="row">
                <div className="col">
                    <NavList />
                </div>

                <Credits />
            </div>

    </footer>
)};

export default Footer;