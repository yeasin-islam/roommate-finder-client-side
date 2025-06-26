import React, { useContext, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Newsletter = () => {
  const { user } = useContext(AuthContext);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      const result = await Swal.fire({
        title: "Please Login First!",
        text: "You need to be logged in to subscribe to the newsletter.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login Now",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        navigate("/login"); // redirect to login
      }
      return;
    }

    // Handle newsletter logic here (API call if needed)
    setSubmitted(true);
    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: "Thanks for subscribing to our newsletter.",
      timer: 2500,
      timerProgressBar: true,
      showConfirmButton: false,
    });

  };

  return (
    <section className="py-16 px-4 popins">
      <div className="max-w-4xl mx-auto rounded-3xl bg-base-300 backdrop-blur-md border border-base-200 px-6 sm:px-10 py-12 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Stay in the Loop!
        </h2>
        <p className="text-base-content text-sm sm:text-base">
          Subscribe to our newsletter and never miss exclusive roommate tips, hot property alerts, and special community offers.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="input input-bordered w-full sm:w-2/3"
            />
            <button type="submit" className="btn btn-primary flex items-center gap-2 w-full sm:w-auto">
              <FaPaperPlane /> Subscribe
            </button>
          </form>
        ) : (
          <p className="text-success text-lg font-semibold mt-4">Thanks for subscribing! 🎉</p>
        )}

        <p className="text-xs text-gray-600 mt-2">
          We’ll never spam you. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
