import { connect, styled } from "frontity";
import React from "react";
import Navbar from "./Navbar1";
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
import MobileWrap from "./MobileWrap";
import GdrlCoreWrapper from "./GdrlCoreWrapper";


const Wrapper = () => {
  return (
    <>
      <GdrlCoreWrapper/>
      {/* <SliderBanner /> */}
      <PpbWrapper>
        <PresentatioSection />
        <WhyChoose />
        <AlternativeTreks/>
        <XtremeExcellence />
        <SectionOffers />
        <SocialXtreme/>
        <DayliTours />
        <Certifications/>
        <FooterSecction />
      </PpbWrapper>
    </>
  );
};
const PpbWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
`;
export default connect(Wrapper);