import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-gradient-to-br from-base-300 via-base-200 to-base-300 popins text-base-content">
      <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 container mx-auto px-4">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <NavLink to="/" className="flex items-center gap-2">
            <p className="text-4xl font-bold text-primary">Find</p>
            <img className="h-9 w-20" src="/icon.png" alt="RoomMates" />
          </NavLink>
          <p className="text-center sm:text-left max-w-xs leading-relaxed">
            Find RoomMates helps you meet like-minded people and share homes that truly feel like home.
          </p>
        </div>

        {/* Browse Links */}
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <h6 className="footer-title font-bold">Browse</h6>
          <ul className="space-y-2 text-center sm:text-left">
            <li><NavLink className={({ isActive }) => isActive ? "text-indigo-500" : ""} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "text-indigo-500" : ""} to="/browse-listings">Browse All Post</NavLink></li>
            {user && (
              <li>
                <details>
                  <summary className="cursor-pointer">Dashboard</summary>
                  <ul className="pl-4 space-y-1">
                    <li><NavLink className={({ isActive }) => isActive ? "text-indigo-500" : ""} to="/dashboard/overview">Overview</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "text-indigo-500" : ""} to="/dashboard/all-post">All Post</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "text-indigo-500" : ""} to="/dashboard/my-listing">Your Posts</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "text-indigo-500" : ""} to="/dashboard/addtofind-roommate">Add Your Post</NavLink></li>
                  </ul>
                </details>
              </li>
            )}
          </ul>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <h6 className="footer-title font-bold">Legal</h6>
          <ul className="space-y-2 text-center sm:text-left">
            <li><NavLink to="/terms" className={({ isActive }) => isActive ? "text-indigo-500" : ""}>Terms of Use</NavLink></li>
            <li><NavLink to="/privacy" className={({ isActive }) => isActive ? "text-indigo-500" : ""}>Privacy Policy</NavLink></li>
            <li><NavLink to="/cookies" className={({ isActive }) => isActive ? "text-indigo-500" : ""}>Cookie Policy</NavLink></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <h6 className="footer-title font-bold">Follow Us</h6>
          <div className="flex gap-5 text-2xl mt-2 justify-center sm:justify-start">
            <a href="https://www.facebook.com/yeasin.islam2018" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/yeasin-islam75/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://x.com/yeasin_islam75" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FaSquareXTwitter />
            </a>
            <a href="https://www.instagram.com/yeasin.islam2018" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
      <hr className="container mx-auto" />
      <p className="text-center py-6 text-sm">
        © {new Date().getFullYear()} – All rights reserved by Find RoomMate Team
      </p>
    </div>
  );
};

export default Footer;
