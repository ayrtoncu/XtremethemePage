import React from "react";
import { connect, styled, css } from "frontity";
import essna from "../assets/imgs/certifies/esnna-150x150.png";
import tripadvisor from "../assets/imgs/certifies/tripadvisor-salkantay-trekking-150x150.png";

const Certifications = () => {
  return (
    <Container>
      <CertificationsContainer>
        <picture css={lvl14}>
          <img src="https://www.x-tremetourbulencia.com/wp-content/themes/xtreme_tourbulencia/img/peru-marca.png" />
        </picture>
        <picture css={lvl13}>
          <img src="https://www.x-tremetourbulencia.com/wp-content/themes/xtreme_tourbulencia/img/directur.png" />
        </picture>
        <picture css={lvl12}>
          <img src="https://www.x-tremetourbulencia.com/wp-content/themes/xtreme_tourbulencia/img/paypal-f.png" />
        </picture>
        <picture css={lvl11}>
          <img src={tripadvisor} />
        </picture>
        <picture css={lvl12}>
          <img src="https://www.x-tremetourbulencia.com/wp-content/themes/xtreme_tourbulencia/img/mincetur.png" />
        </picture>
        <picture css={lvl13}>
          <img src="https://www.x-tremetourbulencia.com/wp-content/themes/xtreme_tourbulencia/img/promperu.png" />
        </picture>
        <picture css={lvl14}>
          <img src={essna} />
        </picture>
      </CertificationsContainer>
    </Container>
  );
};
export default connect(Certifications);

const Container = styled.div`
  position: relative;
  clear: both;
  margin-top: 40px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
const CertificationsContainer = styled.div`
  align-items: center;
  padding-top: 10rem;
  margin-bottom: 10rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
//class
let lvl14 = css`
  width: 33%;
  max-width: 18rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    width: 15%;
  }
  @media (min-width: 1024px) {
    width: 100px;
  }
`;
let lvl13 = css`
  width: 33%;
  max-width: 18rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    width: 15%;
  }
  @media (min-width: 1024px) {
    width: 125px;
  }
`;
let lvl12 = css`
  width: 33%;
  max-width: 18rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    width: 15%;
  }
  @media (min-width: 1024px) {
    width: 150px;
  }
`;
let lvl11 = css`
  width: 33%;
  max-width: 18rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    width: 15%;
  }
  @media (min-width: 1024px) {
    width: 180px;
  }
`;
