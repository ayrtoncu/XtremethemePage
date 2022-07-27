import React from "react";
import { connect, css, styled } from "frontity";
export const Sectiondiv = styled.div`
  padding: 60px 0 30px 0;
  float: left;
  width: 100%;
  clear: both;
  position: relative;
`;

export const Container = styled.div`
  max-width: 80%;
  width: 100%;
  padding-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
`;
export const ContentText = styled.div`
  text-align: center;
  margin-top: 0;
  width: 90%;
  padding-bottom: 0;
  margin: auto;
  h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 5px;
    margin-top: 0;
    text-transform: uppercase;
    letter-spacing: 0;
  }
  @media (min-width: 1020px) {
    width: 960px;
  }
`;
