import { connect, css, styled } from 'frontity';
import React from 'react';
import logo from '../assets/imgs/logos/LogoCompletosinfondos.png'
import SidebarMovil from './SidebarMovil';

const MobileWrap = () => {
  return (
    <WrapMobilHeader>
      <MobilHeader>
        <MobilHeaderContainer>
          <Logo>
            <TravelLogoInner>
              <img alt width='275' height='39' title='xtreme-logo' src={logo}></img>
            </TravelLogoInner>
          </Logo>
          <MobilMenuRight>
            <SidebarMovil/>
          </MobilMenuRight>
        </MobilHeaderContainer>
      </MobilHeader>
    </WrapMobilHeader>
  );
}

export default connect(MobileWrap);

const WrapMobilHeader = styled.div`
border-color:#e1e1e1;
display: none;
@media(max-width: 960px){
  display:block;
}
`;
const MobilHeader = styled.div`
  display: block;
  transition:-webkit-transform .4s ease;
  transition:transform .4s ease;
  transition:transform .4s ease,-webkit-transform .4s ease;
  border-color:#e1e1e1;
  background-color:#fff;
  padding-top:15px;
  padding-bottom:15px;
  z-index:9999;
  box-shadow:0 1px 2px rgb(0 0 0 / 10%);
  -webkit-box-shadow:0 1px 2px rgb(0 0 0 / 10%);
`;
const MobilHeaderContainer = styled.div`
padding-left:15px;
padding-right: 15px;
position:relative;
border-color:#e1e1e1;
max-width:1300px;
margin-left:auto;
margin-right:auto;
`;
const Logo = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  position:relative;
`;
const TravelLogoInner = styled.div`
line-height:45px;
margin-right: 80px;
max-width:138px;
-webkit-transition:max-width 200ms;
transition:max-width 200ms;
img{
  vertical-align:middle;
  width:auto;
}
`;
const MobilMenuRight = styled.div`
position:absolute;
right:30px;
top:50%;
margin-top:-9px;
`;