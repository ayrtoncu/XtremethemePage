import { connect, styled, css } from "frontity";
import Link from "@frontity/components/link";
import React from "react";
import incatrailphoto from '../../../assets/imgs/nav-imgs/inca-trail-shortPhoto.jpg'

const IncaTrail = () => {
  return (
    <ContainerFlex>
      <Column1>
        <Title>INCA TRAIL PACKAGES</Title>
        <List>
          <Item>
            <Link link="/trip/short-inca-trail-machu-picchu-2-days-trek/">Short Inca Trail Machu Picchu 2 Days Trek</Link>
          </Item>
          <Item>
            <Link link="/trip/inca-trail-to-machu-picchu-4-days">Inca Trail to Machu Picchu 4 Days</Link>
          </Item>
          <Item>
            <Link link="/trip/private-inca-trail-2-days">Private Inca Trail 2 Days</Link>
          </Item>
          <Item>
            <Link link="/trip/private-inca-trail-4-days">Private Inca Trail 4 Days</Link>
          </Item>
          <Item>
            <Link link="/trip/salkantay-trek-inca-trail-machu-picchu-6-days">Salkantay Trek - Inca Trail Machu Picchu 6 Days</Link>{" "}
          </Item>
        </List>
      </Column1>
      <Column2>
        <Title>INCA TRAIL TO MACHUPICCHU</Title>
        <p css={desciption}>
        Inca Trail Tours to Machu Picchu, the most emblematic Inca architectural work perched on a hill in a meander of the Urubamba River, accessible to authorized officials of the Empire and the Inca through a beautiful path starting from Cusco and passing through several incredible constructions and the sacredness is increased when it approached the Citadel of Machu Picchu.Inca Trail Hiking
        </p>
      </Column2>
      <Column3>
        <img src={incatrailphoto} alt='inca-trail-photo'></img>
      </Column3>
    </ContainerFlex>
  );
};
export default connect(IncaTrail);

const ContainerFlex = styled.div`
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1360px;
  width: 100%;
  display: flex;
  margin:auto;
`;
const Column1 = styled.div`
  position: relative;
  max-width: 25%;
  flex: 0 0 25%;
  -webkit-box-flex: 0;
  padding-right: 3.5rem;
  padding-left: 0;
`;
const Column2 = styled.div`
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  position: relative;
  flex: 0 0 41.666667%;
  -webkit-box-flex: 0;
  max-width: 41.666667%;
`;
const Column3 = styled.div`
  padding-left: 3.5rem;
  padding-right: 0;
  max-width: 33.333333%;
  flex: 0 0 33.333333%;
  -webkit-box-flex: 0;
  position: relative;
  img{
    width:100%;
    padding:10px;
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
  a{
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
    border-bottom: 1px solid #008B39;
    width: 5rem;
    bottom: 0;
    left: 0;
  }
`;
let desciption = css`
font-size: 15px;
color: #888;
`;
