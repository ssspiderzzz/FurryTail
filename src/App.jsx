import React, { useState } from "react";

export default function App() {
  const [clipVar, setClipVar] = useState(80);
  const [marginVar, setMarginVar] = useState(55);
  const [scaleVar, setScaleVar] = useState(1.5);

  const clipPathValue = `polygon(${clipVar}% 0, 100% 0, 100% 100%, ${clipVar}% 100%)`;
  const marginValue = `${marginVar}%`;
  const scaleValue = `scale(${scaleVar})`;

  const animate = () => {
    setClipVar(0);
    setMarginVar(0);
    setScaleVar(1);
  };

  const animateToShort = () => {
    setClipVar(80);
    setMarginVar(55);
    setScaleVar(1.5);
  };

  return (
    <div className="App">
      <button onClick={() => animate()}>LongFurryTail</button>
      <button onClick={() => animateToShort()}>ShortFurryTail</button>
      <br />
      <img
        src="/assets/furrytail.png"
        alt="FurryTail"
        style={{ position: "absolute", width: "100%", right: marginValue, clipPath: clipPathValue, transition: "all 2s ease", transform: scaleValue }}
      />
    </div>
  );
}
