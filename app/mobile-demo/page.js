"use client";
import React, { useState } from "react";
import MobileProjectsImproved from "../components/projects/mobile_projects_improved";

export default function MobileDemoPage() {
  const [active, setActive] = useState("projects");

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0f1419]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-white text-xl font-bold text-center">
            Mobile Projects Portfolio
          </h1>
          <p className="text-gray-400 text-sm text-center mt-1">
            All 10 projects • Auto-expand on center • Smooth animations
          </p>
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="bg-[#0a1920] rounded-xl p-4 border border-gray-800 mb-6">
          <h2 className="text-white font-semibold mb-3 text-sm">
            How it works:
          </h2>
          <ul className="text-gray-300 text-xs space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                Cards are minimized by default showing only name and image
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400 mt-1">•</span>
              <span>
                When a card reaches the center of screen, it auto-expands
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-purple-400 mt-1">•</span>
              <span>Click on any card to manually toggle open/close</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-orange-400 mt-1">•</span>
              <span>
                Expanded view shows description, technologies, and visit links
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-pink-400 mt-1">•</span>
              <span>Smooth animations and scroll-based interactions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Projects Component */}
      <MobileProjectsImproved active={active} setActive={setActive} />

      {/* Footer */}
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-[#0a1920] rounded-xl p-4 border border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-2">
            Complete portfolio with improved center detection
          </p>
          <p className="text-gray-500 text-xs">
            Built with Next.js, Framer Motion & Tailwind CSS
          </p>
          <div className="flex justify-center items-center space-x-4 mt-3">
            <img src="/logos/nextJs.png" alt="Next.js" className="w-6 h-6" />
            <img src="/logos/react.png" alt="React" className="w-6 h-6" />
            <img src="/logos/tailwind.png" alt="Tailwind" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
