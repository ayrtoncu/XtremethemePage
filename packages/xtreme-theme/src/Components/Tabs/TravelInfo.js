import { connect, css, styled } from "frontity";
import React, { useState } from "react";
import iconOpen from "../../Icons/menuicons/expand_more_black_24dp.svg";
import iconClose from "../../Icons/menuicons/expand_less_black_24dp.svg";

const TravelInfo = ({ travelData }) => {
  return (
    <>
      {travelData ? (
        <>
          {travelData.map(function (info, index) {
            return <Slider key={index} dataTravel={info} />;
          })}
        </>
      ) : undefined}
    </>
    // <div dangerouslySetInnerHTML={{ __html: travelData.travelData }}></div>
  );
};
export default connect(TravelInfo);

//slider
const Slider = ({ dataTravel }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <div>
      <div css={sidebarLink} onClick={dataTravel.text_info && showSubnav}>
        <div>
          {/* {item.icon} */}
          <SidebarLabel>{dataTravel.title_info}</SidebarLabel>
        </div>
        <div>
          {dataTravel.text_info && subnav ? (
            <IconOpen />
          ) : <div
              dangerouslySetInnerHTML={{ __html: dataTravel.text_info }}
            ></div> ? (
            <IconClose />
          ) : null}
        </div>
      </div>
      {subnav && (
        <div css={dropdownLink}>
          <div dangerouslySetInnerHTML={{ __html: dataTravel.text_info }}></div>
        </div>
      )}
    </div>
  );
};

const IconClose = () => {
  return <img src={iconOpen} />;
};
const IconOpen = () => {
  return <img src={iconClose} />;
};
const SidebarLabel = styled.span`
  margin-left: 16px;
  -webkit-line-clamp: 2 !important;
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;
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
