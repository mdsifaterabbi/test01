import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";

const Portfolio = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MyNav />
      Portfolio
    </>
  );
};

export default Portfolio;
