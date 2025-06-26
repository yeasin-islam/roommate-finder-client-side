import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Profile from "../Profile";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [totalItems, setTotalItems] = useState(0);
  const [myItems, setMyItems] = useState(0);

  useEffect(() => {
    // Fetch total posts
    axios.get(`${import.meta.env.VITE_API_URL}/posts`)
      .then(res => {
        if (Array.isArray(res.data)) {
          setTotalItems(res.data.length);
        } else {
          setTotalItems(res.data.count || 0);
        }
      })
      .catch(err => console.error("Error loading all posts:", err));

    // Fetch my posts
    if (user?.email) {
      axios.get(`${import.meta.env.VITE_API_URL}/my-posts?email=${user.email}`)
        .then(res => {
          if (Array.isArray(res.data)) {
            setMyItems(res.data.length);
          } else {
            setMyItems(res.data.count || 0);
          }
        })
        .catch(err => console.error("Error loading user posts:", err));
    }
  }, [user]);

  return (
    <div className="poppins px-4 py-8 md:px-10">
      <Helmet>
        <title>Dashboard Overview | FindRoomMates</title>
      </Helmet>

      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
        Welcome to your Dashboard
      </h2>

      {/* Profile Section */}
      <Profile />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-primary text-white rounded-xl p-6 shadow hover:scale-[1.02] transition-transform">
          <h4 className="text-lg font-semibold mb-1">Total Listings</h4>
          <p className="text-4xl font-bold">{totalItems}</p>
        </div>

        <div className="bg-secondary text-white rounded-xl p-6 shadow hover:scale-[1.02] transition-transform">
          <h4 className="text-lg font-semibold mb-1">My Listings</h4>
          <p className="text-4xl font-bold">{myItems}</p>
        </div>

        <div className="bg-accent text-white rounded-xl p-6 shadow hover:scale-[1.02] transition-transform">
          <h4 className="text-lg font-semibold mb-1">Role</h4>
          <p className="text-2xl font-bold capitalize">{user?.role || "User"}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
