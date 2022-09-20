import { connect, styled, css } from "frontity";
import React from "react";
import Link from "@frontity/components/link";

const AboutUs = () => {
  return (
    <ContainerFlex>
      <Column></Column>
      <Column></Column>
      <Column>
        <List>
          <Item>
            <Link>Our Offices</Link>
          </Item>
          <Item>
            <Link>Why Xtreme Tourbulencia</Link>
          </Item>
          <Item>
            <Link>Yellow Team</Link>
          </Item>
          <Item>
            <Link>Responsible Tourism</Link>
          </Item>
          <Item>
            <Link>Our Team</Link>
          </Item>
          <Item>
            <Link>Awards received</Link>
          </Item>
        </List>
      </Column>
      <Column>
        <List>
          <Item>
            <Link>Book Your</Link>
          </Item>
          <Item>
            <Link>How to make a Booking</Link>
          </Item>
          <Item>
            <Link>Optional and Rent</Link>
          </Item>
          <Item>
            <Link>Hiking Tours Calendars</Link>
          </Item>
          <Item>
            <Link>Terms and Conditions</Link>
          </Item>
          <Item>
            <Link>Personal Data Proteccion Policy</Link>
          </Item>
        </List>
      </Column>
    </ContainerFlex>
  );
};
export default connect(AboutUs);

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
  max-width: 25%;
  flex: 0 0 25%;
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
