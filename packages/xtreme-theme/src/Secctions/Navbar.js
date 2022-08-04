import React from "react";
import { Global, connect, css, styled } from "frontity";
import Link from "@frontity/components/link";
import menubar from "../Icons/326672_menu_icon.svg";
import logoblanco from "../assets/imgs/logos/Logo Blanco.png";
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
            <Link
              link="/"
              css={logoWrapper}
              href="https://www.x-tremetourbulencia.com/wp-content/themes/xtreme_tourbulencia/img/logo-xtreme.png"
            >
              <img src={logoblanco} alt="" width="69" height="33" />
            </Link>
            {/* <Link href="tel:+51 984610644">
              <TelHeaderAction className="header_action">
                <i className="fa fa-phone"></i>+51 984610644{" "}
              </TelHeaderAction>
            </Link> */}
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
                      {/* <li className="menu-item">
                        <Link link="/">Home</Link>
                      </li> */}
                      <li className="menu-item menu-item-has-children arrow menu-item-6">
                        <a href="#">
                          <span>Inca Trail</span>
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
                            <Link link="/short-inca-trail-machu-picchu/">
                              <span>Short Inca Trail 2 Days Trek</span>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link link="/inca-trail-trek-machu-picchu-4days/">
                              <span>
                                Inca Trail To MachuPicchu 4 Days Classic
                              </span>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link link="/inca-trail-machu-picchu-hike-private-2days/">
                              <span>Luxury Inca Trail 2 Days</span>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link link="/luxury-inca-trail-machu-picchu-4days/">
                              <span>Luxury Inca Trail 4 Days</span>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link link="/salkantay-trekking-inca-trail-hike-machu-picchu-6day/">
                              <span>Salkantay Trek - Inca Trail 6 Days</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="megamenu col4 menu-item menu-item-has-children arrow menu-item-8"
                        css={largeMenu}
                      >
                        <a>
                          <span>Alternative Treks</span>
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
                              <span>Salkantay Trek</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <Link link="/salkantay-trek-machu-picchu-hike-4days/">
                                  <span>Salkantay Trek MachuPicchu 4 Days</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/salkantay-trek-hike-machu-picchu-5days/">
                                  <span>Salkantay Trek MachuPichu 5 Days</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/salkantay-trekking-inca-trail-hike-machu-picchu-6day/">
                                  <span>
                                    Salkantay Trek - Inca Trail 6 Days{" "}
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="hidden menu-item menu-item-has-children arrow">
                            <a href="#">
                              <span>Lares Trek</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <Link link="/lares-trek-machu-picchu-yanacocha-4days/">
                                  <span>Lares Trek MachuPicchu 4 Days</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/lares-trek-inca-trail-machu-picchu-4days/">
                                  <span>
                                    Lares Trek - Inca Trail MachuPicchu 4 Days
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="hidden menu-item menu-item-has-children arrow">
                            <a href="#">
                              <span>Choquequirao Trek</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <Link link="/hoquequirao-trek-hike-4days/">
                                  <span>
                                    Choquequirao Trek - Huanicapa 4 Days
                                  </span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/choquequirao-trek-6days/">
                                  <span>
                                    Choquequirao to MachuPicchu 6 Days
                                  </span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/choquequirao-trek-machu-picchu-hike-8days/">
                                  <span>
                                    Choquequirao Trek MachuPicchu hike 8 Days
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="hidden menu-item menu-item-has-children arrow menu-item-9">
                            <a href="#">
                              <span>Huchuy Qosqo Trek</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <Link link="/huchuy-qosqo-machu-picchu-2days/">
                                  <span>
                                    Huchuy Qosqo to MachuPicchu 2 Days
                                  </span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/huchuy-qosqo-trek-and-sacred-valley-2days/">
                                  <span>
                                    Huchuy Qosqo Trek - Sacred Valley 2 Days
                                  </span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/huchuy-qosqo-sacred-valley-with-machupicchu-03days/">
                                  <span>
                                    Huchuy Qosqo, Sacred Valley with MachuPicchu
                                    3 Days
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="">
                              <span>Ausangate Trek</span>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <Link link="/ausangate-trek-sigrenacocha-4days/">
                                  <span>Ausangate Trek 4 Days</span>
                                </Link>
                              </li>
                              <li>
                                <Link link="/ausangate-trek-hike-5days/">
                                  <span>Ausangate Trek 5 Days</span>
                                </Link>
                              </li>
                              <li>
                                <Link link="/ausangate-trek-with-rainbow-mountain-5days/">
                                  <span>
                                    Ausangate Trek With Rainbow Mountain 5 Days
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <span>Dayli Tours</span>
                        </a>
                        <ul
                          css={css`
                            opacity: 1;
                            overflow: hidden;
                            height: auto;
                            display: none;
                          `}
                        >
                          <li>
                            <Link link="/short-inca-trail-machu-picchu/">
                              <span>Humantay lake</span>
                            </Link>
                          </li>
                          <li>
                            <Link link="/inca-trail-trek-machu-picchu-4days/">
                              <span>The Rainbow Mountain</span>
                            </Link>
                          </li>
                          <li>
                            <Link link="/inca-trail-machu-picchu-hike-private-2days/">
                              <span>Sacred Valley</span>
                            </Link>
                          </li>
                          <li>
                            <Link link="/luxury-inca-trail-machu-picchu-4days/">
                              <span>Queswachaka Inca Bridge</span>
                            </Link>
                          </li>
                          <li>
                            <Link link="/salkantay-trekking-inca-trail-hike-machu-picchu-6day/">
                              <span>Waqrapukara</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="">
                          <span>Vacation Packages</span>
                        </a>
                        <ul
                          css={css`
                            opacity: 1;
                            overflow: hidden;
                            height: auto;
                            display: none;
                          `}
                        >
                          <li>
                            <a href="">
                              <span>Cusco Traditional 6 Days</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-right-sidebar.html">
                              <span>Cusco Adventure 5 Days</span>
                            </a>
                          </li>
                          <li>
                            <Link link="/cusco-puno-8-days/">
                              <span>Cusco Puno Traditional 8 Days</span>
                            </Link>
                          </li>
                          <li>
                            <a href="blog-masonry.html">
                              <span>Arequipa - Puno - Cusco 9 Days</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-fullwidth.html">
                              <span>Peru Complete 13 Days</span>
                            </a>
                          </li>
                          <li>
                            <a href="standard-blog-post-with-image.html">
                              <span>Arequipa Colca Canyon</span>
                            </a>
                          </li>
                          <li>
                            <a href="standard-blog-post-with-image.html">
                              <span>Puno Titicaca Lake</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li css={largeMenu}>
                        <a href="">
                          <span>Manu</span>
                        </a>
                        <ul
                          css={css`
                            opacity: 1;
                            overflow: hidden;
                            height: auto;
                            display: none;
                          `}
                        >
                          <li>
                            <a href="#">
                              <span>Manu Zone Reserved</span>
                            </a>
                            <ul>
                              <li>
                                <Link link="/manu-zone-reserve-natural-8d-7n/">
                                  <span>
                                    Manu Zone Reserved Natural Paradise 8 Days
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="">
                              <span>Manu Cultural Zone</span>
                            </a>
                            <ul>
                              <li>
                                <Link link="/tour-manu-amazon-cultural-zone-4d-3n/">
                                  <span>Tour Manu Cultural Zone 4 Days</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="">
                              <span>Tours in Tambopata</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a>
                                  <span>Tambopata</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li css={largeMenu}>
                        <a href="">
                          <span>About Us</span>
                        </a>
                        <ul
                          css={css`
                            opacity: 1;
                            overflow: hidden;
                            height: auto;
                            display: none;
                          `}
                        >
                          <li className="hidden menu-item menu-item-has-children arrow">
                            <a href="">
                              <span>About Us</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <Link link="/about-us/our-offices/">
                                  <span>Our Offices</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/about-us/why-xtreme-tourbulencia/">
                                  <span>Why Xtreme Tourbulencia?</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/about-us/yellow-team/">
                                  <span>Yellow Team</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/about-us/responsible-tourism/">
                                  <span>Responsible Tourism</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="hidden menu-item menu-item-has-children arrow">
                            <a href="">
                              <span>Book Information</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <Link link="/book-information/book-your-trip/">
                                  <span>Book Your</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/terms-and-conditions/">
                                  <span>Term and Conditions</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/personal-data-protection-policy/">
                                  <span>Personal Data Proteccion Policy</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/book-information/how-to-make-booking/">
                                  <span>How to Make Booking</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/book-information/rent-optional/">
                                  <span>Optional and Rent</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link link="/book-information/hiking-tours-calendars/">
                                  <span>Hiking Tours Calendars</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="hidden menu-item menu-item-has-children arrow">
                            <a href="">
                              <span>Blog</span>
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="">
                                  <span>Inca Trail Availability 2021</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="">
                                  <span>Our Videos</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <Link link="/blog">
                                  <span>Our Blog</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <a href="">
                                  <span>Payments</span>
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
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  float: left;
  position: relative;
