import { styled, connect, css } from "frontity";
import Link from "@frontity/components/link";
import React from "react";
import IncaTrail from "./Toolbars/IncaTrail";
import AlternativeTrek from "./Toolbars/AlternativeTrek";
import MachuPicchu from "./Toolbars/MachuPicchu";
import DayliTours from "./Toolbars/DayliTours";
import VacationPackages from "./Toolbars/VacationPackages";
import Manu from "./Toolbars/Manu";
import AboutUs from "./Toolbars/AboutUs";
const MenuToolbar = () => {
  return (
    <MenuBar>
      <Container>
        <Navbar>
          <Collapse>
            <NavbarNav>
              <li>
                <Navlink>
                  <Link>Inca Trail</Link>
                </Navlink>
                <ul>
                  <IncaTrail />
                </ul>
              </li>
              <li>
                <Navlink>
                  <Link>Alternative Treks</Link>
                </Navlink>
                <ul>
                  <AlternativeTrek />
                </ul>
              </li>
              <li>
                <Navlink>
                  <Link>Machu Picchu</Link>
                </Navlink>
                <ul>
                  <MachuPicchu />
                </ul>
              </li>
              <li>
                <Navlink>
                  <Link>Dayli Tours</Link>
                </Navlink>
                <ul>
                  <DayliTours />
                </ul>
              </li>
              <li>
                <Navlink>
                  <Link>Vacation Packages</Link>
                </Navlink>
                <ul>
                  <VacationPackages />
                </ul>
              </li>
              <li>
                <Navlink>
                  <Link>Manu</Link>
                </Navlink>
                <ul>
                  <Manu />
                </ul>
              </li>
              <li>
                <Navlink>
                  <Link>About US</Link>
                </Navlink>
                <ul>
                  <AboutUs />
                </ul>
              </li>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Container>
    </MenuBar>
  );
};

export default connect(MenuToolbar);

const MenuBar = styled.div`
  background-color: #f8f8f8;
  position: sticky;
  top: 0;
  z-index: 998;
  display: block;
`;
const Container = styled.div`
  padding: 0;
  display: block;
  max-width: 1600px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
const Navbar = styled.nav`
  display: block;
  padding-right: 0;
  padding-left: 0;
  position: static !important;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;
const Collapse = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
`;
const Navlink = styled.div`
  color: #000 !important;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.15em;
  font-weight: 600;
  padding: 20px !important;
  border-bottom: 2px solid transparent;
  display: block;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.35s ease-in-out;
  cursor: pointer;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

const NavbarNav = styled.ul`
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  li {
    ul {
      background-color: #f8f8f8;
      padding: 1.5rem;
      display: none;
      z-index: 1;
      left: 0;
      position: absolute;
      text-align: left;
      padding-top: 2.3rem;
      padding-bottom: 3rem;
      width: 100%;
      border-bottom: 1px solid;
      border-color: #858585;
    }
    &:hover {
      ul {
        display: block;
      }
      ${Navlink} {
        border-bottom: 3px solid #008b39;
      }
    }
  }
`;
