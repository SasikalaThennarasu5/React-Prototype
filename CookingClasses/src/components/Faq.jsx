import React, { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const faqData = [
  {
    question: "1. How do I find a recipe on your website?",
    answer:
      "You can use the search bar at the top of the homepage to find recipes by name, ingredient, or category.",
  },
  {
    question: "2. Can I save my favorite recipes?",
    answer:
      "Yes! Create an account and you’ll be able to save and access your favorite recipes anytime.",
  },
  {
    question: "3. How do I submit my own recipes?",
    answer:
      "Navigate to the 'Submit Recipe' page after logging in, fill in the required fields, and click submit.",
  },
  {
    question: "4. Are the recipes suitable for beginners?",
    answer:
      "Absolutely! We have a wide range of recipes suitable for all skill levels, including beginner-friendly options.",
  },
  {
    question:
      "5. How do I know if a recipe is vegan, gluten-free, or dairy-free?",
    answer:
      "Each recipe includes dietary tags and labels. You can also filter recipes based on dietary preferences.",
  },
  {
    question: "6. Can I print recipes from the website?",
    answer:
      "Yes, every recipe page has a print button that formats the recipe for printing.",
  },
  {
    question: "7. Do you offer video tutorials?",
    answer:
      "Yes, many of our recipes come with step-by-step video tutorials to guide you.",
  },
  {
    question: "8. Can I share recipes with my friends and family?",
    answer:
      "Of course! Each recipe page has share buttons for social media and email.",
  },
  {
    question: "9. How can I contact you if I have questions or suggestions?",
    answer:
      "You can reach us via the Contact Us page. We welcome feedback and suggestions!",
  },
  {
    question: "10. Is there a mobile app for this website?",
    answer:
      "Yes, we have a mobile app available on both Android and iOS platforms for easier access to recipes on-the-go.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const closeFAQ = () => {
    setActiveIndex(null);
  };

  return (
    <section className="w-full bg-[#FFF4E6] py-10 px-4 font-poppins">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">FAQ’S</h2>
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium hover:bg-[#ffe4c4] transition"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              {activeIndex === index && (
                <div className="relative px-4 pt-3 pb-4 text-gray-700 bg-[#fffaf2]">
                  {/* Close Button */}
                  <button
                    onClick={closeFAQ}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition"
                    aria-label="Close Answer"
                  >
                    <X size={16} />
                  </button>

                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
