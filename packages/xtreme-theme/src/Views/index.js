import React from "react";
import { connect, Global, css, styled } from "frontity";
import Switch from "@frontity/components/switch";
import Script from "@frontity/components/script";
import Navbar from "../Secctions/Navbar";
import Post from "./post";
import Page from "./Page.js";
import Home from "./Home.js";
import theme from "../css/theme.css";
import styles from "../css/style.css";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Post when={data.isTrip} />
        <Page when={data.isPage} />
        <Home when={data.isHome} />
      </Switch>
      <Global styles={globalStyles} />
      <Global styles={css(theme)} />
      <Global styles={css(styles)} />
      <Script
        code={`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/5c8844a4101df77a8be24a10/default';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        `}
      />
    </>
  );
};

export default connect(Root);
const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    #root {
      position: absolute;
      width: 100%;
    }
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
