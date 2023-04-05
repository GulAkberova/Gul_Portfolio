import React from "react";
import header from "../style/header.module.css";
import sun from "../assets/image/sun.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className={header.navbarDiv}>
        {/* <div className={header.header_sun_div}> */}
        <img src={sun} className={header.header_sun_div} />
        {/* </div> */}
        <h1>
          <Link to="/">Gülxanım Ekberova</Link>
        </h1>
        <ul>
          <li>
            <Link to="/about">Haqqımda</Link>
          </li>
          <li>
            <Link to="/quality">İxtisasım</Link>
          </li>
          <li>
            <Link to="/skills">Bacarıqlarım</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfoliom</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/g%C3%BClxan%C4%B1mekberova/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </li>

          <li>
            <a href="https://github.com/GulAkberova" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Header;
