import { useState } from "react";

function Navbar({ onClick }) {
  const [open, setOpen] = useState(false);

  const styleNav = {
    height: "100%",
  };

  const styleNavList = {
    width: "100%",
    height: "50%",
    flexDirection: "column",
    justifyContent: "space-around",
    display: "block",
  };

  function isOpen() {
    setOpen((pre) => !pre);
    onClick();
  }

  return (
    <nav className={`${open && "open-nav"}`}>
      <h3>loopstudio</h3>
      <div onClick={isOpen} className="hamburger">
        {!open ? (
          <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
            </g>
          </svg>
        ) : (
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        )}
      </div>

      <ul className={`navList ${open && "open-navList "} `}>
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
