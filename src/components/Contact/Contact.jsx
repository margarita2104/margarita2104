import ContactImg from "../../assets/contact-image.svg";
import EmailImg from "../../assets/mail.svg";
import EmailImgHover from "../../assets/mail-hover.svg";
import GithubImg from "../../assets/github.svg";
import GithubImgHover from "../../assets/github-hover.svg";
import LinkedinImg from "../../assets/linkedin.svg";
import LinkedinImgHover from "../../assets/linkedin-hover.svg";
import { useState } from "react";

const Contacts = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden flex flex-col items-center gap-16"
    >
      <h2 className="text-5xl font-bold font-montserrat mb-10 text-center">
        LET&rsquo;S GET IN&nbsp;TOUCH
      </h2>
      <div className="flex w-2/4 justify-between" >  
        <div>
          <a
            href="mailto:margarita.p.ferreira@gmail.com"
            onMouseEnter={() => setHoveredIcon("email")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              className="max-w-14"
              src={hoveredIcon === "email" ? EmailImgHover : EmailImg}
              alt="Email"
            />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/margarita2104"
            onMouseEnter={() => setHoveredIcon("github")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              className="max-w-14"
              src={hoveredIcon === "github" ? GithubImgHover : GithubImg}
              alt="Github"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/margarita-ferreira/"
            onMouseEnter={() => setHoveredIcon("linkedin")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              className="max-w-14"
              src={hoveredIcon === "linkedin" ? LinkedinImgHover : LinkedinImg}
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>

      <img
        className="absolute -z-10 -bottom-60 -right-2 max-w-5xl"
        src={ContactImg}
        alt="Decorative element"
      />
    </section>
  );
};

export default Contacts;
