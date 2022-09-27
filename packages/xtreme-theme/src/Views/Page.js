import React, { useEffect } from "react";
import { connect, styled, loadable } from "frontity";
const BannerPage = loadable(() => import("../Secctions/BannerPage"));
// import BannerPage from "../Secctions/BannerPage";
const FooterSecction = loadable(() => import("../Secctions/Footer"));
// import FooterSecction from "../Secctions/Footer";
// import cuscobanner from "../assets/imgs/banner/bannerCusco.jpg";
const cuscobanner = loadable(() =>
  import("../assets/imgs/banner/bannerCusco.jpg")
);

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  // console.log(page);
  const [imagebanner, setimagebanner] = React.useState("");
  const image = page.featured_img;
  useEffect(() => {
    image == false ? setimagebanner(cuscobanner) : setimagebanner(image);
  }, []);
  return (
    <>
      <BannerPage image={imagebanner} titlepage={page.title.rendered} />
      <Main>
        <ContentInnner>
          <h2>{page.title.rendered} </h2>
          <div
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          ></div>
        </ContentInnner>
      </Main>
      <FooterSecction />
    </>
  );
};
export default connect(Page);
const Main = styled.div`
  margin: auto;
  max-width: 90%;
  @media (min-width: 1024px) {
    max-width: 980px;
  }
`;

//styles
const ContentInnner = styled.div`
  margin-top: 85vh;
`;
