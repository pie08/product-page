import { useEffect, useState } from "react";

function RenderBreakpoint({ element1, element2, breakpointWidth }) {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  console.log(element1);

  useEffect(function () {
    function update() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return <>{viewportWidth > breakpointWidth ? element1 : element2}</>;
}

export default RenderBreakpoint;
