const Header = () => {
  return (
    <header className="my-4">
      <nav className="py-4 px-6 border-2 rounded-full">
        <ul className="flex md:gap-10 gap-4 md:justify-start justify-between">
          <a className="hover:text-bright-sun" href="#">
            Home
          </a>
          <a className="hover:text-bright-sun" href="#about">
            About
          </a>
          <a className="hover:text-bright-sun" href="#projects">
            Projects
          </a>
          <a className="hover:text-bright-sun" href="#contact">
            Contact
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
