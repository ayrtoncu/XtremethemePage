import { connect, styled, css } from "frontity";
import React from "react";

import tripadivorchoice from '../assets/imgs/certifies/tripadvisor-salkantay-trekking-150x150.png';
import ToursIncaTrail from './TopTours';

const PresentatioSection = () => {
  return (
    <Section>
      <ContentText>
        <h2>
          <span
            css={css`
              color: rgba(6, 95, 70);
            `}
          >
            XTREME TOURBULENCIA
          </span>{" "}
          Local Specialists on the <br/><span
            css={css`
              color: rgba(6, 95, 70);
              line-height: 1.5;
            `}
          > Inca Trail Hiking!</span>
        </h2>
        <div
          css={css`
          font-size 1.7remM
          display: block;
          margin-top: 14px;
          font-weight:100;
        `}
        >
          <strong>Xtreme Tourbulencia</strong> Travel Agency is a Peruvian
          company interested in the development and promote sustainable tourism,
          protecting the local environment and culture. We offer a variety of
          tours and adventure expeditions in the whole of Peru. Our tours are
          all designed with the highest level of customer service and
          responsible tourism. We look forward to sharing Peru’s amazing
          outdoors and deep culture heritage with you!
        </div>
      </ContentText>
      <ContentCertifies>
        <Certifies>
        <picture css={pictureslvl17}>
            <img src={tripadivorchoice} />
          </picture>
        </Certifies>
      </ContentCertifies>
    </Section>
  );
};
const Section = styled.div`
  border-top: 1px solid #e1e1e1;
  padding: 60px 0 30px 0;
  float: left;
  width: 100%;
  clear: both;
  position: relative;
`;
const ContentText = styled.div`
  text-align: center;
  margin-top: 0;
  width: 90%;
  padding-bottom: 0;
  margin: auto;
  h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 5px;
    margin-top: 0;
    text-transform: uppercase;
    letter-spacing: 0;
  }
  @media (min-width:1020px){
    width: 960px;
  }
`;
const ContentCertifies = styled.div`
  max-width: 960px;
  margin: auto;
`;
const Certifies = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;
//clases
let pictureslvl14 = css`
  display: block;
  mas-width: 10rem;
  width: 100px !important;
  height: 100px !important;
`;
let pictureslvl15 = css`
  display: block;
  mas-width: 10rem;
  width: 125px !important;
  height: 125px !important;
`;
let pictureslvl16 = css`
  display: block;
  mas-width: 10rem;
  width: 145px !important;
  height: 145px !important;
`;
let pictureslvl17 = css`
  display: block;
  mas-width: 10rem;
  width: 160px !important;
  height: 160px !important;
`;
export default connect(PresentatioSection);
