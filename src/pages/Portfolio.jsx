import { Helmet } from "react-helmet-async";

const Portfolio = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      Portfolio
    </>
  );
};

export default Portfolio;
