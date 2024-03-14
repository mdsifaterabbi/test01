import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";
import PortfolioFooter from "../components/PortfolioComponents/PortfolioFooter";
import BlogHero from "../components/BlogHero";
import BlogBody from "../components/BlogPageComponents/BlogBody";

const Blog = ({ title }) => {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <MyNav />
        <BlogHero />
        <BlogBody />
        <PortfolioFooter />
      </div>
    </>
  );
};

export default Blog;
