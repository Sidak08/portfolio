import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  // const splineRef = useRef(null);
  // const textObjects = useRef([]);

  // function onLoad(spline) {
  //   splineRef.current = spline;

  //   // Find all text objects by name
  //   textObjects.current = [
  //     spline.findObjectByName("Text"),
  //     spline.findObjectByName("Text 2"),
  //     spline.findObjectByName("Text 3"),
  //     spline.findObjectByName("Text 4"),
  //     // Add more text objects as needed
  //   ];

  //   // Listen to cursor movement
  //   document.addEventListener("mousemove", onMouseMove);
  // }

  // function onMouseMove(event) {
  //   const { clientX, clientY } = event;

  //   console.log(clientX, clientY);

  //   // Update the lookAt for each text object
  //   textObjects.current.forEach((textObj) => {
  //     if (textObj) {
  //       textObj.lookAt(clientX, clientY, 0);
  //     }
  //   });
  // }

  // // Cleanup event listener when component unmounts
  // useEffect(() => {
  //   return () => {
  //     document.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  return (
    <>
      <Spline scene="https://prod.spline.design/lFYYbKxMsEi48ZNo/scene.splinecode" />
    </>
  );
}
