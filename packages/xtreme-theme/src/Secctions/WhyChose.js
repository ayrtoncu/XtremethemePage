import { connect, styled } from "frontity";
import React from "react";
import machupicchu from "../assets/imgs/banner/machupicchu.jpg";
const WhyChoose = () => {
  return (
    <Section>
      <ContentChoose>
        <h2> Why Choose Xtreme Tourbulencia</h2>
        <ServiceContentWrapper>
          <OneThird>
            <ServiceWrapper>
              <ServiceIcon></ServiceIcon>
              <ServiceTitle>
                <h3>World Class Service</h3>
                <ServiceContent>
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                  commodo ligula eget dolor. Aenean massa
                </ServiceContent>
              </ServiceTitle>
            </ServiceWrapper>
          </OneThird>
          <OneThird>
            <ServiceWrapper>
              <ServiceIcon></ServiceIcon>
              <ServiceTitle>
                <h3>World Class Service</h3>
                <ServiceContent>
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                  commodo ligula eget dolor. Aenean massa
                </ServiceContent>
              </ServiceTitle>
            </ServiceWrapper>
          </OneThird>
          <OneThirdLast>
            <ServiceWrapper>
              <ServiceIcon></ServiceIcon>
              <ServiceTitle>
                <h3>World Class Service</h3>
                <ServiceContent>
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                  commodo ligula eget dolor. Aenean massa
                </ServiceContent>
              </ServiceTitle>
            </ServiceWrapper>
          </OneThirdLast>
        </ServiceContentWrapper>
      </ContentChoose>
    </Section>
  );
};
const Section = styled.div`
  padding: 60px 0 60px 0;
  float: left;
  width: 100%;
  clear: both;
  position: relative;
  background-image: url(${machupicchu});
  box-sizin: border-box;
  background-size: cover;
  background-position: center;
  background-color: #000;
`;
const ContentChoose = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
  z-index: 2;
  margin-top: 0;
  padding-top: 40px !important;
  width: 90%;
  margin: auto;
  padding-bottom: 0;
  h2 {
    font-family:'Raleway';
    color: #fff;
    position: relative;
    margin-top: 10px;
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    text-transform: uppercase;
    margin-bottom: 5px;
    padding-bottom: 20px;
  }
  @media (min-width:1020px){
    width: 960px;
  }
`;
const ServiceContentWrapper = styled.div`
  margin: 30px 0 0 0;
  width: 100%;
  float: left;
  color: #666;
`;
const OneThird = styled.div`
  width: 100%;
  float: left;
  margin-right: 4%;
  position: relative;
  margin-bottom:2%;
  @media (min-width:780px){
    width: 30.66%;
  }
`;
const OneThirdLast = styled.div`
  width: 100%;
  float: right;
  margin-right: 0 !important;
  position: relative;
  margin-bottom:2%;
  @media (min-width:780px){
    width: 30.66%;
  }
`;
const ServiceWrapper = styled.div`
  margin: 0 0 10px 0;
  padding: 0 0 10px 0;
`;
const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  animation-fill-mode: forwards;
  text-align:center;
  overflow: hidden;
  float:none;
  position:absolute;
  left: 50%;
  top:-30px;
  margin: 0 0 0 -30px;
  border-radius:100px;
  box-sizing:content-box;
  font-size 20px;
  line-height:24px;
  background: #2c8246;
`;
const ServiceTitle = styled.div`
  padding: 50px 20px 20px 20px;
  box-sizing: border-box;
  margin-top: 0!important;
  text-align: center;
  background: #fff;
  width: 60%;
  margin: 0 auto 15px auto;
  h3 {
    font-size: 16px;
    color: #000 !important;
  }
  @media (min-width:780px){
    width: 100%;
    margin: 0 0 15px 0;
  }
`;
const ServiceContent = styled.div`
  clear: both;
  margin-top: 5px;
`;
export default connect(WhyChoose);
