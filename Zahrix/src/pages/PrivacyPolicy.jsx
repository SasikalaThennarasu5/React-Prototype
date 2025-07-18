import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-10 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Privacy Policy – Zahrik Electromechanical Services
      </h1>
      <p className="text-base text-gray-600 mb-8">
        <span className="font-semibold">Effective Date:</span> 12/07/25
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Privacy Policy
      </h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        At ZAHRIK Electromechanical Services, we value your privacy and are committed to protecting your personal data.
        This Privacy Policy outlines our practices regarding the collection, use, and storage of your information.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Data Storage and Security
      </h2>

      <div className="text-lg text-gray-700 space-y-2">
        <p>
          At ZAHRIK Electromechanical Services, our commitment to protecting your personal data and ensuring the
          security of your information is paramount. We understand the importance of maintaining the trust and
          confidence of our customers, and we adhere to the highest standards of data protection and security.
        </p>

        <p>
          When you engage with us, whether through our website, phone, or in-person interactions, we collect various
          types of information, including your name, email address, phone number, and details about the services you
          request, such as CCTV installation, electrical installation, and BMS services.
        </p>

        <p>
          This information is crucial for providing and managing our services effectively, responding to your inquiries,
          and continually improving our customer experience to meet your evolving needs.
        </p>

        <p>
          To ensure the confidentiality, integrity, and availability of your data, we implement robust security measures,
          including advanced encryption protocols, secure data storage solutions, and strict access controls. Our team is
          trained to handle your information with care, and we limit access to your data to authorized personnel only,
          ensuring that your information is protected against unauthorized access, loss, or damage.
        </p>

        <p>
          Furthermore, you have certain rights regarding your personal data, including the right to access, correct, or
          delete your information, and we are dedicated to respecting these rights in accordance with applicable laws and
          regulations.
        </p>

        <p>
          If you have any questions or concerns about our privacy practices, would like to request access to your data,
          or wish to exercise any of your rights, please do not hesitate to contact us through the channels provided on
          our website. We are committed to transparency and will provide you with the necessary assistance and information.
        </p>

        <p>
          Additionally, we reserve the right to update this privacy policy periodically to reflect changes in our
          practices, technologies, or legal requirements, and we encourage you to review this page regularly to stay
          informed about how we protect your data and to ensure that you are aware of any changes that may affect you.
        </p>
      </div>

      <div className="mt-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-base font-semibold">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
