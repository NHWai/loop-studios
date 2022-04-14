import React from "react";

function Navbar() {
  return (
    <nav>
      <h3>loopstudio</h3>
      <ul className="navList">
        <li>
          <p>About</p>
          <div className="small-line"></div>
        </li>
        <li>
          <p> Career</p>
          <div className="small-line"></div>
        </li>
        <li>
          <p> Events</p>
          <div className="small-line"></div>
        </li>
        <li>
          <p> Products</p>
          <div className="small-line"></div>
        </li>
        <li>
          <p> Support</p>
          <div className="small-line"></div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
