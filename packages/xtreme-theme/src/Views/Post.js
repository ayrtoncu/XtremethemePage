import React from "react";
import { connect, styled } from "frontity";
import XtremeExcellence from "../Secctions/XtremeExcellence";
import BestOffers from "../Secctions/BestOffers";
import BannerPage from "../Secctions/BannerPage";
import FooterSecction from '../Secctions/Footer';
const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  console.log(post);
  //const formattedDate = dayjs (post.date).format("DD MMMM YYYY")

  return (
    <>
      <BannerPage
        titlepage={post.title.rendered}
        image={post.featured_img}
      />
      <Main dangerouslySetInnerHTML={{ __html: post.content.rendered }}></Main>
      <XtremeExcellence />
      <BestOffers />
      <FooterSecction/>
    </>
  );
};
export default connect(Post);
const Main = styled.div`
  margin: auto;
  max-width: 90%;
  margin-top: 85vh;
  @media(min-width: 1024px){
    max-width: 980px;
  }
`;
