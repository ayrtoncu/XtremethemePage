import { connect, styled, css } from "frontity";
import Link from "@frontity/components/link";
import React from "react";
import qeswachaka from "../../../assets/imgs/nav-imgs/Qeswachaka-tour.jpg"
const DayliTours = () => {
  return (
    <ContainerFlex>
      <Column>
        <Title>Daily Tours in Cusco</Title>
        <p css={desciption}></p>
      </Column>
      <Column>
        <img src={qeswachaka}></img>
      </Column>
      <Column>
        <Title>Dayli Tours</Title>
        <List>
          <Item>
            <Link link="/trip/humantay-lake-1-day">Humantay Lake</Link>
          </Item>
          <Item>
            <Link link="/trip/rainbow-mountain-vinicunca">The Rainbow Mountain</Link>
          </Item>
          <Item>
            <Link link="/trip/sacred-valley-tour-full-day">Sacred Valley</Link>
          </Item>
          <Item>
            <Link link="/trip/full-day-tour-of-qeswachaka-inca-bridge">Qeswachaka Inca Bridge</Link>
          </Item>
          <Item>
            <Link link="/trip/waqrapukara-trek-tour">Waqrapukara</Link>
          </Item>
        </List>
      </Column>
    </ContainerFlex>
  );
};
export default connect(DayliTours);

const ContainerFlex = styled.div`
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1360px;
  width: 100%;
  display: flex;
  margin: auto;
`;
const Column = styled.div`
  position: relative;
  max-width: 33.333%;
  flex: 0 0 33.333%;
  -webkit-box-flex: 0;
  padding-right: 3.5rem;
  padding-left: 0;
  img {
    width: 100%;
    padding: 10px;
  }
`;
const List = styled.div`
  display: flex !important;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  flex-direction: column !important;
`;
let Item = styled.div`
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  max-width: 35rem;
  height: 36px;
  a {
    font-size: 14px;
    color: #888;
  }
`;
const Title = styled.h3`
  position: relative;
  color: #333;
  font-size: 16px;
  text-transform: uppercase;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-weight: 400;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    bottom: 0;
    left: 0;
  }
  ::after {
    content: "";
    position: absolute;
    border-bottom: 1px solid #008b39;
    width: 5rem;
    bottom: 0;
    left: 0;
  }
`;
let desciption = css`
  font-size: 15px;
  color: #888;
`;
