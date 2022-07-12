import React from "react";
import { connect, styled } from "frontity";
import XtremeExcellence from "../Secctions/XtremeExcellence";
import BestOffers from "../Secctions/BestOffers";
const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  //const formattedDate = dayjs (post.date).format("DD MMMM YYYY")

  return (
    <>
      <Main dangerouslySetInnerHTML={{ __html: post.content.rendered }}></Main>
      <XtremeExcellence />
      <BestOffers/>
    </>
  );
};
export default connect(Post);
const Main = styled.div`
  margin: auto;
  max-width: 960px;
`;
