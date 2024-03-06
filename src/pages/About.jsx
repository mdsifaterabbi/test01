import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";
import AboutHero from "../components/AboutHero";
import AboutSection_1 from "../components/AboutPageComponents/AboutSection_1";
import AboutSection_2 from "../components/AboutPageComponents/AboutSection_2";
import AboutSection_3 from "../components/AboutPageComponents/AboutSection_3";
import AboutSection_4 from "../components/AboutPageComponents/AboutSection_4";
import AboutSection_5 from "../components/AboutPageComponents/AboutSection_5";
import AboutSection_6 from "../components/AboutPageComponents/AboutSection_6";
import AboutSection_7 from "../components/AboutPageComponents/AboutSection_7";

const About = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MyNav />
      <AboutHero />
      <AboutSection_1 />
      <AboutSection_2 />
      <AboutSection_3 />
      <AboutSection_4 />
      <AboutSection_5 />
      <AboutSection_6 />
      <AboutSection_7 />
      <h1 className="mt-[200px]">This is about page</h1>
    </>
  );
};

export default About;
