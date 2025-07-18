import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-10 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Terms of Use – ZAHRIK Electromechanical Services
      </h1>
      <p className="text-base text-gray-600 mb-6">
        <span className="font-semibold">Effective Date:</span> 12/07/25
      </p>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Welcome to Zahrik Electromechanical Services’ website. By accessing or using our website, you agree to be bound by the following Terms of Use. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Acceptance of Terms of Use
      </h2>

      <div className="text-lg text-gray-700 space-y-2">
        <p>
          By accessing and using the Zahrik Electromechanical Services website, you agree to follow our Terms of Use. Zahrik provides information related to services including CCTV installation, Building Management Systems (BMS), and electrical works. All content on this website—such as service details, logos, and images—is the property of Zahrik and may not be copied or used without permission.
        </p>
        <p>
          Users must not misuse the website by uploading harmful content, attempting unauthorized access, or disrupting website functionality. Zahrik is not responsible for third-party websites linked here. The information provided is for general purposes and may be updated without prior notice. Zahrik is not liable for any direct or indirect losses from using the website.
        </p>
        <p>
          By continuing to use our site, you accept these terms under the governing laws of [Your Country/State]. For questions, please contact Zahrik Electromechanical Services.
        </p>
        <p>
          Zahrik does its best to ensure the accuracy and reliability of the information on this website. However, we do not guarantee that all content is always complete, correct, or up to date. Zahrik shall not be held responsible for any direct, indirect, accidental, or consequential damages caused by using or being unable to use this website. This includes losses related to service details, pricing, or third-party website links included for reference.
        </p>
        <p>
          Visitors use the Zahrik website at their own risk. Zahrik reserves the right to change, update, or remove content without prior notice. By accessing, browsing, or using the Zahrik Electromechanical Services website, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use.
        </p>
        <p>
          These terms apply to all visitors, users, and others who access the website, whether for information, service inquiries, or any other purpose. If you do not agree with any part of these terms, you must not use this website.
        </p>
        <p>
          Zahrik reserves the right to update or change these terms at any time, and it is the user’s responsibility to review them periodically. Continued use of the website after changes are posted will mean that you accept and agree to the changes.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-start gap-4 mt-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-base font-semibold">
          Accept
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-md text-base font-semibold">
          Decline
        </button>
      </div>
    </div>
  );
};

export default TermsOfUse;
