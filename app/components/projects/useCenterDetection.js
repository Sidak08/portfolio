'use client';
import { useState, useEffect, useRef } from 'react';

const useCenterDetection = (threshold = 0.6) => {
  const [isInCenter, setIsInCenter] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const { boundingClientRect, rootBounds } = entry;

        if (!rootBounds) return;

        // Calculate the center of the viewport
        const viewportCenter = rootBounds.height / 2;

        // Calculate the center of the element
        const elementCenter = boundingClientRect.top + boundingClientRect.height / 2;

        // Calculate distance from viewport center
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);

        // Calculate how much of the viewport height this distance represents
        const distanceRatio = distanceFromCenter / (rootBounds.height / 2);

        // Element is considered "in center" if it's within the threshold
        const inCenter = distanceRatio <= (1 - threshold);

        setIsInCenter(inCenter);
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return [elementRef, isInCenter];
};

export default useCenterDetection;
