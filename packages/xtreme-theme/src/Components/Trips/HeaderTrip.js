import { connect, styled } from "frontity";
import React from "react";
import guest from "../../assets/imgs/tours/details/guest.png";
import time from "../../assets/imgs/tours/details/icon-time.png";
import mountain from "../../assets/imgs/tours/details/icons-mountain.png";
import activitylevel from "../../assets/imgs/tours/details/activity-difficulty.svg";

const HeaderTrip = ({ titletrip,timetrip,sizetrip,altitudetrip, activitylvltrip}) => {
  return (
    <>
      <ColumDetail>
        <DetailsTrips>
          <TourTitleItem>{titletrip}</TourTitleItem>
        </DetailsTrips>
      </ColumDetail>
      <ColumDetail>
        <DetailsTrips>
          <Details>
            <DetailsItem>
              <IconDetail>
                <img src={time} />
              </IconDetail>
              <TextDetail>
                <span>{timetrip} Days {timetrip-1} Nights</span>
              </TextDetail>
            </DetailsItem>
            <DetailsItem>
              <IconDetail>
                <img src={guest} />
              </IconDetail>
              <TextDetail>
                <span>Max Guests : {sizetrip}</span>
              </TextDetail>
            </DetailsItem>
            <DetailsItem>
              <IconDetail>
                <img src={mountain} />
              </IconDetail>
              <TextDetail>
                <span>Max. Altitude : {altitudetrip.min_altitud} - {altitudetrip.max_altitud}m</span>
              </TextDetail>
            </DetailsItem>
            <DetailsItem>
              <IconDetail>
                <img src={activitylevel} />
              </IconDetail>
              <TextDetail>
                <span>Act. Level: {activitylvltrip}</span>
              </TextDetail>
            </DetailsItem>
          </Details>
        </DetailsTrips>
      </ColumDetail>
    </>
  );
};

export default connect(HeaderTrip);
const ColumDetail = styled.div`
  width: 100%;
  position: relative;
  transition: border-color 200ms;
  -webkit-transition: border-color 200ms;
  clear: left;
  float: none;
  line-height: 1;
`;
const DetailsTrips = styled.div`
  zoom: 1;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 30px;
  text-align: left;
`;

const TourTitleItem = styled.h1`
  font-size: 40px;
  font-weight: 400;
  text-transform: none;
  margin-bottom: 15px;
  font-family: "DM Serif Display", serif;
`;

const Details = styled.ul`
  width: 900px;
  margin-left: 0;
  margin-bottom: 0;
  list-style:none;
`;
const DetailsItem = styled.li`
  padding-top: 0;
  clear: none;
  height: auto;
  opacity: 1;
  margin-bottom: 10px;
  zoom: 1;
  float: left;
  width: 25%;
  line-height:1.7;
  @media(max-width: 960px;){
    width: 100%;
  }
`;
const IconDetail = styled.div`
  margin-top: 2px;
  margin-right: 14px;
  float: left;
  vertical-align: middle;
  position: relative;
  line-height: 1;
  img {
    width: 25px;
  }
`;
const TextDetail = styled.div`
overflow:hidden;
span{
  color:#6d6d6d;
  font-size:17px;
  font-weight:400;
  display:block;
}
`;
