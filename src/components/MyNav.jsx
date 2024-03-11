import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <>
      <div className="xl:w-[80vw] xl:mx-auto">
        <div className="navbar bg-base-100 pt-[10px] pb-[20px]">
          <div className="navbar-start hidden lg:flex">
            <Link to="/home" className="btn btn-ghost text-xl">
              <img src="../Logo.png" alt="logo" className="w-[120px]"></img>
            </Link>
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a className="bg-[#40b0fd] text-white hover:bg-[#40b0fd] hover:text-white rounded-none">
                  Get a Proposal
                </a>
              </li>
            </ul>
          </div>
          {/* For extra small, small, medium devices */}
          <div className="lg:hidden w-[100vw] relative">
            <div className=" block lg:hidden absolute left-0">
              <a className="btn btn-ghost text-xl">
                <img
                  src="../Logo.png"
                  alt="logo"
                  className="w-[80px] sm:w-[90px] md:w-[100px]"
                ></img>
              </a>
            </div>
            <div className="block lg:hidden absolute right-[10px]">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute right-[0px]"
                >
                  <li>
                    <a>Service sm</a>
                  </li>
                  <li>
                    <a>Portfolio</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNav;
