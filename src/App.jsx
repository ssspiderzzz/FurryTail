import React, { useState } from "react";

export default function App() {
  const [clipVar, setClipVar] = useState(80);
  const [marginVar, setMarginVar] = useState(40);

  const clipPathValue = `polygon(${clipVar}% 0, 100% 0, 100% 100%, ${clipVar}% 100%)`;
  const marginValue = `${marginVar}%`;

  const animate = () => {
    setClipVar(0);
    setMarginVar(0);
  };

  return (
    <div className="App">
      <button onClick={() => animate()}>FurryTail</button>
      <br />
      <img
        src="/assets/furrytail.png"
        alt="FurryTail"
        style={{ position: "absolute", width: "100%", right: marginValue, clipPath: clipPathValue, transition: "all 2s ease" }}
      />
    </div>
  );
}
