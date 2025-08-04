import React from "react";

export default function Course2() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Food Look Good</h1>
      <p className="text-gray-600 mb-6">
        Discover how to make your food visually appealing through color,
        balance, and presentation techniques.
      </p>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Topics Covered:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Food Styling Basics</li>
        <li>Color Combinations</li>
        <li>Instagram-worthy Plating</li>
        <li>Props & Backgrounds</li>
        <li>Photography Tips</li>
      </ul>
    </div>
  );
}
