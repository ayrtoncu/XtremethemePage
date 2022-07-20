import { Global, connect, css,styled  } from "frontity";
import React from 'react';
import banner from '../assets/imgs/banner/machupicchu.jpg'

const SliderBanner = () => {
  return (
    <ContentBanner>
      <div css={wrapperbanner}>
        <Slider>
          <Slide>
            <div css={slotHolder}>
              <div css={bgImagebanner}></div>
            </div>
            <div css={parallaxWrap}>
              <h1>The Mountains are Calling For You</h1>
              <h2>Discovery More</h2>
            </div>
          </Slide>
        </Slider>
      </div>
    </ContentBanner>
  );
}

//Components
const ContentBanner = styled.div`
position: absolute;
top: 0;
right: 0;
z-index: 1;
clear:none;
width: 100%;
`;
const Slider = styled.div`
  background: rgb(0, 0, 0);
  padding: 0px;
  height: 100vh;
  margin-top: 0px;
  margin-bottom: 0px;
  position: absolute;
  max-height: none;
  overflow: visible;
  width: 100%;
  left:0px;
  z-index: 0;
`;
const Slide = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index:20;
  visibility: inherit;
  opacity: 1;
  background-color:rgba(255, 255, 255, 0);
  position: relative;
  margin: 0;
  padding: 0;
  background-position: 0 0;
  text-indent: 0;
  top: 0;
  left: 0;
`;
//Class
let bgImagebanner = css`
background-repeat:no-repeat;
background-image: url(${banner});
width: 100%;
height: 100%;
background-position: center top;
background-size: cover;
visibility: inherit;
z-index: 20;
`;
let wrapperbanner = css`
  position: relative;
  width: 100%;
  height: auto;
  margin-top:0px;
  margin-bottom: 0px;
`;
let slotHolder = css`
position: absolute;
top: 0px;
left: 0px;
z-index: 0;
width: 100%;
height: 100%;
visibility: inherit;
opacity: 1;
transform: matrix(1, 0, 0, 1, 0, 0);
`;
let parallaxWrap = css`
  position: absolute;
  display: block;
  visibility: visible;
  left: 50%;
  top: 50%;
  z-index:5;
  color: #ffffff;
  text-align:center;
  transform: translate(-50%, -50%);
  h1{
    font-size: 50px;
    text-transform: uppercase;
  }
`;
export default connect(SliderBanner);