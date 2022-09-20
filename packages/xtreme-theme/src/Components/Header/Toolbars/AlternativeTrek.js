import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import React from "react";
const AlternativeTrek = () => {
  return (
    <ContainerFlex>
      <Column1>
        <Title>Salkantay Trek</Title>
        <Item><Link>Salkantay Trek Machu Picchu 4 Days</Link></Item>
        <Item><Link>Salkantay Trek Machu Picchu 5 Days</Link></Item>
        <Title>Lares Trek</Title>
        <Item><Link>Lares Trek Machu Picchu 4 Days</Link></Item>
        <Item><Link>Lares Trek - Inca Trail Machu Picchu 4 Days</Link></Item>
      </Column1>
      <Column2>
        <Title>Choquequirao Trek</Title>
        <Item><Link>Choquequirao - Huanicapa 4 Days</Link></Item>
        <Item><Link>Choquequirao to Machu Picchu Trek 6 Days</Link></Item>
        <Title>Inca Jungle Trek</Title>
        <Item><Link>Inca Jungle Trail Machu Picchu 3 Days</Link></Item>
        <Item><Link>Inca Jungle Trail Machu Picchu 4 Days</Link></Item>
      </Column2>
      <Column3>
        <Title>Huchuy Qosqo Trek</Title>
        <Item><Link>Huchuy Qosqo to Machu Picchu 2 Days</Link></Item>
        <Item><Link>Huchuy Qosqo Trek - Sacred Valley 2 Days</Link></Item>
        <Title>Ausangate Trek</Title>
        <Item><Link>Ausangate Trek 4 Days</Link></Item>
        <Item><Link>Ausangate Trek 5 Days</Link></Item>
        <Item><Link>Ausangate Trek With Rainbow</Link></Item>
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
const Title = styled.h3`
  position: relative;
  color: #333;
  font-size: 15px;
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
    font-size: 13px;
    color: #888;
  }
`;