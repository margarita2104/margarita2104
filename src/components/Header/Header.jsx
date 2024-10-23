import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  return (
    <header className="my-4">
      <nav className="py-4 px-6 border-2 rounded-full">
        <ul className="flex md:gap-10 gap-4 md:justify-start justify-between">
          <Link
            className="hover:text-bright-sun"
            to="#"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="hover:text-bright-sun"
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
          <Link
            className="hover:text-bright-sun"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="hover:text-bright-sun"
            to="education"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Education
          </Link>
          <Link
            className="hover:text-bright-sun"
            to="contact"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
          >
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
