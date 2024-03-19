import { Link } from "react-router-dom";
import { useState } from "react";

import logoMobile from "../assets/shared/mobile/logo.svg";
import logoDesktop from "../assets/shared/desktop/logo.svg";
import hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import close from "../assets/shared/mobile/icon-close.svg";

export default function Navbar() {
  const [displayList, setDisplayList] = useState(false);

  let setDisplayListTrue = () => {
    setDisplayList(true);
  };
  let setDisplayListFalse = () => {
    setDisplayList(false);
  };

  let setListHeight = () => {
    let height: number | undefined;
    let navHeight = document.querySelector("nav")?.clientHeight;
    if (typeof navHeight == "number") {
      height = window.innerHeight - navHeight;
    }
    return height;
  };

  return (
    <nav>
      <div className="px-24 py-32 py-md-40 px-md-40 px-lg-80 d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
        <div className="logoRow d-flex justify-content-between align-items-center">
          <img
            src={window.innerWidth < 768 ? logoMobile : logoDesktop}
            alt="logo"
          />
          <img
            src={displayList ? close : hamburger}
            alt=""
            onClick={displayList ? setDisplayListFalse : setDisplayListTrue}
            className="d-md-none"
          />
        </div>
        <ul
          className="d-flex flex-column gap-32 navbar-ul d-md-none"
          style={{
            height: displayList ? setListHeight() : "0",
          }}
        >
          <li className="mt-40">
            <Link to="/" className="d-block" onClick={setDisplayListFalse}>
              <h4 className="fraunces text-center m-0">Home</h4>
            </Link>
          </li>
          <li>
            <Link to="/about" className="d-block" onClick={setDisplayListFalse}>
              <h4 className="fraunces text-center  m-0">About Us</h4>
            </Link>
          </li>
          <li>
            <Link to="/plan" className="d-block" onClick={setDisplayListFalse}>
              <h4 className="fraunces text-center  m-0">Create Your Plan</h4>
            </Link>
          </li>
        </ul>
        <ul className="d-none d-md-flex gap-30">
          <li>
            <Link to="/" className="barlow link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="barlow link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/plan" className="barlow link">
              Create Your Plan
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
