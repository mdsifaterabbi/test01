import { Helmet } from "react-helmet-async";

const About = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      About
    </>
  );
};

export default About;
