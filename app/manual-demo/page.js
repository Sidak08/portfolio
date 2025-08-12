"use client";
import React, { useState, useEffect } from "react";
import MobileProjectsManual from "../components/projects/mobile_projects_manual";

export default function ManualDemoPage() {
  const [active, setActive] = useState("projects");
  const [currentExample, setCurrentExample] = useState("click");

  // Example implementations you can use
  const examples = {
    click: "Click to Toggle",
    scroll: "Scroll Based",
    timed: "Timed Sequence",
    keyboard: "Keyboard Control",
  };

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* Header */}
      <div className="bg-[#0f1419] border-b border-gray-800">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-white text-xl font-bold text-center">
            Manual Control Demo
          </h1>
          <p className="text-gray-400 text-sm text-center mt-1">
            Pure manual control • No auto-expansion • Your logic
          </p>
        </div>
      </div>

      {/* Control Examples */}
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="bg-[#0a1920] rounded-xl p-4 border border-gray-800 mb-6">
          <h2 className="text-white font-semibold mb-3 text-sm">
            How to implement manual control:
          </h2>

          {/* Example 1: Basic Click */}
          <div className="mb-4 p-3 bg-[#1a2634] rounded-lg">
            <h3 className="text-blue-400 font-medium text-xs mb-2">
              1. Basic Click Toggle (Default)
            </h3>
            <code className="text-gray-300 text-xs block">
              {`// In handleCardExpansion function:
setExpandedCard(cardId);`}
            </code>
          </div>

          {/* Example 2: Scroll Based */}
          <div className="mb-4 p-3 bg-[#1a2634] rounded-lg">
            <h3 className="text-green-400 font-medium text-xs mb-2">
              2. Scroll-Based Opening
            </h3>
            <code className="text-gray-300 text-xs block">
              {`useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const cardIndex = Math.floor(scrollY / 200);
    handleCardExpansion(cardIndex + 1);
  };
  window.addEventListener('scroll', handleScroll);
}, []);`}
            </code>
          </div>

          {/* Example 3: Intersection Observer */}
          <div className="mb-4 p-3 bg-[#1a2634] rounded-lg">
            <h3 className="text-purple-400 font-medium text-xs mb-2">
              3. Intersection Observer
            </h3>
            <code className="text-gray-300 text-xs block">
              {`useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cardId = parseInt(entry.target.dataset.cardId);
        handleCardExpansion(cardId);
      }
    });
  });
  // Observe cards...
}, []);`}
            </code>
          </div>

          {/* Example 4: Timed Sequence */}
          <div className="mb-4 p-3 bg-[#1a2634] rounded-lg">
            <h3 className="text-orange-400 font-medium text-xs mb-2">
              4. Timed Auto-Sequence
            </h3>
            <code className="text-gray-300 text-xs block">
              {`useEffect(() => {
  const timer = setInterval(() => {
    setCurrentCard(prev => (prev % 10) + 1);
  }, 3000);
  return () => clearInterval(timer);
}, []);`}
            </code>
          </div>

          {/* Example 5: Keyboard Control */}
          <div className="p-3 bg-[#1a2634] rounded-lg">
            <h3 className="text-pink-400 font-medium text-xs mb-2">
              5. Keyboard Navigation
            </h3>
            <code className="text-gray-300 text-xs block">
              {`useEffect(() => {
  const handleKeyPress = (e) => {
    if (e.key >= '1' && e.key <= '9') {
      handleCardExpansion(parseInt(e.key));
    }
  };
  window.addEventListener('keypress', handleKeyPress);
}, []);`}
            </code>
          </div>
        </div>

        {/* API Reference */}
        <div className="bg-[#0a1920] rounded-xl p-4 border border-gray-800 mb-6">
          <h2 className="text-white font-semibold mb-3 text-sm">
            API Reference:
          </h2>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-blue-400">handleCardExpansion(1-10)</span>
              <span className="text-gray-400">Open specific card</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-400">handleCardExpansion(null)</span>
              <span className="text-gray-400">Close all cards</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-400">expandedCard</span>
              <span className="text-gray-400">Currently open card ID</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-400">data-card-id</span>
              <span className="text-gray-400">Card element attribute</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Projects Component */}
      <MobileProjectsManual active={active} setActive={setActive} />

      {/* Footer */}
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-[#0a1920] rounded-xl p-4 border border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-2">
            🛠️ Ready for your custom implementation
          </p>
          <p className="text-gray-500 text-xs">
            Modify the handleCardExpansion function with your logic
          </p>
          <div className="flex justify-center items-center space-x-4 mt-3">
            <img src="/logos/nextJs.png" alt="Next.js" className="w-6 h-6" />
            <img src="/logos/react.png" alt="React" className="w-6 h-6" />
            <img src="/logos/tailwind.png" alt="Tailwind" className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="w-full min-h-[120vh]"></div>
    </div>
  );
}
