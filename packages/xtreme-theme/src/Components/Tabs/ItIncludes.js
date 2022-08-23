import { connect } from 'frontity'
import React from 'react'

const ItIncludes = ({ itIncludesData }) => {
  console.log(itIncludesData)
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: itIncludesData }}></div>
    </>
  )
}

export default connect(ItIncludes);