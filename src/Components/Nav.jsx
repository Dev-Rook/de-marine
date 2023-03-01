import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScrollUp from "../Utilities/useScrollUp";
import Styles from "../Styles/Component-Styles/Nav.module.scss";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
// import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import LogoDevIcon from "@mui/icons-material/LogoDev";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

// Material UI Accordion Imports Start
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Material UI Accordion Imports End

import Hamburger from "hamburger-react";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);
  const { scrollUp } = useScrollUp();
  const [color, setColor] = useState(true);

  const changeColor = () => {
    if (window.scrollY >= 500) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const doubleFunction = () => {
    showMenu();
    scrollUp();
    handleClick();
  };

  return (
    <nav className={`${Styles.Nav} ${color ? Styles.NavScroll : ""}`}>
      <span className={Styles.Span}>
        <Hamburger
          className={Styles.HamburgerMenu}
          onToggle={setMenu}
          direction="right"
          // color="rgb(15, 38, 61)"
          color="red"
          duration={0.5}
          size={35}
        />
      </span>

      {/* Mobile Menu Start  */}

      <div className={`${Styles.Mobile_Menu} ${menu ? Styles.ShowMenu : ""}`}>
        <div className={Styles.Content_Container}>
          <div className={Styles.Header}>
            <div className={Styles.Menu_Left_Side}>
              <div className={Styles.Logo_Container}>
                <img src={""} className={Styles.Logo} alt="" />
              </div>

              <h3 className={Styles.Brand}>D&E Marine</h3>
            </div>
          </div>
          <ul className={Styles.Mobile_Navlink_Container}>
            <Link to={"/"} onClick={doubleFunction} className={Styles.Menu_Navlink}>
              <li className={Styles.Menu_NavItem}>
                <HomeOutlinedIcon
                  sx={{ fontSize: 25 }}
                  className={Styles.Navlink_Icon}
                />
                <p>Home</p>
              </li>
            </Link>
            <Link to={"/services"} onClick={doubleFunction} className={Styles.Menu_Navlink}>
              <li className={Styles.Menu_NavItem}>
                <HomeOutlinedIcon
                  sx={{ fontSize: 25 }}
                  className={Styles.Navlink_Icon}
                />
                <p>Services</p>
              </li>
            </Link>
            <Link
              to={"/projects"}
              onClick={doubleFunction}
              className={Styles.Menu_Navlink}
            >
              <li className={Styles.Menu_NavItem}>
                <TerminalOutlinedIcon
                  sx={{ fontSize: 25 }}
                  className={Styles.Navlink_Icon}
                />
                <p>Projects</p>
              </li>
            </Link>
            <Link
              to={"/contact"}
              onClick={doubleFunction}
              className={Styles.Menu_Navlink}
            >
              <li className={Styles.Menu_NavItem}>
                <SendOutlinedIcon
                  sx={{ fontSize: 25 }}
                  className={Styles.Navlink_Icon}
                />
                <p>Contact</p>
              </li>
            </Link>
            <Link
              to={"DevLogs"}
              onClick={doubleFunction}
              className={Styles.Menu_Navlink}
            >
              <li className={Styles.Menu_NavItem}>
                <LogoDevIcon
                  sx={{ fontSize: 25 }}
                  className={Styles.Navlink_Icon}
                />
                <p>Dev Logs</p>
              </li>
            </Link>
            <li className={Styles.Menu_NavItem}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                className={Styles.Accordion}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  {/* <Typography
                      sx={{ width: "33%", flexShrink: 0, color: "#319795" }}
                    >
                      Discord -
                    </Typography> */}
                  <Typography
                    className={Styles.Accordion_Title}
                    sx={{ color: "#ff7a00" }}
                  >
                    Code Runners - &nbsp;
                    <a
                      className={Styles.Discord_Link}
                      target={"_blank"}
                      rel={"noreferrer"}
                      href="https://discord.gg/ce7mtCbgmG"
                    >
                      <img src={""} alt="" className={Styles.Discord_Icon} />
                    </a>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={Styles.Code_Runners_Description}>
                    Code Runners is a server that mainly focusses on Web
                    Development. However there are categories for other forms of
                    coding/programing.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </li>
          </ul>

          <div className={Styles.Menu_Separater}></div>

          {/* Weblink Container Start */}
          <ul className={Styles.Weblink_Container}>
            <h3 className={Styles.Title}>On The Web -</h3>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              onClick={showMenu}
              href="https://www.linkedin.com/in/dev-rook/"
              className={Styles.Weblink}
            >
              <li className={Styles.Weblink_Item}>
                <LinkedInIcon
                  sx={{ fontSize: 25 }}
                  className={Styles.Weblink_Icon}
                />
                Daniel Brown
              </li>
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              onClick={showMenu}
              href="https://github.com/Dev-Rook"
              className={Styles.Weblink}
            >
              <li className={Styles.Weblink_Item}>
                <GitHubIcon
                  sx={{ fontSize: 25 }}
                  className={Styles.Weblink_Icon}
                />
                Dev-Rook
              </li>
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              onClick={showMenu}
              href="https://twitter.com/Dev_Rook"
              className={Styles.Weblink}
            >
              <li className={Styles.Weblink_Item}>
                <TwitterIcon
                  sx={{ fontSize: 25 }}
                  className={Styles.Weblink_Icon}
                />
                Dev_Rook
              </li>
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              onClick={showMenu}
              href="https://rxresu.me/dev.rook121/developer-resume"
              className={Styles.Weblink}
            >
              <li className={Styles.Weblink_Item}>
                <InsertLinkIcon
                  sx={{ fontSize: 25 }}
                  className={Styles.Weblink_Icon}
                />
                Developer Resume
              </li>
            </a>
          </ul>
          {/* Weblink Container End */}
        </div>
      </div>
      {/* Mobile Menu End */}
    </nav>
  );
};

export default Nav;
