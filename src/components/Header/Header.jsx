import { Link, animateScroll as scroll } from "react-scroll";

const OFFSET_VALUES = {
  home: -70,
  about: -200,
  projects: -100,
  education: -100,
  contact: -250
};

const NavLink = ({ to, offset, label }) => (
  <Link
    className="hover:text-bright-sun"
    to={to}
    spy={true}
    smooth={true}
    offset={offset}
    duration={500}
  >
    {label}
  </Link>
);

const Header = () => {
  return (
    <header className="my-4">
      <nav className="py-4 px-6 border-2 rounded-full">
        <ul className="flex md:gap-10 gap-4 md:justify-start justify-between">
          <NavLink to="#" offset={OFFSET_VALUES.home} label="Home" />
          <NavLink to="about" offset={OFFSET_VALUES.about} label="About" />
          <NavLink to="projects" offset={OFFSET_VALUES.projects} label="Projects" />
          <NavLink to="education" offset={OFFSET_VALUES.education} label="Education" />
          <NavLink to="contact" offset={OFFSET_VALUES.contact} label="Contact" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
