import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import SingleBlogDetails from "./components/BlogPageComponents/SingleBlogDetails";
import FBA from "./pages/FBA";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="/home" element={<Home title="Home" />} />
        <Route path="/service" element={<Service title="service" />} />
        <Route path="/portfolio" element={<Portfolio title="portfolio" />} />
        <Route path="/blog" element={<Blog title="blog" />} />
        <Route path="/about" element={<About title="about" />} />
        <Route path="/contact" element={<Contact title="contact" />} />
        <Route
          path="/blog/singleblogdetails/:slug"
          element={<SingleBlogDetails />}
        />
        <Route path="/service-FBA" element={<FBA />}></Route>
      </Routes>
    </>
  );
}

export default App;
