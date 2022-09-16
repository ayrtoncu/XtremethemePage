import { connect, styled } from 'frontity';
import React from 'react';
import MenuToolbar from '../Components/Header/MenuToolbar';
import TopBarSocial from '../Components/Header/TopBarSocial';
import NewsletterHeader from '../Components/Header/NewsletterHeader';


const Navbar2 = () => {
  return (
    <ContentNavbar>
      <TopBarSocial/>
      <NewsletterHeader/>
      <MenuToolbar/>
    </ContentNavbar>
  );
}

export default connect(Navbar2);

const ContentNavbar = styled.div`
width:100%;
background-color:#f8f8f8;
color:#000;
@media (max-width: 960px) {
  display: none;
}
  
`;