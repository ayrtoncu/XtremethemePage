import React, { useState } from "react";
import { connect, styled, css, loadable } from "frontity";
import { Sectiondiv } from "../Components/componentsStyles";
// const Overview = loadable(() => import("../Components/Tabs/Overview"));
// const ItIncludes = loadable(() => import("../Components/Tabs/ItInclude"));
// const Itinerary = loadable(() => import("../Components/Tabs/Itinerary"));
// const TravelInfo = loadable(() => import("../Components/Tabs/TravelInfo"));
// const PackingList = loadable(() => import("../Components/Tabs/PackingList"));
import Overview from "../Components/Tabs/Overview";
import ItIncludes from "../Components/Tabs/ItIncludes";
import Itinerary from "../Components/Tabs/Itinerary";
import TravelInfo from "../Components/Tabs/TravelInfo";
import PackingList from "../Components/Tabs/PackingList";

const TabsforTours = ({ data }) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  // console.log(typeof (data))
  // console.log(typeof( data.overview))
  // titles=['overview','itinerario','includes','travel_info','packing_list ']
  console.log(data);
  return (
    <Sectiondiv>
      <ContentTabs>
        <Tabs>
          <TabsItem
            css={toggleState === 1 ? tabsitemactive : null}
            onClick={() => toggleTab(1)}
          >
            Overview{" "}
          </TabsItem>
          <TabsItem
            css={toggleState === 2 ? tabsitemactive : null}
            onClick={() => toggleTab(2)}
          >
            Itinerary
          </TabsItem>
          <TabsItem
            css={toggleState === 3 ? tabsitemactive : null}
            onClick={() => toggleTab(3)}
          >
            It Includes
          </TabsItem>
          <TabsItem
            css={toggleState === 4 ? tabsitemactive : null}
            onClick={() => toggleTab(4)}
          >
            Travel Info
          </TabsItem>
          <TabsItem
            css={toggleState === 5 ? tabsitemactive : null}
            onClick={() => toggleTab(5)}
          >
            Packing List
          </TabsItem>
        </Tabs>
        <div css={toggleState === 1 ? tabContentActive : tabContent}>
          <Overview overviewData={data.overview} />
        </div>
        <div css={toggleState === 2 ? tabContentActive : tabContent}>
          <Itinerary itineraryData={data.itinerario} />
        </div>
        <div css={toggleState === 3 ? tabContentActive : tabContent}>
          <ItIncludes itIncludesData={data.it_includes} />
        </div>
        <div css={toggleState === 4 ? tabContentActive : tabContent}>
          <TravelInfo travelData={data.travel_info} />
        </div>
        <div css={toggleState === 5 ? tabContentActive : tabContent}>
          {data.packing_list ? (
            <PackingList packingListData={data.packing_list} />
          ) : undefined}
        </div>
      </ContentTabs>
    </Sectiondiv>
  );
};
export default connect(TabsforTours);
const ContentTabs = styled.div`
  max-width: 100%;
  width: 100%;
  padding-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const Tabs = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
`;
const TabsItem = styled.button`
  margin-right: 4px;
  flex: 1 1 auto;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  line-height: 2;
  border: solid 2px #008b39;
  background-color: #ffffff;
  color: #212605;
  font-weight: 600;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
`;
let tabsitemactive = css`
  background-color: #008b39;
  color: #ffffff;
`;

let tabContent = css`
  display: none;
`;
let tabContentActive = css`
background: white;
padding: 20px;
width: 100%;
height: 100%;
display: block;
border:1px solid #d5d5d5;
border-radius:10px;
padding:1.5rem;
transition;
opacity .15s linear;
`;
