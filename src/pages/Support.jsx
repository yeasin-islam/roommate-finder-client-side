// Support.jsx
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";

const Support = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const supportData = {
      issueType,
      description,
      email: user?.email || "Anonymous",
      name: user?.displayName || "Guest User",
      date: new Date(),
    };

    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/support`, supportData);
      setLoading(false);
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Request Submitted!",
          text: "Our support team will get back to you shortly.",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          navigate("/");
        });
        setIssueType("");
        setDescription("");
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section className="m-4">
      <Helmet>
        <title>
          Support | Find HomeMates
        </title>
      </Helmet>
      <div className="poppins px-4 md:px-16 py-10 max-w-3xl mx-auto m-8 rounded-xl bg-base-300 text-base-content">
        <h1 className="text-4xl font-bold mb-8 text-center">Need Support?</h1>

        <p className="text-center max-w-xl mx-auto mb-12 text-lg opacity-80">
          We’re here to help! Select your issue type below and describe the problem. Our support team will get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="issueType" className="block mb-2 font-semibold">
              Issue Type <span className="text-red-500">*</span>
            </label>
            <select
              id="issueType"
              required
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select issue type
              </option>
              <option value="account">Account Issues</option>
              <option value="listing">Listing Problems</option>
              <option value="payment">Payment & Billing</option>
              <option value="technical">Technical Difficulties</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block mb-2 font-semibold">
              Describe the Issue <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              required
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please provide as much detail as possible..."
              className="textarea textarea-bordered w-full resize-none"
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full py-3 text-lg font-bold ${loading ? "btn-disabled" : ""}`}
          >
            {loading ? "Submitting..." : "Submit Support Request"}
          </button>
        </form>

        <section className="mt-16 text-center space-y-4 text-sm opacity-80">
          <p>Prefer to talk directly? Reach out to our support team:</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@FindRoomMates.com" className="link">
              support@FindRoomMates.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+8801318181198" className="link">
              +8801318181198
            </a>
          </p>
          <p>
            <strong>Live Chat:</strong> Available Mon–Fri, 9am to 6pm
          </p>
        </section>
      </div>
    </section>
  );
};

export default Support;
