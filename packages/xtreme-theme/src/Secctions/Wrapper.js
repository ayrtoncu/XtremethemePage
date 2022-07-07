import { connect } from 'frontity';
import React from 'react';
import Navbar from './Navbar';
import SliderBanner from './PageSlider';

const Wrapper = () => {
  return (
    <>
      <Navbar />
      <SliderBanner/>
    </>
  )
}

export default connect(Wrapper);