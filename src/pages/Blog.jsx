import { Helmet } from "react-helmet-async";
const Blog = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>This is blog page</h1>
    </>
  );
};

export default Blog;
