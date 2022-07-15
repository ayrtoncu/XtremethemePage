import { connect, styled,css } from "frontity";
import React from "react";
import inglaterra from '../assets/imgs/tours/1600x1200-8-560x460.jpg';
import garden from '../assets/imgs/tours/1600x1200-9-560x460.jpg';
import bigben from '../assets/imgs/tours/1600x1200-11-560x460.jpg';
import TopTours from "./TopTours";

const SectionOffers = () => {
  return (
    <SectionTourPadding>
      <Container>
        <ContentText>
        <h2>BEST INCA TRAIL</h2>
        <div>Check out our best promotion tours</div>
        </ContentText>
        <TopTours/>
        {/* <Portafolio>
          <div css={elementBox}>
            <div css={thirdGallery}>
              <a>
                <img css={galleryImg} src={inglaterra } />
              </a>
              <a css={portanchor}>
                <div css={thumbContent}>
                  <div css={thumnTitle}>
                    <div css={thumbPlace}> Salkantay</div>
                    <h3>Salkantay Classic</h3>
                  </div>
                  <div css={thumbMeta}>
                    <div css={tourDays}>4 Days</div>
                    <div></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div css={elementBox}>
            <div css={thirdGallery}>
              <a>
                <img css={galleryImg} src={garden} />
              </a>
              <a css={portanchor}>
                <div css={thumbContent}>
                  <div css={thumnTitle}>
                    <div css={thumbPlace}> Salkantay</div>
                    <h3>Salkantay Classic</h3>
                  </div>
                  <div css={thumbMeta}>
                    <div css={tourDays}>4 Days</div>
                    <div></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div css={elementBox}>
            <div css={thirdGallery}>
              <a>
                <img css={galleryImg} src={bigben} />
              </a>
              <a css={portanchor}>
                <div css={thumbContent}>
                  <div css={thumnTitle}>
                    <div css={thumbPlace}> Salkantay</div>
                    <h3>Salkantay Classic</h3>
                  </div>
                  <div css={thumbMeta}>
                    <div css={tourDays}>4 Days</div>
                    <div></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div css={elementBox}>
            <div css={thirdGallery}>
              <a>
                <img css={galleryImg} src={inglaterra } />
              </a>
              <a css={portanchor}>
                <div css={thumbContent}>
                  <div css={thumnTitle}>
                    <div css={thumbPlace}> Salkantay</div>
                    <h3>Salkantay Classic</h3>
                  </div>
                  <div css={thumbMeta}>
                    <div css={tourDays}>4 Days</div>
                    <div></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div css={elementBox}>
            <div css={thirdGallery}>
              <a>
                <img css={galleryImg} src={garden} />
              </a>
              <a css={portanchor}>
                <div css={thumbContent}>
                  <div css={thumnTitle}>
                    <div css={thumbPlace}> Salkantay</div>
                    <h3>Salkantay Classic</h3>
                  </div>
                  <div css={thumbMeta}>
                    <div css={tourDays}>4 Days</div>
                    <div></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div css={elementBox}>
            <div css={thirdGallery}>
              <a>
                <img css={galleryImg} src={bigben} />
              </a>
              <a css={portanchor}>
                <div css={thumbContent}>
                  <div css={thumnTitle}>
                    <div css={thumbPlace}> Salkantay</div>
                    <h3>Salkantay Classic</h3>
                  </div>
                  <div css={thumbMeta}>
                    <div css={tourDays}>4 Days</div>
                    <div></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Portafolio> */}
      </Container>
    </SectionTourPadding>
  );
};
const SectionTourPadding = styled.div`
  border-top: 1px solid #e1e1e1;
  padding: 60px 0 60px 0;
  padding-bottom: 0px;
  float: left;
  width: 100%;
  clear: both;
  position: relative;
`;
const Container = styled.div`
  max-width: 85%;
  width: 100%;
  padding-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  @media(min-width: 1030px){
    max-width: 70%;
  }
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
    width: 100%;
  }
`;
const Content = styled.div`
  text-align: center;
  margin-top: 0;
  width: 100%;
  padding-bottom: 0;
  h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 5px;
    margin-top: 0;
    text-transform: uppercase;
    letter-spacing: 0;
  }
`;
const Portafolio = styled.div`
  padding: 0!important;
  width: 100%;
  position: relative;
  overflow: hidden;
  height: auto;
  visibility:visible;
  opacity: 1;
  margin-left:0;
`;
//clases
let elementBox = css`
  position: relative;
  left: 0px;
  top: 0px;
  transform: translate3d(0px, 0px, 0px);
  width: auto;
  transition-property:transform, opacity;
  visibility: visible;
`;
let thirdGallery = css`
  position: relative;
  height: auto;
  width: 100%;
  margin-bottom:0!important;
  margin: 0;
  overflow: hidden;
  opacity: 1;
  float: left;
  a{
    line-height:0;
    display:block;
  }
  @media (min-width:760px){
    width: 50%;
  }
  @media (min-width:1024px){
    width: 33.3%;
  }
`;
let galleryImg = css`
  max-width: none!important;
  width: 100%;
  height: auto;
`;
let portanchor = css`
  display: block;
  line-height: unset !important;
`;
let thumbContent = css`
  padding: 20px 15px 7px 15px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #000;
  background-color: rgba(0, 0, 0, 0.5);
  color: #000000;
  width: 100%;
  height: auto;
  font-size: 12px;
  box-sizing: border-box;
  transition: color .2s linear, background .2s linear;
  text-align:left;
`;
let thumnTitle = css`
  float: left;
  width: 70%;
  h3{
    font-size:16px;
    line-height: 28px;
    text-transform: none;
    color: #fff;
    margin: 0;
  }
`;
let thumbMeta = css`
  float: right;
  width: 30%;
  text-align: right;
`;
let thumbPlace = css`
  font-size: 11px;
  color: #fff;
  font-weight: 900;
  letter-spacing: 1px;
  font-style: italic;
  text-transform: uppercase;
`;
let tourDays = css`
  font-size: 11px;
  color: #fff;
  font-weight: 900;
  text-transform: uppercase;
`;
export default connect(SectionOffers);
