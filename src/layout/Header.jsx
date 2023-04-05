import React from "react";
import header from "../style/header.module.css";
import sun from "../assets/image/sun.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header className={header.navbarDivBig}>
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
            <li className={header.header_none}>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <i class="fa-solid fa-bars"></i>
              </Button>
            </li>
          </ul>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            className={header.header_none}
          >
            <MenuItem onClick={handleClose}>
              {" "}
              <Link to="/about">Haqqımda</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Link to="/quality">İxtisasım</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Link to="/skills">Bacarıqlarım</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <Link to="/portfolio">Portfoliom</Link>
            </MenuItem>
          </Menu>
        </section>
      </header>
    </>
  );
}

export default Header;
