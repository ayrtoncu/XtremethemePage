import React from "react";
import { Global, connect, css, styled } from "frontity";
import RevSettings from "../revslider/public/assets/css/settings.css";
import FlexSlider from "../js/plugins/flexslider/flexslider.css";
import menubar from '../Icons/326672_menu_icon.svg'

const Navbar = () => {
  return (
    <>
      <HeaderWrapper className="header_style_wrapper">
        <div className="top_bar hasbg " css={top_bar}>
          <MobileIcon id="mobile_nav_icon">
            <img src={menubar} />
          </MobileIcon>
          <MenuWrapper id="menu_wrapper">
            {/*            <a
              id="custom_logo"
              className="logo_wrapper hidden"
              href="https://www.x-tremetourbulencia.com/wp-content/themes/xtreme_tourbulencia/img/logo-xtreme.png"
            >
              <img src="https://www.x-tremetourbulencia.com/wp-content/themes/xtreme_tourbulencia/img/logo-xtreme.png" alt="" width="69" height="33" />
            </a>*/}
            <LogoWrapper
              href="https://www.x-tremetourbulencia.com/wp-content/themes/xtreme_tourbulencia/img/logo-xtreme.png"
            >
              <img
                src="https://www.x-tremetourbulencia.com/wp-content/themes/xtreme_tourbulencia/img/logo-xtreme.png"
                alt=""
                width="69"
                height="33"
              />
            </LogoWrapper>
            <a href="tel:1800-2345-5678">
              <TelHeaderAction className="header_action">
                <i className="fa fa-phone"></i>1800-2345-5678{" "}
              </TelHeaderAction>
            </a>
            {/*<form
              role="search"
              method="get"
              name="searchform"
              id="searchform"
              action="#"
            >
              <div>
                <label htmlFor="s">To Search, type and hit enter</label>
                <input type="text" name="s" id="s" autoComplete="off" />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <div id="autocomplete"></div>
            </form>*/}
            <div
              id="nav_wrapper"
              css={css`
                float: right;
              `}
            >
              <div className="nav_wrapper_inner">
                <div
                  id="menu_border_wrapper"
                  css={css`
                    display: block;
                    float: right;
                  `}
                >
                  <div className="menu-main-menu-container">
                    <NavMenu id="main_menu" className="nav">
                      <li className="menu-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="menu-item menu-item-has-children arrow menu-item-6">
                        <a href="sample-page.html">
                          <span>Tours</span>
                        </a>
                        <ul
                          className="sub-menu"
                          css={css`
                            opacity: 1;
                            overflow: hidden;
                            height: auto;
                            display: none;
                          `}
                        >
                          <li className="menu-item">
                            <a href="tour-grid-fullwidth.html">
                              <span>Tour Grid Fullwidth</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="tour-grid-contain.html">
                              <span>Tour Grid Contain</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="tour-classic-fullwidth.html">
                              <span>Tour Classic Fullwidth</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="tour-classic-contain.html">
                              <span>Tour Classic Contain</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="tour-list-image.html">
                              <span>Tour List Image</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="tour-list.html">
                              <span>Tour List</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="east-europe.html">
                              <span>Single Tour</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="megamenu col4 menu-item menu-item-has-children arrow menu-item-8"
                        css={largeMenu}
                      >
                        <a href="#">
                          <span>Pages</span>
                        </a>
                        <ul
                          className="sub-menu"
                          css={css`
                            opacity: 1;
                            overflow: hidden;
                            height: auto;
                            display: none;
                          `}
                        >
                          <li className="hidden menu-item menu-item-has-children arrow">
                            <a href="#">
                              <span>Column One</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="about-us.html">
                                  <span>About Us</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="paris.html">
                                  <span>Destination</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="page-fullwidth.html">
                                  <span>Page Fullwidth</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="hidden menu-item menu-item-has-children arrow">
                            <a href="#">
                              <span>Column Two</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="page-right-sidebar.html">
                                  <span>Page Right Sidebar</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="page-left-sidebar.html">
                                  <span>Page Left Sidebar</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="hidden menu-item menu-item-has-children arrow">
                            <a href="#">
                              <span>Column Three</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="gallery-fullscreen.html">
                                  <span>Gallery Fullscreen</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="gallery-grid-fullwidth.html">
                                  <span>Gallery Grid Fullwidth</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="gallery-grid-contain.html">
                                  <span>Gallery Grid Contain</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="hidden menu-item menu-item-has-children arrow menu-item-9">
                            <a href="#">
                              <span>Column Four</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="contact-us.html">
                                  <span>Contact Header Image</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="contact-us-2.html">
                                  <span>Contact Map</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="contact-us-3.html">
                                  <span>Contact Fullscreen</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children arrow menu-item-7">
                        <a href="#">
                          <span>Blog</span>
                        </a>
                        <ul
                          className="sub-menu"
                          css={css`
                            opacity: 1;
                            overflow: hidden;
                            height: auto;
                            display: none;
                          `}
                        >
                          <li className="menu-item">
                            <a href="blog-fullwidth.html">
                              <span>Fullwidth</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="blog-right-sidebar.html">
                              <span>Right Sidebar</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="blog-left-sidebar.html">
                              <span>Left Sidebar</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="blog-masonry.html">
                              <span>Masonry</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="blog-masonry-fullwidth.html">
                              <span>Masonry Fullwidth</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="standard-blog-post-with-image.html">
                              <span>Single Post</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="megamenu col4 menu-item menu-item-has-children arrow menu-item-10"
                        css={largeMenu}
                      >
                        <a href="#">
                          <span>Shortcodess</span>
                        </a>
                        <ul
                          className="sub-menu"
                          css={css`
                            opacity: 1;
                            overflow: hidden;
                            height: auto;
                            display: none;
                          `}
                        >
                          <li className="hidden menu-item menu-item-has-children arrow">
                            <a href="#">
                              <span>Column One</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="accordion-toggles.html">
                                  <span>Accordion &#038; Toggles</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="alert-boxes.html">
                                  <span>Alert Boxes</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="animated-content.html">
                                  <span>Animated Content</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="buttons-social-icons.html">
                                  <span>Buttons &#038; Social Icons</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="hidden menu-item menu-item-has-children arrow">
                            <a href="#">
                              <span>Column Two</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="columns.html">
                                  <span>Columns</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="dividers.html">
                                  <span>Dividers</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="gallery.html">
                                  <span>Gallery</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="hidden menu-item menu-item-has-children arrow">
                            <a href="#">
                              <span>Column Four</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="pricing.html">
                                  <span>Pricing</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="promo-boxes.html">
                                  <span>Promo Boxes</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="tabs.html">
                                  <span>Tabs</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </NavMenu>
                  </div>
                </div>
              </div>
            </div>
          </MenuWrapper>
        </div>
        <Global styles={css(RevSettings, FlexSlider)} />
      </HeaderWrapper>
      <HeaderWrapper></HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  float: left;
  background: red;
`;
const TopBar = styled.div`
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  position: relative;
  z-index: 8;
  float: left;
  padding: 0;
  width: 100%;
`;
const MenuWrapper = styled.div`
  margin: auto;
  width: 960px;
  z-index: 99999;
  @media (min-width:768px) and (max-width:960px){
    width: 726px;
    text-align:left;
  }
  @media (max-width: 767px){
    width: 95%;
    text-align:left;
  }
`;

const LogoWrapper = styled.a`
  margin: 25px 0 15px 0;
  float: left;
  @media(max-width: 960px){
    display: inline-block;
    float: none;
    margin:11px 0 5px 20px!important;
    margin-top:5px !important;
  }
  img {
    max-width: none !important;
  }
`;
const TelHeaderAction = styled.div`
  color: #000;
  background: #fff;
  float: right;
  border-radius: 100px;
  font-family: "Raleway", "Helvetica Neue", Arial, Verdana, sans-serif;
  padding: 2px 20px 2px 20px;
  font-size: 13px;
  margin: 28px 0 0 20px;
  font-weight: bold;
  @media(max-width:960px){
    margin-top:15px;
  }
  i {
    margin-top: 5px;
  }
`;
const MobileIcon = styled.div`
  display: none;
  @media (max-width:960px){
    display: block;
    align-items: center;
    cursor:pointer;
    margin-left:20px;
    width:25px;
    float:left;
    transition:all 0.2s ease;
    margin-top:20px;
  }
`;
const NavMenu = styled.ul`
  margin-top: 30px!important;
  list-style: none;
  display: block;
  padding: 0;
  margin: 0;
  margin-bottom:0;
  float: right;
  @media (max-width: 770px){
    display: none;
  }
  li{
    display: inline-block;
    margin: 0 2px 0 0;
    padding: 0 0 0 0;
    background: rgba(256, 256, 256, 0);

    a {
      color:#fff !important;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 12px;
      display: inline-block;
      z-index: 2;
      position: relative;
      margin: 0;
      padding:0 10px 30px 10px;
      font-family: 'Raleway', 'Helvetica Neue', Arial,Verdana,sans-serif;
      text-transform: uppercase;
      text-decoration: none!important;
    }
    &:hover{
      ul{
        display: block;
      }
    }
    ul{
      list-style:none;
      position: absolute;
      padding: 0;
      width: 210px;
      margin: 0;
      margin-top: 0px!important;
      margin-left:0;
      z-index:99999;
      float:right;
      background:rgba(34, 34, 34, 1);
      li{
        clear: both;
        width:100%;
        padding: 0 !important;
        margin: 0;
        text-align: left !important;
        display: block;
        background-color: rgba(256, 256, 256, 0);
        a{
          letter-spacing:0px;
          font-weight:700;
          color: #cccccc !important;
          text-transform: none;
          font-size: 12px;
          width 170px;
          display: block;
          border-top: 0;
          border: 0;
          margin: 0;
          padding:7px 20px 7px 20px;
          border-bottom: 1px solid #444;
          background:transparent;
          height: auto;
          text-decoration: none!important;
        }
      }
    }
  }
`;
let largeMenu = css`
  ul {
    position: absolute;
    width: 960px !important;
    left: 0;
    right: 0;
    margin-left: auto !important;
    margin-right: auto !important;
    padding: 15px !important;
    box-sizing: border-box;
    li {
      width: 25% !important;
      border: 0;
      display: block !important;
      box-sizing: border-box;
      clear: none !important;
      float: left;
      padding: 0 !important;
      margin: 0;
      text-align: left;
      list-style: none;
      ul {
        position: relative;
        width: 100% !important;
        margin: 0;
        border: 0;
        box-shadow: 0 0 0;
        display: block !important;
        opacity: 1 !important;
        left: 0;
        z-index: 99999;
        li {
          width: 100% !important;
          border: 0 !important;
          list-style: none;
          clear: none !important;
        }
      }
    }
  }
`;
let top_bar = css`
  padding: 0;
  width: 100%;
  float: left;
  background-color:rgba(0, 0, 0, 0);
  border:0;
  position:relative;
  z-index: 8;
`;

export default connect(Navbar);
