// pages/ForgotPassword.jsx
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.config"; // Adjust path as needed
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleReset = async (e) => {
        e.preventDefault();
        if (!email) {
            return Swal.fire("Oops!", "Please enter your email address.", "warning");
        }

        try {
            await sendPasswordResetEmail(auth, email);
            Swal.fire({
                icon: "success",
                title: "Password Reset Sent",
                text: "Check your email to reset your password.",
                timer: 2000,
                showConfirmButton: false,
            });
            setEmail("");
        } catch (error) {
            Swal.fire("Error", error.message, "error");
        }
    };

    return (
        <section className="popins px-4 py-20 flex justify-center items-center bg-base-200">
            <Helmet>
                <title>
                    Forgot Password | Find HomeMates
                </title>
            </Helmet>

            <form
                onSubmit={handleReset}
                className="bg-base-300 shadow-xl p-8 rounded-2xl w-full max-w-md space-y-6"
            >
                <h2 className="text-2xl font-bold text-center">Reset Your Password</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered w-full"
                    required
                />
                <button type="submit" className="btn btn-primary w-full">
                    Send Reset Link
                </button>
            </form>
        </section>
    );
};

export default ForgotPassword;
