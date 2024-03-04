import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";
import AboutHero from "../components/AboutHero";

const About = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MyNav />
      <AboutHero />
      About
    </>
  );
};

export default About;
