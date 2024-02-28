import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="/home" element={<Home title="Home"/>} />
        <Route path="/service" element={<Service title="service" />} />
        <Route path="/portfolio" element={<Portfolio title="portfolio" />} />
        <Route path="/blog" element={<Blog title="blog" />} />
        <Route path="/about" element={<About title="about" />} />
      </Routes>
    </>
  );
}

export default App;
