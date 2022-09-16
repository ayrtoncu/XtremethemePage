import { styled } from 'frontity';
import React from 'react';

const MenuToolbar = () => {
  return (
    <MenuBar>
      <Container>
        <Navbar>
          <Collapse>
            <NavbarNav>
              
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Container>
    </MenuBar>
  );
}

export default connect(MenuToolbar);

const MenuBar = styled.div`
background-color:#ffffff0;
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
flex-direction:row;
display:flex;
padding-left:0;
margin-bottom:0;
list-style:none;
`;
