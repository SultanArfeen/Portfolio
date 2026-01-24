import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { getAnimationDuration } from "../../utils";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={getAnimationDuration()} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © {new Date().getFullYear()} Sultan Ul Arfeen. All rights reserved.
        </p>
      </div>
    </Fade>
  );
}
