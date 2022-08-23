import { connect } from 'frontity';
import React from 'react'

const PackingList = ({ packingListData }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: packingListData }}></div>
  );
}

export default connect(PackingList)