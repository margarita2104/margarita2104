import EducationImg from "../../assets/education-image.svg";
import BtnOpen from "../../assets/btn-open.svg";
import BtnClose from "../../assets/btn-close.svg";
import { useRef, useState } from "react";

const EDUCATION = [
  {
    id: 0,
    name: "RUBY MONSTAS",
    course_title: "Ruby studying group",
    course_date: "November 2023 - Present time",
    website: "https://rubymonstas.ch",
    tech_learned: (
      <p className="mt-3" >
        <b className="font-semibold">Back-end:</b> Ruby  &bull; Ruby on Rails
      </p>
    ),
  },
  {
    id: 1,
    name: "CODE FIRST GIRLS",
    course_title: "Introduction to Python and Apps",
    course_date: "October - November 2024",
    website: "https://codefirstgirls.com",
    tech_learned: (
      <p className="mt-3" >
        <b className="font-semibold">Back-end:</b> Python &bull; APIs
      </p>
    ),
  },
  {
    id: 2,
    name: "CONSTRUCTOR ACADEMY",
    course_title: "Full-stack Bootcamp",
    course_date: "May - August 2024",
    website: "https://academy.constructor.org",
    tech_learned: (
      <>
        <p className="my-3" >
          <b className="font-semibold">Front-end: </b>
          JavaScript (ES5/ES6) &bull; HTML5 &bull; CSS3 &bull; React &bull;
          Redux &bull; DOM Manipulation &bull; React Forms &bull; React Router
          &bull; Frontend Authentication &bull; Hooks &bull; Higher Order
          Components (HOC) &bull; Styled Components
        </p>
        <p className="mb-3" >
          <b className="font-semibold">Back-end: </b>
          Python &bull; Django &bull; SQL &bull; Django REST Framework &bull;
          Backend Authentication &bull; SQLite &bull; PostgreSQL
        </p>
        <p>
          <b className="font-semibold">DevOps: </b>
          Docker &bull; Docker Compose &bull; DigitalOcean &bull; CI/CD &bull;
          Git &bull; GitLab
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "JAVASCRIPT.INFO",
    course_title: "JavaScript/DOM/Interfaces course",
    course_date: "March - April 2024",
    website: "https://javascript.info",
    tech_learned: (
      <p className="mt-3">
        <b className="font-semibold">Front-end: </b>
        JavaScript (ES5/ES6) &bull; DOM &bull; Web Interface Design
      </p>
    ),
  },
  {
    id: 4,
    name: "CODE FIRST GIRLS",
    course_title: "Introduction to JavaScript",
    course_date: "November 2023 - February 2024",
    website: "https://codefirstgirls.com",
    tech_learned: (
      <p className="mt-3">
        <b className="font-semibold">Front-end: </b>
        GitHub &bull; Document Object Model (DOM) &bull; JavaScript &bull; Git
        &bull; Front-End Development
      </p>
    ),
  },
  {
    id: 5,
    name: "CODE FIRST GIRLS",
    course_title: "Intro to Data MOOC Sprint",
    course_date: "November - December 2023",
    website: "https://codefirstgirls.com",
    tech_learned: <p className="mt-3">Databases &bull; SQL</p>,
  },
  {
    id: 6,
    name: "CODE FIRST GIRLS",
    course_title: "Introduction to Web Development",
    course_date: "May - July 2023",
    website: "https://codefirstgirls.com",
    tech_learned: (
      <p className="mt-3">
        <b className="font-semibold">Front-end: </b>
        HTML5 &bull; Git &bull; Cascading Style Sheets (CSS) &bull; Front-End
        Development
      </p>
    ),
  },
  {
    id: 7,
    name: "MOSCOW STATE UNIVERSITY",
    course_title:
      "Faculty of Philology, Department of Translation Theory and Practice",
    course_date: "September 2007 - May 2012",
    website: "https://msu.ru/en/",
  },
];

const Education = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="education" className="relative md:min-h-screen min-h-96 mb-20 flex">
      <div className="w-none md:w-1/2">
        <img
          className="absolute -z-10 md:max-w-2xl -left-20"
          src={EducationImg}
          alt="Decorative element"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="md:text-5xl text-3xl font-bold font-montserrat mb-10">EDUCATION</h2>
        <div>
          {EDUCATION.map((course, index) => (
            <div key={index}>
              <button
                onClick={() => handleToggle(index)}
                className={`flex items-center pr-9 border-2 rounded-full w-full md:w-4/5 justify-between mb-5 duration-300 
                ${
                  openIndex === index
                    ? "border-bright-sun text-bright-sun"
                    : "border-white text-white"
                } 
                hover:border-bright-sun hover:text-bright-sun`}
              >
                <h3
                  className={`font-semibold py-3 px-9 w-full text-start text-md transition-colors duration-300 
                  ${
                    openIndex === index
                      ? "text-bright-sun"
                      : "text-white hover:text-bright-sun"
                  }`}
                >
                  {course.name}
                </h3>
                <img
                  className="h-8"
                  src={openIndex === index ? BtnOpen : BtnClose}
                  alt="button"
                />
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: openIndex === index ? contentRefs.current[index]?.scrollHeight : 0,
                }}
                className={`overflow-hidden transition-max-height duration-500 ease-in-out`}
              >
                <div className="pb-6 px-8 w-3/4">
                  <h4 className="mb-3 font-semibold text-xl">{course.course_title}</h4>
                  <h4 className="mb-3"> {course.course_date}</h4>
                  <a
                    href={course.website}
                    className="mb-3 font-semibold hover:text-bright-sun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {course.website}
                  </a>
                  <div>{course.tech_learned}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
