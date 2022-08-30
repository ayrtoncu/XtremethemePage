import { connect, css, styled } from "frontity";
import React, { useState } from "react";
import iconOpen from "../../Icons/menuicons/expand_more_white_24dp.svg";
import iconClose from "../../Icons/menuicons/expand_less_white_24dp.svg";

const Itinerary = ({ itineraryData }) => {
  // console.log(itineraryData);
  return (
    <>
      {itineraryData.map(function (dayitinerario, index) {
        return <Slider dataDayItinerary={dayitinerario} />;
      })}
    </>
  );
};

export default connect(Itinerary);

//slider
const Slider = ({ dataDayItinerary }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <div>
      <div css={sidebarLink} onClick={dataDayItinerary.itinerario_content && showSubnav}>
        <div>
          {/* {item.icon} */}
          <SidebarLabel>{dataDayItinerary.title_itinetary}</SidebarLabel>
        </div>
        <div>
          {dataDayItinerary.itinerario_content && subnav
            ? <IconClose/>
            : dataDayItinerary.itinerario_content
            ? <IconOpen/>
            : null}
        </div>
      </div>
      {subnav&&<div css={dropdownLink}>
        {dataDayItinerary.itinerario_content}
      </div>}
    </div>
  );
};

const IconClose = () => {
  return (
    <img src={ iconOpen} />
  )
}
const IconOpen = () => {
  return (
    <img src={ iconClose} />
  )
}

const SidebarLabel = styled.span`
  margin-left: 16px;
`;
let sidebarLink = css`
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 8%), 0 2px 10px 0 rgb(0 0 0 / 2%);
  margin-top: 7px;
  border-left: solid 5px #008b39;
  display: flex;
  color: #000;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;

let dropdownLink = css`
  background-color: #fff;
  height: auto;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 18px;
  border-left: solid 5px #008b39;

  &:hover {
    // background: #632ce4;
  }
`;
