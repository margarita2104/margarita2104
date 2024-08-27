import HeroImg from "../../assets/hero-image.svg";

const Hero = () => {
  return (
    <section className="relative md:min-h-screen min-h-96 flex">
      <h1 className="md:text-6xl text-3xl font-bold font-montserrat md:mt-28 mt-14 md:w-2/3">
        HI, I&rsquo;M&nbsp;MARGARITA, SOFTWARE DEVELOPER
      </h1>
      <img
        className="absolute md:-top-24 -top-6 md:-right-20 -z-10 md:max-w-4xl"
        src={HeroImg}
        alt="Decorative element"
      />
    </section>
  );
};

export default Hero;
