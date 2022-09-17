import React from "react";
import { connect, styled } from "frontity";
import XtremeExcellence from "../Secctions/XtremeExcellence";
import BestOffers from "../Secctions/BestOffers";
import BannerPage from "../Secctions/BannerPage";
import FooterSecction from "../Secctions/Footer";
import TabsforTours from "../Secctions/TabsforTours";
import { SpaceMaintop } from "../Components/componentsStyles";
const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  // console.log(data);
  const post = state.source[data.type][data.id];
  // console.log(post)
  //const formattedDate = dayjs (post.date).format("DD MMMM YYYY")

  return (
    <>
      <BannerPage titlepage={post.title.rendered} image={post.featured_img} />
      <SpaceMaintop>
        <SideBarContainer>
          <SideBarContent>
            <TabsforTours data={post.acf} />
          </SideBarContent>
          <SideBarRight>
            asdasdasdasdasdsa
          </SideBarRight>
        </SideBarContainer>
        {/* <h3>{post.acf.overview}</h3> */}
        <Main
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></Main>
        {/* <XtremeExcellence /> */}
        <BestOffers />
        <FooterSecction />
      </SpaceMaintop>
    </>
  );
};
export default connect(Post);
const Main = styled.div`
  margin: auto;
  max-width: 90%;
  @media (min-width: 1024px) {
    max-width: 980px;
  }
`;
const SideBarContainer = styled.div`
padding-left:15px;
padding-right: 15px;
max-width: 1300px;
zoom: 1;
line-height:0;
margin-left:auto;
margin-right: auto;
`;
const SideBarContent = styled.div`
  padding: 20px 0px 60px 0px;
  line-height:1.7;
  position: relative;
  float: none;
  display: inline-block;
  width:66.6666%;
`;
const SideBarRight = styled.div`
padding:40px 0px 30px 0px;
line-height: 1.7;
position:relative;
float:right;
width:33.3333%;   
`;