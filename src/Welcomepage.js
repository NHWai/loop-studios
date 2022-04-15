import { useState } from "react";
import Navbar from "./Navbar";

function Welcomepage() {
  const [click, setClicked] = useState(false);

  function isClicked() {
    setClicked((pre) => !pre);
  }

  return (
    <div className={`wlc-page ${click && "bgBlack"} `}>
      <Navbar onClick={isClicked} />
      <div className="hero-tag_contain">
        <div className={`header-tag ${click && "none"}`}>
          immersive experiences that delivers
        </div>
      </div>
    </div>
  );
}

export default Welcomepage;
