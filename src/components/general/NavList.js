import NavElement from './NavElement';

const NavList = () => {
    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-height">
            <NavElement href='about-me' text='About me'/>
            <NavElement href='tech-stack' text='Tech Stack'/>
            <NavElement href='soft-skills' text='Soft skills'/>
            <NavElement href='projects' text='Projects'/>
            <NavElement href='contact' text='Contact'/>
        </ul>
)};

export default NavList;