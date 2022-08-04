import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import BannerPage from "../Secctions/BannerPage";
import FooterSecction from "../Secctions/Footer";
import cuscobanner from "../assets/imgs/banner/bannerCusco.jpg";

const Page = ({ state, styled }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  console.log(page);
  const [imagebanner, setimagebanner] = React.useState("");
  const image = page.featured_img;
  console.log(image);
  console.log(page.title.rendered);
  useEffect(() => {
    image == false ? setimagebanner(cuscobanner) : setimagebanner(image);
  }, []);
  console.log(imagebanner);
  return (
    <>
      <Main>
        <BannerPage image={imagebanner} titlepage={page.title.rendered} />
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
