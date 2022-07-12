import { connect, styled, css } from "frontity";
import React from "react";
const XtremeExcellence = () => {
  return (
    <Section>
      <ContentText>
        <h2>
          <span
            css={css`
              color: rgba(6, 95, 70);
            `}
          >
            XTREME
          </span>{" "}
          Excellence <br />
        </h2>
        <div
          css={css`
          font-size 1.7rem;
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
      <ContainerContent>
        <Row>
          <div css={col}>
            <a css={givesBackBox}>
              <div css={givesBackBoxImage}>
                <picture>
                  <source srcSet="https://www.x-tremetourbulencia.com/wp-content/uploads/2021/08/indigenous-women-responsible.jpeg" />
                  <img></img>
                </picture>
              </div>
              <div css={givesBackBoxContent}>
                <div css={givesBackBoxTitle}>Camping Equipament</div>
                <div css={givesBackBoxSubtitle}>
                  The Best Camping Equipament
                </div>
              </div>
            </a>
          </div>
          <div css={col}>
            <a css={givesBackBox}>
              <div css={givesBackBoxImage}>
                <picture>
                  <source srcSet="https://www.x-tremetourbulencia.com/wp-content/uploads/2021/08/indigenous-women-responsible.jpeg" />
                  <img></img>
                </picture>
              </div>
              <div css={givesBackBoxContent}>
                <div css={givesBackBoxTitle}>Camping Equipament</div>
                <div css={givesBackBoxSubtitle}>
                  The Best Camping Equipament
                </div>
              </div>
            </a>
          </div>
          <div css={col}>
            <a css={givesBackBox}>
              <div css={givesBackBoxImage}>
                <picture>
                  <source srcSet="https://www.x-tremetourbulencia.com/wp-content/uploads/2021/08/indigenous-women-responsible.jpeg" />
                  <img></img>
                </picture>
              </div>
              <div css={givesBackBoxContent}>
                <div css={givesBackBoxTitle}>Camping Equipament</div>
                <div css={givesBackBoxSubtitle}>
                  The Best Camping Equipament
                </div>
              </div>
            </a>
          </div>
          <div css={col}>
            <a css={givesBackBox}>
              <div css={givesBackBoxImage}>
                <picture>
                  <source srcSet="https://www.x-tremetourbulencia.com/wp-content/uploads/2021/08/indigenous-women-responsible.jpeg" />
                  <img></img>
                </picture>
              </div>
              <div css={givesBackBoxContent}>
                <div css={givesBackBoxTitle}>Camping Equipament</div>
                <div css={givesBackBoxSubtitle}>
                  The Best Camping Equipament
                </div>
              </div>
            </a>
          </div>
          <div css={col}>
            <a css={givesBackBox}>
              <div css={givesBackBoxImage}>
                <picture>
                  <source srcSet="https://www.x-tremetourbulencia.com/wp-content/uploads/2021/08/indigenous-women-responsible.jpeg" />
                  <img></img>
                </picture>
              </div>
              <div css={givesBackBoxContent}>
                <div css={givesBackBoxTitle}>Camping Equipament</div>
                <div css={givesBackBoxSubtitle}>
                  The Best Camping Equipament
                </div>
              </div>
            </a>
          </div>
          <div css={col}>
            <a css={givesBackBox}>
              <div css={givesBackBoxImage}>
                <picture>
                  <source srcSet="https://www.x-tremetourbulencia.com/wp-content/uploads/2021/08/indigenous-women-responsible.jpeg" />
                  <img></img>
                </picture>
              </div>
              <div css={givesBackBoxContent}>
                <div css={givesBackBoxTitle}>Camping Equipament</div>
                <div css={givesBackBoxSubtitle}>
                  The Best Camping Equipament
                </div>
              </div>
            </a>
          </div>
        </Row>
      </ContainerContent>
    </Section>
  );
};
export default connect(XtremeExcellence);

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
  width: 100%;
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
    width: 960px;
  }
`;
const ContainerContent = styled.div`
  margin-top: 3rem;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 780px) {
    width: 960px;
  }
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
//class
let col = css`
  padding: 0.2rem;
  width: 100%;

  @media (min-width: 768px) {
    flex: 0 0 32.5%;
    max-width: 33.33333%;
  }
`;

let givesBackBox = css`
  width: 100%;
  height: 100%;
  background-color: lightgreen;
  overflow: hidden;
  border-radius: 3px;
  position: relative;
  display: block;
`;
let givesBackBoxImage = css`
  position: relative;
  padding: 0 !important;
  img {
    display: block;
    width: 100%;
    height: 120px;
    object-fit: cover;
    transition: 0.5s;
  }
`;
let givesBackBoxContent = css`
  position: absolute;
  padding: 0 !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  display: flex;
  flex-direction: column;
`;
let givesBackBoxTitle = css`
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 4px;
  padding: 0 !important;
`;
const givesBackBoxSubtitle = css`
  font-size: 15px;
  padding: 0 !important;
`;
