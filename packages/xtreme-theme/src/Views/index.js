import React from "react";
import { connect, Global, css, styled } from "frontity";
import Wrapper from "../Secctions/Wrapper";
const Root = () => {
  return (
    <>
      <Wrapper />
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
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;