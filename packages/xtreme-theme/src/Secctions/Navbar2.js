import { connect, styled } from 'frontity';
import React from 'react';


const Navbar2 = () => {
  return (
    <ContentNavbar>
      <nav></nav>
    </ContentNavbar>
  );
}

export default connect(Navbar2);

const ContentNavbar = styled.div`
width:100%;
background-color:#f8f8f8
color:#000;
`;