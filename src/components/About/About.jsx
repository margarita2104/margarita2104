import AboutImg from "../../assets/about-image.svg";

const About = () => {
  return (
    <section id="about" className="relative md:min-h-screen min-h-96 mb-20 flex">
      <div className="md:w-1/2 w-none">
        <img
          className="absolute md:-top-48 -top-60 -left-80 -z-10 md:max-w-screen-md max-w-screen-sm"
          src={AboutImg}
          alt="Decorative element"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="md:text-5xl text-3xl  font-bold font-montserrat mb-10">
          ABOUT ME
        </h2>
        <p className="mb-3">
          I&rsquo;m a&nbsp;Zurich-based Software Developer passionate about
          creating visually appealing, user-friendly web experiences.
          My&nbsp;background in&nbsp;event management and translation has
          sharpened my&nbsp;communication and multitasking skills, which&nbsp;I
          now apply to&nbsp;coding.
        </p>
        <p className="mb-3">
          I&rsquo;m always eager to&nbsp;tackle new challenges, learn new
          technologies, and create solutions that make a&nbsp;difference.
          Whether it&rsquo;s debugging code or&nbsp;brainstorming creative
          ideas, I&nbsp;approach every task with enthusiasm and
          a&nbsp;commitment to&nbsp;excellence.
        </p>
        <p className="mb-3">
          Feel free to&nbsp;explore my&nbsp;work, and let&rsquo;s connect
          if&nbsp;you&rsquo;re looking for someone who brings creativity,
          dedication, and a&nbsp;diverse skill set to&nbsp;the table.
        </p>
      </div>
    </section>
  );
};

export default About;
