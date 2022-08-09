import { connect, styled } from "frontity";
import React from "react";
import Navbar from "./Navbar";
import SliderBanner from "./PageSlider";
import SectionOffers from "./BestOffers";
import PresentatioSection from './SectionPresentation';
import WhyChoose from './WhyChose';
import FooterSecction from './Footer';
import XtremeExcellence from "./XtremeExcellence";
import Certifications from "./CertificationsSection";
import DayliTours from "./DayliTours";
import SocialXtreme from "./SocialXtreme";
import AlternativeTreks from "./AlternativeTreks";
import TripadvisorReviews from "./Tripadvisor";


const Wrapper = () => {
  return (
    <>
      <SliderBanner />
      <PpbWrapper>
        <PresentatioSection />
        <WhyChoose />
        <AlternativeTreks/>
        <XtremeExcellence />
        <SectionOffers />
        <SocialXtreme/>
        <DayliTours />
        <TripadvisorReviews/>
        <Certifications/>
        <FooterSecction />
        
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