`;
const MenuWrapper = styled.div`
  margin: auto;
  width: 1020px;
  z-index: 99999;
  @media (min-width: 768px) and (max-width: 960px) {
    width: 726px;
    text-align: left;
  }
  @media (max-width: 767px) {
    width: 95%;
    text-align: left;
  }
`;

const logoWrapper = css`
  margin: 16px 0 15px 0;
  float: left;
  @media (max-width: 960px) {
    display: inline-block;
    float: none;
    margin: 11px 0 5px 20px !important;
    margin-top: 5px !important;
  }
  @media (max-width: 425px) {
    img {
      width: 150px !important;
    }
  }
  img {
    max-width: none !important;
    height: auto;
    width: 150px;
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
  @media (max-width: 960px) {
    margin-top: 15px;
  }
  i {
    margin-top: 5px;
  }
`;
const MobileIcon = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
    align-items: center;
    cursor: pointer;
    margin-left: 20px;
    width: 25px;
    float: left;
    transition: all 0.2s ease;
    margin-top: 20px;
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
  @media (max-width: 1000px){
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
      width:  210px;
      margin-top: 0px!important;
      // margin-left:auto !important;
      // margin-right: auto !important;
      // right: 0;
      // left: 0;
      z-index:99999;
      float:right;
      background:rgba(256, 256, 256, 0) ;
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
          color: #fff !important;
          text-transform: none;
          font-size: 12px;
          width 170px;
          display: block;
          border-top: 0;
          border: 0;
          margin: 0;
          padding:7px 20px 7px 20px;
          border-bottom: 1px solid #fff;
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
    width: 1020px !important;
    left: 0;
    right: 0;
    margin-left: auto !important;
    margin-right: auto !important;
    padding: 15px !important;
    box-sizing: border-box;
    li {
      width: 20% !important;
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
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  position: relative;
  z-index: 8;
`;

export default connect(Navbar);
