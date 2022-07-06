import React from "react";
import { connect, Global, css, styled } from "frontity";
import Animation from "../css/animation.css";
import CustomCss from "../css/custom-css.css";
import FontAwesome from "../css/font-awesome.min.css";
import Grid from "../css/grid.css";
import JQuery from "../css/jquery-ui-1.8.24.custom.css";
import MagnificPopup from "../css/magnific-popup.css";
import OdometerTheme from "../css/odometer-theme-minimal.css";
import ParallazMin from "../css/parallax.min.css";
import Reset from "../css/reset.css";
import Style from "../css/style.css";
import Suprsized from "../css/supersized.css";
import ToolTipster from "../css/supersized.css";
import Wordpress from "../css/wordpress.css";
import Navbar from "../Secctions/Navbar";
const Root = () => {
  return (
    <>
      <Navbar />
      <Global
        styles={css(
          Animation,
          CustomCss,
          FontAwesome,
          Grid,
          JQuery,
          MagnificPopup,
          OdometerTheme,
          ParallazMin,
          Reset,
          Style,
          Suprsized,
          ToolTipster,
          Wordpress
        )}
      />
    </>
  );
};

export default connect(Root);
