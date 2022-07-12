import React from "react";
import { connect, Global, css, styled } from "frontity";
import Switch from "@frontity/components/switch";
import Navbar from "../Secctions/Navbar";
import Post from "./post";
import Page from "./Page.js";
import Home from "./Home.js";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <header>
      <Navbar />
      </header>
      <Switch>
        <Post when={data.isPost} />
        <Page when={data.isPage} />
        <Home when={data.isHome} />
      </Switch>
      <Global styles={globalStyles} />
    </>
  );
};

export default connect(Root);
const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      #root{
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
