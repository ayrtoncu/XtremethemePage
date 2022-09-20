import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import React from "react";
const AlternativeTrek = () => {
  return (
    <ContainerFlex>
      <Column1>
        <Title>Salkantay Trek</Title>
        <Item><Link link="/trip/salkantay-trek-4-days-machu-picchu">Salkantay Trek Machu Picchu 4 Days</Link></Item>
        <Item><Link link="/trip/salkantay-trek-5-days-machu-picchu">Salkantay Trek Machu Picchu 5 Days</Link></Item>
        <Item><Link link="/trip/salkantay-trek-inca-trail-machu-picchu-6-days">Salkantay Trek Inca Trail Machu Picchu 6 Days</Link></Item>
        <Title>Lares Trek</Title>
        <Item><Link link="/trip/lares-trek-machu-picchu-4-days">Lares Trek Machu Picchu 4 Days</Link></Item>
        <Item><Link link="/trip/lares-trek-short-inca-trail-machu-picchu-4-days">Lares Trek - Short Inca Trail Machu Picchu 4 Days</Link></Item>
      </Column1>
      <Column2>
        <Title>Choquequirao Trek</Title>
        <Item><Link link="/trip/choquequirao-trek-huanipaca-4-days">Choquequirao - Huanicapa 4 Days</Link></Item>
        <Item><Link link="/trip/choquequirao-to-machu-picchu-trek-6-days">Choquequirao to Machu Picchu Trek 6 Days</Link></Item>
        <Item><Link link="/trip/choquequirao-trek-machu-picchu-8-days">Choquequirao to Machu Picchu 8 Days</Link></Item>
        <Title>Inca Jungle Trek</Title>
        <Item><Link link="/trip/inka-jungle-trail-machu-picchu-3-days">Inca Jungle Trail Machu Picchu 3 Days</Link></Item>
        <Item><Link link="/trip/inka-jungle-trail-machu-picchu-4-days">Inca Jungle Trail Machu Picchu 4 Days</Link></Item>
      </Column2>
      <Column3>
        <Title>Huchuy Qosqo Trek</Title>
        <Item><Link link="/trip/huchuy-qosqo-to-machu-picchu-2-days">Huchuy Qosqo to Machu Picchu 2 Days</Link></Item>
        <Item><Link link="/trip/huchuy-qosqo-trek-sacred-valley-2-days">Huchuy Qosqo Trek - Sacred Valley 2 Days</Link></Item>
        <Item><Link link="/trip/huchuy-qosqo-sacred-valley-with-machupicchu-03-days">Huchuy Qosqo Sacred Valley with Machu Picchu 3 Days</Link></Item>
        <Title>Ausangate Trek</Title>
        <Item><Link link="/trip/ausangate-trek-4-days">Ausangate Trek 4 Days</Link></Item>
        <Item><Link link="/trip/ausangate-trek-5-days">Ausangate Trek 5 Days</Link></Item>
        <Item><Link link="/trip/ausangate-trek-with-rainbow-mountain-5-days">Ausangate Trek With Rainbow</Link></Item>
      </Column3>
    </ContainerFlex>
  );
};
export default connect(AlternativeTrek);

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
  max-width: 33.333%;
  flex: 0 0 33.333%;
  -webkit-box-flex: 0;
  padding-right: 3.5rem;
  padding-left: 0;
`;
const Column2 = styled.div`
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  position: relative;
  flex: 0 0 33.333%;
  -webkit-box-flex: 0;
  max-width: 33.333%;
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