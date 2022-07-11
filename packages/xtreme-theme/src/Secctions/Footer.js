import { connect,styled,css } from 'frontity';
import React from 'react';
const FooterSecction = () => {
  return (
    <FooterBar>
      <Footer></Footer>
      <FooterWrap></FooterWrap>
    </FooterBar>
  );
}
export default connect(FooterSecction);

const FooterBar = styled.div`
  margin-bottom:0;
  background: #ffffff;
  width: 100%;
  min-height: 50px;
  margin: auto;
  padding: 0 0 5px 0;
  float: left;
`;
const Footer = styled.div`
  width: 100%;
  padding-top : 20px;
  color: #cccccc;
  float: left;
  background: #000;
  @media(min-width: 768px;){
    padding-bottom: 0;
  }
  @media (min-width:1020px){
    padding-bottom: 55px;
    margin:auto;
    padding-top: 40px;
    word-wrap:break-word
  }
`;
const FooterWrap = styled.div`
  width: 300px;
  margin: auto;
  font-size:13px;
  font-weight:600;
  color:#999;
  transition:-webkit-transform 500ms ease;
  -webkit-font-smoothing:antialiased;
  clear:both;
  padding-top: 20px;
`;