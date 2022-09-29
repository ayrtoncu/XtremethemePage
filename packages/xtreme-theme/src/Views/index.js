import { connect, css,Global, loadable } from "frontity";

const Navbar = loadable(() => import("../Secctions/Navbar"));
const Tawkto = loadable(() => import("../Components/Tawkto"));
const Trips = loadable(() => import("./Trips"));
const Page = loadable(() => import("./Page.js"));
const Home = loadable(() => import("./Home.js"));
const MobileWrap = loadable(() => import("../Secctions/MobileWrap"));

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <header>
        <Navbar />
        <MobileWrap />
      </header>
      {data.isTrip && <Trips />}
      {data.isPage && <Page />}
      {data.isHome && <Home />}
      <Global styles={globalStyles} />
      <Tawkto />
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
  img {
    max-width: 100%;
    height: auto;
  }
  img,
  svg {
    vertical-align: middle;
  }
`;
