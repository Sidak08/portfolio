import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  const splineRef = useRef();
  const rotationRef = useRef(null);

  function onLoad(splineApp) {
    splineRef.current = splineApp;

    // Try to find an object to rotate
    try {
      // Store a reference to the main scene
      const scene = splineApp.scene;
      if (scene) {
        rotationRef.current = scene;
        console.log("Scene loaded successfully");
      }
    } catch (err) {
      console.log("Error accessing scene:", err);
    }
  }

  useEffect(() => {
    let frameId;
    let angle = 0;

    const animate = () => {
      if (rotationRef.current) {
        try {
          // Apply a simple rotation to the entire scene
          angle += 0.01; // Adjust speed as needed

          // Apply a gentle rotation
          rotationRef.current.rotation.y = angle;

          // Add a subtle bobbing effect
          rotationRef.current.rotation.x = Math.sin(angle * 0.5) * 0.1;
        } catch (err) {
          console.log("Animation error:", err);
        }
      }

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Spline
        onLoad={onLoad}
        scene="https://prod.spline.design/lFYYbKxMsEi48ZNo/scene.splinecode"
      />
    </div>
  );
}
