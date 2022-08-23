import { connect } from 'frontity';
import React from 'react';

const TravelInfo = (travelData) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: travelData.travelData }}></div>
  )
}
export default connect(TravelInfo)