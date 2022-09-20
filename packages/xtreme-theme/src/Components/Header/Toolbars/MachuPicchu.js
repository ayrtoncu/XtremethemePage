import { connect, styled, css } from "frontity";
import Link from "@frontity/components/link";
import React from "react";
import machupicchuimg from "../../../assets/imgs/banner/machupicchu.jpg"
const MachuPicchu = () => {
  return (
    <ContainerFlex>
      <Column1>
        <Title>Departures to Machu Picchu</Title>
        <List>
          <Item>
            <Link link="/trip/machu-picchu-full-day-tour">Machu Picchu Full Day Tour</Link>
          </Item>
          <Item>
            <Link link="/trip/machu-picchu-with-overnight">Machu Picchu With Overnight</Link>
          </Item>
          <Item>
            <Link link="/trip/machu-picchu-sacred-valley-tours-2-days">Machu Picchu - Sacred Valley 2 Days</Link>
          </Item>
        </List>
      </Column1>
      <Column2>
        <Title>Machu Picchu</Title>
        <p css={desciption}>
        The location of Machu Picchu, in the middle of the canyon of the Urubamba River, couldn’t have been chosen better. You can clearly see that Machu Picchu is a construction site designed precisely to fit the landscape around it.
        </p>
      </Column2>
      <Column3>
        <img src={machupicchuimg} alt="machupicchu"></img>
      </Column3>
    </ContainerFlex>
  );
};
export default connect(MachuPicchu);

const ContainerFlex = styled.div`
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1360px;
  width: 100%;
  display: flex;
  margin: auto;
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