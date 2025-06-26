// Contact.jsx
import React, { useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "You need to be logged in to contact us.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login Now",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }

    const contactData = {
      ...formData,
      email: user.email,
      name: user.displayName,
      date: new Date(),
    };

    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/contacts`, contactData);
      setLoading(false);

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We’ll get back to you soon.",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => navigate("/"));
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to send your message. Please try again.",
      });
    }
  };

  return (
    <section className="p-4">
      <Helmet>
        <title>
          Contact | Find HomeMates
        </title>
      </Helmet>
      <div className="poppins m-8 rounded-xl px-4 md:px-16 py-10 max-w-4xl mx-auto bg-base-300 text-base-content">
        <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
        <p className="text-center max-w-xl mx-auto mb-10 text-lg opacity-80">
          Have questions, feedback, or want to collaborate? We’d love to hear from you! Fill out the form below or use our contact details.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your full name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              required
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your email address"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 font-semibold">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject of your message"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message here..."
              className="textarea textarea-bordered w-full resize-none"
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full py-3 text-lg font-bold ${loading ? "btn-disabled" : ""}`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <section className="mt-16 text-center space-y-4 text-sm opacity-80">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@FindRoomMates.com" className="link">support@FindRoomMates.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890" className="link">+8801318181198</a>
          </p>
          <p>
            <strong>Address:</strong> 123 Roommate St, Dhaka, Bangladesh
          </p>
        </section>
      </div>
    </section>
  );
};

export default Contact;
