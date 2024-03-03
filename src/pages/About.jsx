import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";

const About = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MyNav />
      About
    </>
  );
};

export default About;
