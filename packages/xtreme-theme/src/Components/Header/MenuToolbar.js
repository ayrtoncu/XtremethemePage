import { styled, connect,css } from 'frontity';
import Link from "@frontity/components/link"; 
import React from 'react';

const MenuToolbar = () => {
  return (
    <MenuBar>
      <Container>
        <Navbar>
          <Collapse>
            <NavbarNav>
              <li>
                <Link css={navlink}>Inca Trail</Link>
                <ul>
                  <div css={containerFlex}>asdasd </div>
                </ul>
              </li>
              <li>
                <Link css={navlink}>Alternative Treks</Link>
              </li>
              <li>
                <Link css={navlink}>Machu Picchu</Link>
              </li>
              <li>
                <Link css={navlink}>Dayli Tours</Link>
              </li>
              <li>
                <Link css={navlink}>Vacation Packages</Link>
              </li>
              <li>
                <Link css={navlink}>Manu</Link></li>
              <li><Link css={navlink}>About US</Link></li>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Container>
    </MenuBar>
  );
}

export default connect(MenuToolbar);

const MenuBar = styled.div`
background-color:#f8f8f8;
position:sticky;
top:0;
z-index:998;
display:block;
`;
const Container = styled.div`
padding:0;
display:block;
max-width:1600px;
width:100%;
margin-right:auto;
margin-left: auto;
`;
const Navbar = styled.nav`
display:block;
padding-right: 0;
padding-left:0;
position:static!important;
flex-wrap:nowrap;
justify-content:flex-start;
`;
const Collapse = styled.div`
display:flex;
flex-basis:auto;
flex-grow:1;
align-items: center;
`;
const NavbarNav = styled.ul`
margin-left: auto;
margin-right: auto;
flex-direction:row;
display:flex;
padding-left:0;
margin-bottom:0;
list-style:none;
li{
  ul{
    padding:1.5rem;
    display: none;
    z-index:1;
    left:0;
    position: absolute;
    text-align: left;
    width: 100%
  }
  &:hover{
    ul{
      display: block;
    }
  }
}
`;

let containerFlex = css`
justify-content:space-between;
flex-wrap:wrap;
max-width:1600px;
width:100%;
display:flex; 
`;
let navlink = css`
color:#000 !important;
text-transform:uppercase;
font-size: 14px;
letter-spacing: .15em;
font-weight: 600;
padding: 20px !important;
border-bottom : 2px solid transparent;
display: block;
transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
cursor: pointer;
@media (max-width: 1024px) {
  font-size: 12px;
}
`;