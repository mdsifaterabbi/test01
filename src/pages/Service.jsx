import { Helmet } from "react-helmet-async";

const Service = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      Service
    </>
  );
};

export default Service;
