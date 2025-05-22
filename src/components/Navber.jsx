import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";


const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
    const PLACES = ['left-end']

    return (
        <div className="fontStyle bg-base-300">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <NavLink to="/">
                        <div className="flex justify-start items-center">
                            <p className="text-4xl font-bold text-[#3683af]">Find</p>
                            <img className="h-9 w-20" src="/icon.png" alt="RoomMates" />
                        </div>
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-indigo-500" : ""
                        } to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-indigo-500" : ""
                        } to="/browse-listings">Browse All Post</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-indigo-500" : ""
                        } to="/addtofind-roommate">Add Your Post</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-indigo-500" : ""
                        } to="/my-listing">Your Post & Profile</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-end space-x-2">
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                    {user ? (
                        <>
                            <div className="dropdown dropdown-end flex justify-between gap-2">
                                <label tabIndex={0} id="my-tooltip-anchor" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" >
                                        <img src={user.photoURL || <FaUserCircle className="text-4xl text-gray-600" />} alt="User" />
                                    </div>
                                </label>
                                {PLACES.map(place => (
                                    <Tooltip
                                        key={place}
                                        anchorSelect="#my-tooltip-anchor"
                                        className="w-32 h-[6"
                                        content={user.displayName}
                                        place={place}
                                    />
                                ))}
                                <ul
                                    tabIndex={0}
                                    className="mt-12 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                >
                                    <li className="font-semibold">{user.displayName || "No Name"}</li>
                                    <li className="text-xs opacity-70 mb-3">{user.email || "No Email"}</li>

                                    <li className=" lg:hidden"><NavLink className={({ isActive }) =>
                                        isActive ? "text-indigo-500" : ""
                                    } to="/">Home</NavLink></li>
                                    <li className=" lg:hidden"><NavLink className={({ isActive }) =>
                                        isActive ? "text-indigo-500" : ""
                                    } to="/browse-listings">Browse All Post</NavLink></li>
                                    <li className=" lg:hidden"><NavLink className={({ isActive }) =>
                                        isActive ? "text-indigo-500" : ""
                                    } to="/addtofind-roommate">Add Your Post</NavLink></li>
                                    <li className=" lg:hidden"><NavLink className={({ isActive }) =>
                                        isActive ? "text-indigo-500" : ""
                                    } to="/my-listing">Your Post & Profile</NavLink></li>
                                    <li className="lg:hidden">
                                        <button onClick={logOut} className="btn text-red-500">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                                <button onClick={logOut} className="btn text-red-500 hidden lg:flex">
                                    Logout
                                </button>
                            </div>

                        </>
                    ) : (
                        <>
                            {/* Login/Register for all screens */}
                            <div className="space-x-2 hidden lg:flex">
                                <NavLink className={({ isActive }) => isActive ? "bg-indigo-500 btn" : "btn"} to="/login">Login</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "bg-indigo-500 btn" : "btn"} to="/singup">SingUp</NavLink>
                            </div>

                            {/* Dropdown only on mobile (visible if logged out) */}
                            <div className="lg:hidden dropdown dropdown-end flex justify-between gap-2">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="mt-12 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                >

                                    <li className=" lg:hidden"><NavLink className={({ isActive }) =>
                                        isActive ? "text-indigo-500" : ""
                                    } to="/">Home</NavLink></li>
                                    <li className=" lg:hidden"><NavLink className={({ isActive }) =>
                                        isActive ? "text-indigo-500" : ""
                                    } to="/browse-listings">Browse All Post</NavLink></li>
                                    <li className=" lg:hidden"><NavLink className={({ isActive }) =>
                                        isActive ? "text-indigo-500" : ""
                                    } to="/addtofind-roommate">Add Your Post</NavLink></li>
                                    <li className=" lg:hidden"><NavLink className={({ isActive }) =>
                                        isActive ? "text-indigo-500" : ""
                                    } to="/my-listing">Your Post & Profile</NavLink></li>
                                    <li className=" lg:hidden"><NavLink className={({ isActive }) =>
                                        isActive ? "bg-indigo-500 btn" : "btn"
                                    } to="/login">Login</NavLink></li>
                                    <li className=" lg:hidden mt-2"><NavLink className={({ isActive }) =>
                                        isActive ? "bg-indigo-500 btn" : "btn"
                                    } to="/singup">SingUp</NavLink></li>
                                </ul>

                            </div>

                        </>
                    )}

                </div>

            </div>
        </div>
    );
};

export default Navbar;
