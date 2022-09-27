import { connect, loadable } from "frontity";
import React from "react";
// import Wrapper from "../Secctions/Wrapper";
const Wrapper = loadable(() => import('../Secctions/Wrapper'));

const Home = () => {
  return <Wrapper />;
};

export default connect(Home);
