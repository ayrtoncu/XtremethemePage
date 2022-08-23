import { connect } from 'frontity'
import React from 'react'

const ItIncludes = ({ itIncludesData }) => {
  console.log(itIncludesData.excludes)
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: itIncludesData.excludes }}></div>
      {/* <div>{ itIncludesData.excludes}</div> */}
    </>
  )
}

export default connect(ItIncludes);