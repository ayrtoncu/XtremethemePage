import { connect, styled, css } from "frontity";
import React from "react";
import Link from "@frontity/components/link";

const AlternativeTreks = () => {
  return (
    <Section>
      <Container>
        <ContentText>
          <h2>Alternative Excellence Treks</h2>
          <div
            css={css`
              font-size 1.7remM
              display: block;
              margin-top: 14px;
              font-weight:100;
            `}
          >
            <strong>Xtreme Tourbulencia</strong> Travel Agency is a Peruvian
            company interested in the development and promote sustainable
            tourism, protecting the local environment and culture. We offer a
            variety of tours and adventure expeditions in the whole of Peru. Our
            tours are all designed with the highest level of customer service
            and responsible tourism. We look forward to sharing Peru’s amazing
            outdoors and deep culture heritage with you!
          </div>
        </ContentText>
        <ContainerContent>
          <Item>
            <Link css={link}>
              <AlternativeDestinationImage>
                <img src='https://www.salkantaytrekking.com/images/peru-tours/inca-jungle-peru-cusco-destination-cover-350x350.webp'></img>
              </AlternativeDestinationImage>
              <h2 css={titleAlternativeDestination}>Salkantay Trek</h2>
              <h4 css={subtitleAlternativeDestination}>Cusco, Mollepata </h4>
            </Link>
          </Item>
          <Item>
            <Link css={link}>
              <AlternativeDestinationImage>
                <img src='https://www.salkantaytrekking.com/images/peru-tours/inca-jungle-peru-cusco-destination-cover-350x350.webp'></img>
              </AlternativeDestinationImage>
              <h2 css={titleAlternativeDestination}>Lares Trek</h2>
              <h4 css={subtitleAlternativeDestination}>Cusco, Lares </h4>
            </Link>
          </Item>
          <Item>
            <Link css={link}>
              <AlternativeDestinationImage>
                <img src='https://www.salkantaytrekking.com/images/peru-tours/inca-jungle-peru-cusco-destination-cover-350x350.webp'></img>
              </AlternativeDestinationImage>
              <h2 css={titleAlternativeDestination}>Choquequirao Trek</h2>
              <h4 css={subtitleAlternativeDestination}>Cusco, Marampata </h4>
            </Link>
          </Item>
          <Item>
            <Link css={link}>
              <AlternativeDestinationImage>
                <img src='https://www.salkantaytrekking.com/images/peru-tours/inca-jungle-peru-cusco-destination-cover-350x350.webp'></img>
              </AlternativeDestinationImage>
              <h2 css={titleAlternativeDestination}>Huchuy Qosqo Trek</h2>
              <h4 css={subtitleAlternativeDestination}>Cusco, Tauca </h4>
            </Link>
          </Item>
          <Item>
            <Link css={link}>
              <AlternativeDestinationImage>
                <img src='https://www.salkantaytrekking.com/images/peru-tours/inca-jungle-peru-cusco-destination-cover-350x350.webp'></img>
              </AlternativeDestinationImage>
              <h2 css={titleAlternativeDestination}>Ausangate Trek</h2>
              <h4 css={subtitleAlternativeDestination}>Cusco, Mallma </h4>
            </Link>
          </Item>
          <Item>
            <Link css={link}>
              <AlternativeDestinationImage>
                <img src='https://www.salkantaytrekking.com/images/peru-tours/inca-jungle-peru-cusco-destination-cover-350x350.webp'></img>
              </AlternativeDestinationImage>
              <h2 css={titleAlternativeDestination}>Inca Jungle Trek</h2>
              <h4 css={subtitleAlternativeDestination}>Cusco, Chincero</h4>
            </Link>
          </Item>
        </ContainerContent>
      </Container>
    </Section>
  );
};
export default connect(AlternativeTreks);
const Section = styled.div`
  padding: 60px 0 30px 0;
  float: left;
  width: 100%;
  clear: both;
  position: relative;
`;

const Container = styled.div`
  max-width: 80%;
  width: 100%;
  padding-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
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
  @media (min-width: 780px) {
    width: 100%;
  }
  @media (min-width: 1020px) {
    width: 90%;
  }
`;
const ContainerContent = styled.div`
  gap: 2rem;
  grid-template-rows: repeat(6, minmax(0, 1fr));
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-flow: column;
  width: 100%;
  display: grid;
  position: relative;
  margin-top: 40px;
  @media (min-width: 768px) {
    grid-template-rows: repeat(3, minmax(0, 1fr));
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1020px) {
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1440px) {
    grid-template-rows: repeat(1, minmax(0, 1fr));
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;
const Item = styled.div`
  width: 100%;
`;
const AlternativeDestinationImage = styled.div`
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  img{
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    object-fit:cover;
    display:block;
    transition: 0.5s;
  }
`;
//class

let link = css`
  text-align: center;
  width: 100%;
  text-decoration: none;
`;
let titleAlternativeDestination = css`
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 16px;
  letter-spacing: 1px;
  color: #333;
  text-transform: uppercase;
`;
let subtitleAlternativeDestination = css`
  margin-top: 1rem;
  font-size: 15px;
  font-weight: 400;
  color: #555;
`;