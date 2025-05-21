import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className='my-2 mb-4'>
      <div className="fontStyle max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg text-center">

        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>

        {user && (
          <div className="space-y-2">
            {/* Profile image or fallback */}
            <div className="h-20 w-20 rounded-full mx-auto bg-gray-300 flex items-center justify-center">
              {user.photoURL ? (
                <img
                  className="h-20 w-20 rounded-full"
                  src={user.photoURL}
                  alt="Profile"
                />
              ) : (
                <FaUserCircle className="text-6xl text-gray-600" />
              )}
            </div>

            <div className="text-lg font-semibold">{user.displayName || "No Name Set"}</div>
            <div className="text-sm opacity-70">
              {user.email || "Email not available"}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
