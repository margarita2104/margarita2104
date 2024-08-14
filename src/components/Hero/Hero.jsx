import HeroImg from "../../assets/hero-image.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex">
      <h1 className="text-6xl font-bold font-montserrat mt-28 w-2/3">
        HI, I&rsquo;M&nbsp;MARGARITA, FRONTEND DEVELOPER
      </h1>
      <img
        className="absolute -top-24 -right-20 -z-10 max-w-4xl"
        src={HeroImg}
        alt="Decorative element"
      />
    </section>
  );
};

export default Hero;
