import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function SplineVie() {
  const splineRef = useRef();

  // const handleLoad = (splineApp) => {
  //   const scene = splineApp.scene;

  //   // Find the text object and camera in the scene
  //   const textObject = scene.getObjectByName("Text 4");
  //   const camera = scene.getObjectByName("PerspectiveCamera"); // Replace 'CameraName' with your actual camera name

  //   if (textObject && camera) {
  //     const animate = () => {
  //       textObject.lookAt(camera.position);
  //       requestAnimationFrame(animate);
  //     };

  //     animate();
  //   }
  // };

  return (
    <Spline
      scene="https://prod.spline.design/Iqam3spY2vG9EPfB/scene.splinecode"
      className="w-full"
    />
  );
}
