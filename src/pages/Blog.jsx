import { Helmet } from "react-helmet-async";
import MyNav from "../components/MyNav";
const Blog = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MyNav />
      <h1>This is blog page</h1>
    </>
  );
};

export default Blog;
