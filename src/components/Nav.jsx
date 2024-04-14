import React from "react";
import Logo from "../assets/images/logo.svg";

function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">

          <li><img src={Logo} alt="Apple" /></li>
          <li><a className="link-styled" href="#store">Store</a></li>
          <li><a className="link-styled" href="#store">Mac</a></li>
          <li><a className="link-styled" href="#store">iPad</a></li>
          <li><a className="link-styled" href="#store">iPhone</a></li>
          <li><a className="link-styled" href="#store">Watch</a></li>
          <li><a className="link-styled" href="#store">AirPods</a></li>
          <li><a className="link-styled" href="#store">TV & Home</a></li>
          <li><a className="link-styled" href="#store">Entertainment</a></li>
          <li><a className="link-styled" href="#store">Accessories</a></li>
          <li><a className="link-styled" href="#store">Support</a></li>
          <li><img  src={Logo} alt="Apple" /></li>
          <li><img src={Logo} alt="Apple" /></li>




          
         
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
