import { connect, styled } from "frontity";
import React from "react";
import Navbar from "./Navbar";
import SliderBanner from "./PageSlider";
import SectionOffers from "./BestOffers";
import PresentatioSection from './SectionPresentation';
import WhyChoose from './WhyChose';

const Wrapper = () => {
  return (
    <>
      <Navbar />
      <SliderBanner />
      <PpbWrapper>
        <PresentatioSection />
        <WhyChoose/>
        <SectionOffers />
      </PpbWrapper>
    </>
  );
};
const PpbWrapper = styled.div`
  margin-top: 100vh;
  position: absolute;
  width: 100%;
  left: 0;
`;
export default connect(Wrapper);
