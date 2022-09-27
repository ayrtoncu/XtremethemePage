import { connect, styled, loadable } from "frontity";

// import SectionOffers from "./BestOffers";
// import PresentatioSection from './SectionPresentation';
// import WhyChoose from './WhyChose';
// import FooterSecction from './Footer';
// import XtremeExcellence from "./XtremeExcellence";
// import Certifications from "./CertificationsSection";
// import DayliTours from "./DayliTours";
// import SocialXtreme from "./SocialXtreme";
// import AlternativeTreks from "./AlternativeTreks";
// import GdrlCoreWrapper from "./GdrlCoreWrapper";

const SectionOffers = loadable(() => import('./BestOffers'));
const PresentatioSection = loadable(() => import('./SectionPresentation'));
const WhyChoose = loadable(() => import('./WhyChose'));
const FooterSecction = loadable(() => import('./Footer'));
const XtremeExcellence = loadable(() => import('./XtremeExcellence'));
const Certifications = loadable(() => import('./CertificationsSection'));
const DayliTours = loadable(() => import('./DayliTours'));
const SocialXtreme = loadable(() => import('./SocialXtreme'));
const AlternativeTreks = loadable(() => import('./AlternativeTreks'));
const GdrlCoreWrapper = loadable(() => import('./GdrlCoreWrapper'));



const Wrapper = () => {
  return (
    <>
      <GdrlCoreWrapper/>
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