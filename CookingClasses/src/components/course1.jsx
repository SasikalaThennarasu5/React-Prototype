// Example: Course1.jsx
import React from "react";

export default function Course1() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">The Good Gut Program</h1>
      <p className="text-gray-600 mb-6">
        Learn how to maintain a healthy digestive system through nutrition,
        fermentation, and gut-friendly recipes.
      </p>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Topics Covered:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Understanding Gut Microbiome</li>
        <li>Fermented Foods and Probiotics</li>
        <li>7-Day Gut Cleanse Meal Plan</li>
        <li>Prebiotics vs. Probiotics</li>
        <li>Recipes for Gut Health</li>
      </ul>
    </div>
  );
}
