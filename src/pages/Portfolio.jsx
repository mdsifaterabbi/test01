import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";
import PortfolioHero from "../components/PortfolioComponents/PortfolioHero";
import PortfolioFooter from "../components/PortfolioComponents/PortfolioFooter";
import PortfolioTabContents from "../components/PortfolioComponents/PortfolioTabContents";

const Portfolio = ({ title }) => {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <MyNav />
        <PortfolioHero />
        <PortfolioTabContents />
        <PortfolioFooter />
      </div>
    </>
  );
};

export default Portfolio;
