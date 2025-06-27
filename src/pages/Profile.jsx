import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";
import { FaUserCircle, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEdit = () => {
    // Navigate to edit page (make sure this route exists)
    navigate("/dashboard/edit-profile");
  };

  return (
    <section className="my-6">
      <Helmet>
        <title>Dashboard | FindRoomMates</title>
      </Helmet>

      <div className="poppins max-w-xl mx-auto bg-base-300 p-6 md:p-10 rounded-xl shadow-lg">
        <h3 className="text-xl md:text-3xl font-semibold mb-4 text-center">Logged-in User</h3>
        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-12">
          {/* Profile image or fallback */}
          <div className="flex-shrink-0 w-32 h-32 rounded-full ring ring-primary ring-offset-2 overflow-hidden bg-base-200 flex items-center justify-center">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUserCircle className="w-full h-full text-6xl text-gray-400" />
            )}
          </div>


          {/* User details */}
          <div className="flex-1 space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-bold">{user?.displayName || "No Name Set"}</h2>
            <p className="text-sm opacity-70">{user?.email || "No Email Available"}</p>
            <p className="text-sm opacity-70">Account Type: <span className="font-medium capitalize">User</span></p>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
