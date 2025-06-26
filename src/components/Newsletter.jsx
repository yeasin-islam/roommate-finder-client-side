// Newsletter.jsx
import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="py-16 px-4 popins">
      <div className=" max-w-4xl mx-auto rounded-3xl bg-base-300 backdrop-blur-md border border-base-200 px-6 sm:px-10 py-12 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Stay in the Loop!
        </h2>
        <p className="text-base-content text-sm sm:text-base">
          Subscribe to our newsletter and never miss exclusive roommate tips, hot property alerts, and special community offers.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-2/3"
          />
          <button
            type="submit"
            className="btn btn-primary flex items-center gap-2 w-full sm:w-auto"
          >
            <FaPaperPlane /> Subscribe
          </button>
        </form>
        <p className="text-xs text-gray-600 mt-2">We’ll never spam you. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default Newsletter;
