import { connect, css, styled } from "frontity";
import React from "react";
import banner from '../assets/imgs/banner/Salkantaybanner.jpg'

const GdrlCoreWrapper = () => {
  return (
    <CoreWrapper>
      <CoreBackGroundWrap />
      <div>
        <CoreWrapperContainer>
          <FirstColumn>
            <FirstContainer>
              <FirstContent>
                <div css={element}>
                  <div css={item1}>
                    <div>
                      <div>
                        <p>Ready to Travel?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div css={element}>
                  <div css={item2}>
                    <div>
                      <h3><strong>Live a new <br></br><span css={css`color:#008B39`}>Experience</span></strong></h3>
                    </div>
                  </div>
                </div>
                <div css={element}>
                  <div css={item3}>
                    <div>
                      <p>Discover amzaing places at exclusive deals.</p>
                    </div>
                  </div>
                </div>
              </FirstContent>
            </FirstContainer>
          </FirstColumn>
          <SecondColumn>
            <SecondColumnContent>
              <div css={gdlrcorbackgroundwrap}></div>
              <SecondColumnContainer>
                <div css={element}>
                  <div css={elementCoreImgItem}>
                    <div css={elementCoreImgWrap}>
                      <img src={banner}></img>
                    </div>
                  </div>
                </div>
              </SecondColumnContainer>
            </SecondColumnContent>
          </SecondColumn>
          <ElementCore>
            <div>
              <ElementCoreDivider>
              <svg viewBox="0 0 1540 314" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
<path d="M0 314V134.5C0 134.5 107 332.811 376 296C645 259.189 709.5 161.5 709.5 161.5L1140 160H1540V314H0Z" fill="white"></path>
<path d="M1256 172.039C1444 206.039 1540 296.5 1540 296.5V138C1540 138 1464.5 75.0404 1303 31.0401C1240.5 14.8677 1042 -24.959 902.5 22.5401C825 48.9286 803.5 66.04 728.5 143.54C697.344 175.734 635.5 219.5 635.5 219.5C635.5 219.5 726 256.039 822 240.039C986 220.039 1083 149.539 1256 172.039Z" fill="#008b3961"></path>
</svg>
              </ElementCoreDivider>
            </div>
          </ElementCore>
        </CoreWrapperContainer>
      </div>
    </CoreWrapper>
  );
};

export default connect(GdrlCoreWrapper);
const CoreWrapper = styled.div`
  padding: 80px 0px 0px 0px;
  position: relative;
  @media (max-width: 960px) {
    padding-top: 80px !important;
  }
`;
const CoreBackGroundWrap = styled.div`
  background-color: #f8f8f8;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -2;
  transition: border-color 300ms, border-width 100ms;
  -webkit-transition: border-color 300ms, border-width 100ms;
`;
const CoreWrapperContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1300px;
  zoom: 1;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
`;
const FirstColumn = styled.div`
  z-index: 3;
  position: relative;
  transition: border-color 200ms;
  -webkit-transition: border-color 200ms;
  clear: left;
  float: left;
  width: 75%;
`;
const FirstContainer = styled.div`
  padding: 10px 0px 0px 0px;
  position:relative;
  transition:border-color 200ms;
  -webkit-transition:border-color 200ms;
  @media(max-width: 960px;){
    margin-right:-140px !important;
  }
`;
const FirstContent = styled.div`
zoom:1;
position:relative;
margin-left:auto;
margin-right:auto;
min-height:1px;
`;
const SecondColumn = styled.div`
  z-index: 2;
  @media (max-width: 960px) {
    display: none;
  }
  position: relative;
  transition: border-color 200ms;
  -webkit-transition: border-color 200ms;
  float: left;
  width: 25%;
`;
const SecondColumnContent = styled.div`
margin:0px 0px 0px -330px;
position:relative;
transition:border-color 200ms;
-webkit-transition:border-color 200ms;
`;
const SecondColumnContainer = styled.div`
zoom:1;
position:relative;
margin-left: auto;
margin-right: auto;
min-height: 1px;
&:after{
  content:"";
  display:block;
  clear:both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}
`;
const ElementCore = styled.div`
width:100%
clear:both;
`;
const ElementCoreDivider = styled.div`
z-index:1;
-webkit-transform:rotate(0deg);
transform:rotate(0deg);
position:absolute;
bottom:-1px;
left:0;
right: 0;
overflow:hidden;
line-height:0;
`;


//Clases

let element = css`
clear:both;
`;
let elementCoreImgItem = css`
padding-left:20px;
padding-right:20px;
line-height:0;
text-align:center;
padding-bottom: 30px;
`;
let elementCoreImgWrap = css`
border-width:0px;
max-width: 550px;
height: 580px;
border-radius:20px;
-webkit-border-radius:20px;
border-color:#000;
overflow:hidden;
border-style:solid;
margin-left:auto;
margin-right:auto;
display:inline-block;
line-height:0;
position: relative;
@supports(object-fit: cover){
  img{
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}
img{
  max-width:100%;
  width: 100%;
}
`;
let item1 = css`
padding-bottom:25px;
padding-left:20px;
padding-right:20px;
text-align:left;
div{
  font-size:17px;
  font-weight:500;
  text-transform:none;
  color:#008B39;
  div{
    box-shadow:0 10px 20px rgb(10 10 10 / 5%);
    -webkit-box-shadow:0 10px 20px rgb(10 10 10 / 5%);
    padding:6px 19px 6px 19px;
    background-color:#ffffff;
    border-radius:30px;
    -webkit-border-radius:30px;
    display:inline-block;
    p{
      margin-bottom:0;
      margin-top:0;
      font-size:inherit;
      line-height:inherit;
    }
  }
}
`;
let item2 = css`
padding-left:20px;
padding-right:20px;
zoom:1;
text-align:left;
padding-bottom:30px;
&:after{
  content:"";
  display:block;
  clear:both;
  visibility:hidden;
  line-height:0;
  height: 0;
}
div{
  position:relative;
  h3{
    font-size: 84px;
    font-weight: 400;
    letter-spacing: 0px;
    text-transform: none;
    color: rgb(30, 30, 30);
    display:inline-block;
    margin-bottom:0;
    transition:color 200ms;
    -webkit-transition:color 200ms;
    font-family:"DM Serif Display",serif;
    @media(max-width: 450px){
      font-size: 56px;
    }
  }
}
`;
let item3 = css`
padding-bottom:80px;
padding-left:20px;
padding-right: 20px;
text-align:left;
div{
  font-size:20px;
  text-transform: none;
  p{
    margin-bottom:0;
    margin-top:0;
    font-size:inherit;
    line-height:inherit;
    color:#8c8c8c;
  }
}
`;

let gdlrcorbackgroundwrap = css`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
overflow:hidden;
z-index:-2;
transition:border-color 300ms,border-width 100ms;
-webkit-transition:border-color 300ms,border-width 100ms;
`;