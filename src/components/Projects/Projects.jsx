import ProjectsImg from "../../assets/projects-image.svg";
import PanelistaImg from '../../assets/Panelista.png';
import MotionImg from '../../assets/Motion.png';
import SmartComplianceImg from '../../assets/Smart-compliance.png';
import UpsurgeImg from '../../assets/Upsurge.png';
import BlanchardImg from '../../assets/Blanchard.png';
import PongImg from '../../assets/Pong.png';

const PROJECTS = [
  {
    id: 0,
    name: "Panelista",
    descr:
      "Panelista's aim is to provide access to a list of diverse speakers and panelists, so it is easier for event organizers to increase diverse representation on stage.",
    website: "https://panelista.propulsion-learn.ch",
    image: PanelistaImg,
  },
  {
    id: 1,
    name: "Motion",
    descr:
      "A social media application created as a project during a bootcamp at Constructor Academy.",
    website: "https://margarita2104.github.io/motion-frontend",
    image: MotionImg,
  },
  {
    id: 2,
    name: "SMART-compliance",
    descr:
      "A website designed to provide support to start-ups, small, and middle-size businesses in complying with regulatory standards and building an efficient business structure.",
    website: "https://smart-compliance.ch",
    image: SmartComplianceImg,
  },
  {
    id: 3,
    name: "Upsurge",
    descr:
      "A website dedicated to showcasing services that enhance living and working spaces, including construction, repairs, moving, and cleaning, with a focus on quality and customer satisfaction.",
    website: "https://upsurge.ch",
    image: UpsurgeImg,
  },
  {
    id: 4,
    name: "Blanchard",
    descr:
      "Blanchard Website is a course project developed for the Frontend Development course by Skillbox. This project showcases the use of HTML, CSS, and JavaScript to create a responsive and dynamic website.",
    website: "https://margarita2104.github.io/blanchard-skillbox/",
    image: BlanchardImg,
  },
  {
    id: 5,
    name: "Pong Game",
    descr:
      "Simple yet engaging game brings back the nostalgia of classic arcade fun. Developed using JavaScript and rendered on HTML5 Canvas.",
    website: "https://margarita2104.github.io/pong-game/",
    image: PongImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen">
      <h2 className="md:text-5xl text-3xl font-bold font-montserrat mb-10 text-center">
        MY PROJECTS
      </h2>
      <img
        className="absolute -z-10 -top-20 md:-right-20 -right-5"
        src={ProjectsImg}
        alt="Decorative element"
      />
      <div className="flex w-full flex-col gap-9 md:grid md:grid-cols-3">
        {PROJECTS.map((project) => (
          <div className="relative" key={project.id}>
            <a href={project.website} className="block relative">
              <img
                className="rounded-2xl"
                src={project.image}
                alt="Project image"
              />
              <div className="absolute w-full h-full py-7 px-7 rounded-2xl top-0 left-0 bg-black opacity-0 hover:opacity-90 cursor-pointer transition-opacity duration-300 flex items-center justify-center">
                <div>
                  <h3 className="text-2xl font-bold text-bright-sun mb-4">
                    {project.name}
                  </h3>
                  <p>{project.descr}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
