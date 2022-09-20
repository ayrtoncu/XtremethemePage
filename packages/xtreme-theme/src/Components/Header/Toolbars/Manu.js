import { connect, styled, css } from "frontity";
import Link from "@frontity/components/link";
import React from "react";
import puno8days from "../../../assets/imgs/nav-imgs/CUSCO-PUNO-8-DAYS.jpg";
const Manu = () => {
  return (
    <ContainerFlex>
      <Column>
        <Title>Manu Zona Reservada</Title>
        <List>
          <Item>
            <Link link="/trip/manu-zone-reserve-natural-8d-7n">Manu Zone Reserved Natural Paradise 8 Days</Link>
          </Item>
        </List>
      </Column>
      <Column>
        <Title>Manu Zona Cultural</Title>
        <List>
          <Item>
            <Link link="/trip/manu-tour-amazon-cultural-zone-4d-3n">Tour Manu Amazon Cultural 4 Days</Link>
          </Item>
        </List>
      </Column>
      <Column>
        <Title>Tours en Tambopata</Title>
        <List>
          <Item>
            <Link>Tour Tambopata</Link>
          </Item>
        </List>
      </Column>
    </ContainerFlex>
  );
};
export default connect(Manu);

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
const Item = styled.div`
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
