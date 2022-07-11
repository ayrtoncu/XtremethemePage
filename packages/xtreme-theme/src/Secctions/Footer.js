import { connect, styled, css } from "frontity";
import React from "react";
import logoblanco from "../assets/imgs/logos/Logo Blanco.png";
const FooterSecction = () => {
  return (
    <FooterBar>
      <Footer>
        <ul css={sidebarwidgetfour}>
          <WidgetText>
            <h2 css={titlewidget}>Destinations</h2>
            <div css={textWidget}>
              <ul css={addres}>
                <li>Ausangate Trek</li>
                <li>Inca Trail</li>
                <li>Salkantay Trek</li>
                <li>Choquequirao</li>
                <li>Inca Jungle</li>
                <li>Huchuy Qosqo</li>
                <li>Cusco Day Tours</li>
                <li>Lares Trek</li>
              </ul>
            </div>
          </WidgetText>
          <WidgetText>
            <h2 css={titlewidget}>Company</h2>
            <div css={textWidget}>
              <ul css={addres}>
                <li> Our Offices</li>
                <li>Why Xtreme Tourbulencia</li>
                <li>Yellow Team</li>
                <li>Cooks for the Treks</li>
                <li>Responsible Tourism</li>
                <li>Difficulty Levels</li>
                <li>Inca Trail Questions</li>
                <li>Terms and Conditions</li>
                <li>ESNNA</li>
              </ul>
            </div>
          </WidgetText>
          <WidgetText>
            <h2 css={titlewidget}> Contact</h2>
            <div css={textWidget}>
              <ul css={addres}>
                <li>info@x-tremetourbulencia.com</li>
                <li>reserve@x-tremetourbulencia.com</li>
                <li>gerencia@x-tremetourbulencia.com</li>
                <li>
                  <strong>Sales: </strong>+51 984 610 644
                </li>
                <li>
                  <strong>Office Plateros: </strong>+51 84224362
                </li>
                <li>
                  <strong>Main Office: </strong>+51 84622440
                </li>
                <li>
                  <strong>Emergency Phone:</strong>+51 984 610 644
                </li>
                <li>Calle Plateros 356, 08000 Cusco</li>
                <li>Villa Manahuañunca 3 de Mayo D-69, 08000 Cusco</li>
              </ul>
            </div>
          </WidgetText>
          <WidgetText>
            <h2 css={titlewidget}>Office Hours</h2>
            <div css={textWidget}>
              <ul css={addres}>
                <li></li>
              </ul>
            </div>
          </WidgetText>
        </ul>
        <FooterPay>
          <FooterLogo>
            <img src={logoblanco}></img>
          </FooterLogo>
          <FooterPayMethods>
            <img src="https://www.x-tremetourbulencia.com/wp-content/themes/xtreme_tourbulencia/img/paypal-others.png"></img>
          </FooterPayMethods>
        </FooterPay>
      </Footer>
      <FooterWrap>
        <FooterWrapText>
          Copyright © 2021 Xtreme Tourbulencia<br />
          <strong>RUC: </strong>20527988331<br />
          <strong>Razon Social: </strong>  GRUPO TOURBULENCIA EN PERU S.C.R.L
        </FooterWrapText>
      </FooterWrap>
    </FooterBar>
  );
};
export default connect(FooterSecction);

const FooterBar = styled.div`
  margin-bottom: 0;
  background: #ffffff;
  width: 100%;
  min-height: 50px;
  margin: auto;
  padding: 0 0 5px 0;
  float: left;
`;
const Footer = styled.div`
  width: 100%;
  padding-top: 20px;
  color: #cccccc;
  float: left;
  background: #000;
  @media (min-width: 768px;) {
    padding-bottom: 0;
  }
  @media (min-width: 1020px) {
    padding-bottom: 55px;
    margin: auto;
    padding-top: 40px;
    word-wrap: break-word;
  }
`;
const FooterPay = styled.div`
  width:300px;
  margin: auto;
  font-size: 13px;
  color:#fff
  font-weight: 600;
  transition:-webkit-transform 500ms ease;
  clear:both;
  padding-top:20px;
  gap:1rem;
  padding-bottom: 15px;
  @media(min-width: 1024px){
    display: flex;
    width: 960px;
  }
  @media(min-width: 768px){
    display: flex;
    width: 100%;
  }
`;
const FooterLogo = styled.div`
  width: 100%;
  img{
    width: 80%;
    display: block;
    margin: auto;
  }
  @media(min-width: 768px){
    width: 50%;
    img{
      width: 50%;
    }
  }
`;
const FooterPayMethods = styled.div`
  width: 100%;
  img{
    width: 80%;
    display: block;
    margin: auto;
  }
  @media(min-width: 768px){
    width: 50%;
    img{
      width: 50%;
    }
  }
`;
const FooterWrap = styled.div`
  width: 320px;
  margin: auto;
  font-size: 13px;
  font-weight: 600;
  color: #999;
  transition: -webkit-transform 500ms ease;
  -webkit-font-smoothing: antialiased;
  clear: both;
  padding-top: 20px;
`;
const FooterWrapText = styled.div`
  text-align: center;
  align-items:center;
  flex-direction: column;
`;
const WidgetText = styled.li`
  margin-bottom: 20px;
  float: left;
  margin-right: 5%;
  width: 100%;
  @media (min-width: 760px) {
    width: 46%;
    margin-right: 0;
  }
  @media (min-width: 1024px) {
    width: 23%;
    margin-right: 1.5%;
  }
`;

//class
let sidebarwidgetfour = css`
  max-width: 300px;
  width: 80%;
  list-style: none;
  margin: auto;
  @media (min-width: 760px) {
    max-width: 726px;
  }
  @media (min-width: 1024px) {
    max-width: 960px;
  }
`;
let titlewidget = css`
  color: #ffffff;
  margin-top: 15px;
  margin-bottom: 15px;
  border-color: #e1e1e1;
  letter-spacing: 0;
  font-weight: 700;
  font-size: 14px;
  display: block;
  text-align: left;
  text-transform: uppercase;
`;
let textWidget = css`
  padding-top: 0;
  text-align: left;
  margin-top: 10px;
`;
let addres = css`
  list-style: none;
  margin-left: 0 !important;
  padding: 0;
  li {
    padding-top: 0;
    margin: 0 0 10px 0;
    border-color: #000000;
    font-size: 14px;
  }
`;