import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";

const Footer = () => {
    return (
        <div className="bg-base-300 popins">
            <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 container mx-auto px-4">
                {/* Logo & Description */}
                <div className="flex flex-col items-center sm:items-start">
                    <NavLink to="/" className="flex items-center">
                        <p className="text-4xl font-bold text-[#3683af]">Find</p>
                        <img className="h-9 w-20" src="/icon.png" alt="RoomMates" />
                    </NavLink>
                    <p className="mt-4 text-center sm:text-left max-w-xs">
                        Find RoomMates helps you meet like-minded people and share homes that truly feel like home.
                    </p>
                </div>

                {/* Browse Links */}
                <div className="flex flex-col items-center sm:items-start">
                    <h6 className="footer-title font-bold mb-2">Browse</h6>
                    <ul className="space-y-2 text-center sm:text-left">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-indigo-500" : ""}>Home</NavLink></li>
                        <li><NavLink to="/browse-listings" className={({ isActive }) => isActive ? "text-indigo-500" : ""}>Browse All Post</NavLink></li>
                        <li><NavLink to="/addtofind-roommate" className={({ isActive }) => isActive ? "text-indigo-500" : ""}>Add to Find Roommate</NavLink></li>
                        <li><NavLink to="/my-listing" className={({ isActive }) => isActive ? "text-indigo-500" : ""}>Your Post & Profile</NavLink></li>
                    </ul>
                </div>

                {/* Legal & Social */}
                <div className="flex flex-col items-center sm:items-start">
                    <h6 className="footer-title font-bold mb-2">Legal</h6>
                    <ul className="space-y-2 text-center sm:text-left">
                        <li><a className="link link-hover">Terms of Use</a></li>
                        <li><a className="link link-hover">Privacy Policy</a></li>
                        <li><a className="link link-hover">Cookie Policy</a></li>
                    </ul>

                    <h6 className="footer-title font-bold mt-4">Follow Us</h6>
                    <div className="flex gap-4 text-2xl mt-2 justify-center sm:justify-start">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col items-center sm:items-start">
                    <h6 className="footer-title font-bold mb-2">Newsletter</h6>
                    <label className="mb-2">Enter your email address</label>
                    <div className="flex flex-col sm:flex-row w-full gap-2">
                        <input
                            type="email"
                            placeholder="username@site.com"
                            className="input input-bordered w-full"
                        />
                        <button className="btn btn-primary w-full sm:w-auto">Subscribe</button>
                    </div>
                </div>
            </footer>
            <hr className="container mx-auto" />
            <p className="text-center py-6 text-md">
                © {new Date().getFullYear()} – All rights reserved by Find RoomMate Team
            </p>
        </div>
    );
};

export default Footer;
