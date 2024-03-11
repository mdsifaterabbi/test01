import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";
import PortfolioFooter from "../components/PortfolioComponents/PortfolioFooter";
import BlogHero from "../components/BlogHero";
import BlogBody from "../components/BlogPageComponents/BlogBody";

const Blog = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MyNav />
      <BlogHero />
      <BlogBody />
      <PortfolioFooter />
    </>
  );
};

export default Blog;
