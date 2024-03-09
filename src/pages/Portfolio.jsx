import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";
import PortfolioHero from "../components/PortfolioComponents/PortfolioHero";
import PortfolioFooter from "../components/PortfolioComponents/PortfolioFooter";
import PortfolioTabContents from "../components/PortfolioComponents/PortfolioTabContents";

const Portfolio = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MyNav />
      <PortfolioHero />
      <PortfolioTabContents />
      <PortfolioFooter />
    </>
  );
};

export default Portfolio;
