import { connect, Global, css, loadable } from "frontity";
import Switch from "@frontity/components/switch";

// const Navbar = loadable(() => import("../Secctions/Navbar"));
const Tawkto = loadable(() => import('../Components/Tawkto'));
const Trips = loadable(() => import('./Trips'));
const Page = loadable(() => import('./Page.js'));
const Home = loadable(() => import('./Home.js'));
const MobileWrap = loadable(() => import('../Secctions/MobileWrap'));
import Navbar from "../Secctions/Navbar";
// import Trips from "./Trips";
// import Page from "./Page.js";
// import Home from "./Home.js";
// import MobileWrap from "../Secctions/MobileWrap";

const Root = ({ state}) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <header>
        <Navbar/>
        <MobileWrap/>
      </header>
      <Switch>
        <Trips when={data.isTrip} />
        <Page when={data.isPage} />
        <Home when={data.isHome} />
      </Switch>
      <Global styles={globalStyles} />
      <Tawkto/>
    </>
  );
};

export default connect(Root);
const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
  img{
    max-width:100%;
    height:auto;
  }
  img, svg{
    vertical-align: middle;
  }
`;
