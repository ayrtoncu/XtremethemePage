import { connect } from 'frontity'
import React from 'react'

const ItIncludes = ({ itIncludesData }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: itIncludesData.excludes }}></div>
      {/* <div>{ itIncludesData.excludes}</div> */}
    </>
  )
}

export default connect(ItIncludes);