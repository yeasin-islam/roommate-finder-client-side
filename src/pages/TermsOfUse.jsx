import { Helmet } from "react-helmet-async";

const TermsOfUse = () => {
  return (
    <div className="poppins px-6 md:px-20 py-10 max-w-6xl mx-auto text-base-content">
      <Helmet>
        <title>Terms of Use | Find Roommates</title>
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">Terms of Use</h1>

      <p className="mb-4">
        Welcome to <strong>Find Roommates</strong>. By accessing or using our platform, you agree to the following Terms of Use. Please read them carefully before continuing.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using our website, you confirm that you are at least 18 years old and legally capable of entering into agreements. If you disagree with any part of these terms, please do not use the site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. User Responsibilities</h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>Ensure the accuracy of any information you provide in listings or messages.</li>
        <li>Respect the privacy of other users and communicate respectfully.</li>
        <li>Do not post inappropriate, misleading, or illegal content.</li>
        <li>Do not impersonate others or create fake accounts.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Account & Security</h2>
      <p className="mb-4">
        You are responsible for keeping your account secure. If you suspect unauthorized access, you must notify us immediately. We reserve the right to suspend accounts involved in suspicious activity.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Content Ownership</h2>
      <p className="mb-4">
        You retain rights to the content you post, but by submitting content on our platform, you grant us a non-exclusive, royalty-free license to use, display, and promote your content for platform-related purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Platform Use & Restrictions</h2>
      <ul className="list-disc ml-6 space-y-2 mb-4">
        <li>Do not use the site for unlawful purposes or harassment.</li>
        <li>Do not upload malware, spam, or attempt to hack or disrupt the platform.</li>
        <li>Do not collect or store data from other users without permission.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your account at any time if you violate these terms or engage in harmful behavior on the platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Disclaimer</h2>
      <p className="mb-4">
        We do not guarantee that all listings or users are verified. Always communicate responsibly and meet safely. We are not responsible for user actions or third-party links.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms at any time. Continued use of the platform after changes means you accept the updated terms. Check this page regularly for updates.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <a href="mailto:support@findroommates.com" className="text-primary underline">support@findroommates.com</a>.
      </p>
    </div>
  );
};

export default TermsOfUse;
