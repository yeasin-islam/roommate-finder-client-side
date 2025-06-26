import { FaShieldAlt, FaRegSmile, FaClock, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Choose Us?
        </h2>
        <p className="max-w-2xl mx-auto text-base text-gray-600 mb-12">
          We're more than just a listing site. We're a trusted community built to connect real people with real places.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Trusted Profiles */}
          <div className="bg-base-300 p-6 rounded-2xl shadow hover:shadow-md transition">
            <FaShieldAlt className="text-4xl text-secondary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Verified Listings</h4>
            <p className="text-sm text-gray-500">
              Each room and roommate profile is checked to ensure authenticity.
            </p>
          </div>

          {/* Easy to Use */}
          <div className="bg-base-300 p-6 rounded-2xl shadow hover:shadow-md transition">
            <FaRegSmile className="text-4xl text-secondary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Super Easy to Use</h4>
            <p className="text-sm text-gray-500">
              Post your needs or explore listings — no hassle, no confusion.
            </p>
          </div>

          {/* Fast Match */}
          <div className="bg-base-300 p-6 rounded-2xl shadow hover:shadow-md transition">
            <FaClock className="text-4xl text-secondary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Quick Matching</h4>
            <p className="text-sm text-gray-500">
              Find potential roommates within hours, not days.
            </p>
          </div>

          {/* Community Support */}
          <div className="bg-base-300 p-6 rounded-2xl shadow hover:shadow-md transition">
            <FaUsers className="text-4xl text-secondary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Supportive Community</h4>
            <p className="text-sm text-gray-500">
              Get helpful responses from real users and report anything shady.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
