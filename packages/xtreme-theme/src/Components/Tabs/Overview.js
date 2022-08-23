import { connect, Global, styled,css } from 'frontity';
import React from 'react'

const Overview = ({ overviewData }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: overviewData }}></div>
      </>
  );
}
export default connect(Overview)

