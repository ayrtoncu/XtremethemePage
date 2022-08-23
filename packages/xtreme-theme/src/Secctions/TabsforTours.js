import React, {useState} from "react";
import { connect, styled,css } from "frontity";
import { Sectiondiv, Container } from "../Components/componentsStyles";
import Overview from "../Components/Tabs/Overview";
import ItIncludes from "../Components/Tabs/ItIncludes";
import Itinerary from "../Components/Tabs/Itinerary";
import TravelInfo from "../Components/Tabs/TravelInfo";
import PackingList from "../Components/Tabs/PackingList";

const TabsforTours = ({data}) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  // console.log(typeof (data))
  console.log(typeof( data.overview))
  // titles=['overview','itinerario','includes','travel_info','packing_list ']
  // console.log(data.itinerario)
  return (
    <Sectiondiv>
      <Container>
        <div className="tab">
          <button onClick={() => toggleTab(1)}>Overview </button>
          <button onClick={() => toggleTab(2)}>Itinerary</button>
          <button onClick={() => toggleTab(3)}>It Includes</button>
          <button onClick={() => toggleTab(4)}>Travel Info</button>
          <button onClick={() => toggleTab(5)}>Packing List</button>
        </div>
        <div css={toggleState === 1 ? tabContentActive : tabContent}>
          <Overview overviewData={data.overview}/>
        </div>
        <div css={toggleState === 2 ? tabContentActive : tabContent}>
          <Itinerary itineraryData={data.itinerario}/>
        </div>
        <div css={toggleState === 3 ? tabContentActive : tabContent}>
          <ItIncludes itIncludesData={data.it_includes}/>
        </div>
        <div css={toggleState === 4 ? tabContentActive : tabContent}>
          <TravelInfo travelData={data.travel_info}/>
        </div>
        <div css={toggleState === 5 ? tabContentActive : tabContent}>
          <PackingList packingListData={data.packing_list}/>
        </div>
      </Container>
    </Sectiondiv>
  );
};
export default connect(TabsforTours);

let tabContent = css`
background: white;
padding: 20px;
width: 100%;
height: 100%;
display: none;
`;
let tabContentActive = css`
display: block;
`;