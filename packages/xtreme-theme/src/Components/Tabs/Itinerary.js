import { connect } from 'frontity'
import React from 'react'

const Itinerary = ({ itineraryData }) => {
  console.log(itineraryData[0])
  return (
    <>
      {/* <div dangerouslySetInnerHTML={{ __html: itineraryData }}></div> */}
    </>
  )
}

export default connect(Itinerary)