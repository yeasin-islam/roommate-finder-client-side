import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="poppins px-6 md:px-20 py-10 max-w-6xl mx-auto text-base-content">
      <Helmet>
        <title>Privacy Policy | Find Roommates</title>
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>Find Roommates</strong>, your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your information when you use our platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li><strong>Account Info:</strong> Name, email, profile photo, and login method (e.g., Google).</li>
        <li><strong>Listing Data:</strong> Roommate or room listings, location, budget, and preferences.</li>
        <li><strong>Usage Info:</strong> Device type, browser, IP address, and pages visited (used for analytics).</li>
        <li><strong>Messages:</strong> Communications between users when applicable.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Info</h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>To create and manage your account.</li>
        <li>To connect you with potential roommates or listings.</li>
        <li>To personalize your experience and recommend listings.</li>
        <li>To improve our platform based on user behavior and feedback.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Information Sharing</h2>
      <p className="mb-4">
        We do <strong>not sell</strong> your personal data. We may share limited information with:
      </p>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>Service providers (like hosting, analytics) under strict confidentiality agreements.</li>
        <li>Law enforcement if legally required for safety or fraud prevention.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies & Tracking</h2>
      <p className="mb-4">
        We use cookies to remember your preferences and understand site activity. You can control cookies through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Control & Rights</h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>You can edit or delete your account anytime from your profile.</li>
        <li>You can request access to your stored data by contacting us.</li>
        <li>You can opt-out of promotional emails (if we ever send any).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Data Security</h2>
      <p className="mb-4">
        We use modern security practices to protect your data — including encrypted communication and secure authentication. However, no platform is 100% secure, so use caution when sharing sensitive info.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Children's Privacy</h2>
      <p className="mb-4">
        Our service is not intended for users under 13. We do not knowingly collect personal data from children.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy as needed. When we do, we’ll update the “last updated” date and notify users if changes are significant.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p>
        For any privacy-related questions, please contact us at{" "}
        <a href="mailto:support@findroommates.com" className="text-primary underline">support@findroommates.com</a>.
      </p>

      <p className="text-sm mt-8 opacity-60">Last updated: June 26, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
