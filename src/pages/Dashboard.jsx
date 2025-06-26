import { Helmet } from 'react-helmet-async';
import { Outlet, NavLink } from 'react-router';

const Dashboard = () => {

  return (
    <div className="poppins drawer lg:drawer-open drawer-open-top">
      <Helmet>
        <title>
          Dashboard | Find RoomMate
        </title>
      </Helmet>
      <input type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        <label className="drawer-overlay"></label>
        <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">

          <li>
            <NavLink
              to="/dashboard/overview"
              className={({ isActive }) =>
                isActive ? 'text-indigo-500 font-bold' : ''
              }
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/all-post"
              className={({ isActive }) =>
                isActive ? 'text-indigo-500 font-bold' : ''
              }
            >
              All Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-listing"
              className={({ isActive }) =>
                isActive ? 'text-indigo-500 font-bold' : ''
              }
            >
              My Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addtofind-roommate"
              className={({ isActive }) =>
                isActive ? 'text-indigo-500 font-bold' : ''
              }
            >
              Add Post
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
