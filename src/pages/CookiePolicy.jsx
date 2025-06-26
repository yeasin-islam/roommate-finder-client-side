import { Helmet } from "react-helmet-async";

const CookiePolicy = () => {
  return (
    <div className="poppins px-6 md:px-20 py-10 max-w-6xl mx-auto text-base-content">
      <Helmet>
        <title>Cookie Policy | Find Roommates</title>
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Cookie Policy</h1>

      <p className="mb-4">
        This Cookie Policy explains how <strong>Find Roommates</strong> uses cookies and similar technologies to recognize you when you visit our website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device when you visit a website. They help remember your preferences, enhance user experience, and improve website functionality.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Cookies</h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li><strong>Essential Cookies:</strong> Required for core features like authentication and navigation.</li>
        <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site (e.g., pages viewed, time spent).</li>
        <li><strong>Functional Cookies:</strong> Remember your preferences (like theme or language).</li>
        <li><strong>Third-Party Cookies:</strong> May be used by services like Google Analytics or Firebase for performance and analytics.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Managing Cookies</h2>
      <p className="mb-4">
        You can control and manage cookies through your browser settings. Most browsers allow you to:
      </p>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>View and delete cookies.</li>
        <li>Block third-party cookies.</li>
        <li>Clear all cookies when closing the browser.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
      <p className="mb-4">
        We may use services like Google Analytics or Firebase, which may also place cookies on your device. These providers follow their own privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Cookie Policy as needed. Any changes will be reflected here with a new “Last updated” date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p>
        For questions or concerns about this Cookie Policy, contact us at{" "}
        <a href="mailto:support@findroommates.com" className="text-primary underline">support@findroommates.com</a>.
      </p>

      <p className="text-sm mt-8 opacity-60">Last updated: June 26, 2025</p>
    </div>
  );
};

export default CookiePolicy;
