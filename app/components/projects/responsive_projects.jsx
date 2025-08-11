'use client';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopProjects from './desktop_projects';
import MobileProjects from './mobile_projects';

const ResponsiveProjects = ({ active, setActive }) => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <div className="w-full min-h-screen bg-[#0f1419] flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-8 h-8 bg-white rounded-full opacity-20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {isMobile ? (
        <MobileProjects active={active} setActive={setActive} />
      ) : (
        <DesktopProjects active={active} setActive={setActive} />
      )}
    </div>
  );
};

export default ResponsiveProjects;
