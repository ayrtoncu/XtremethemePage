import { connect } from 'frontity'
import React from 'react'

const Itinerary = ({ itineraryData }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: itineraryData[0].title_itinetary }}></div>
    </>
  )
}

export default connect(Itinerary)