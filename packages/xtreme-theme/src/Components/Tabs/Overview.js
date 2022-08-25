import { connect, Global, styled, css } from "frontity";
import React from "react";
import radioicon from '../../assets/icons/radio_button.svg'

const Overview = ({ overviewData }) => {
  return (
    <OverviewContent>
      <div dangerouslySetInnerHTML={{ __html: overviewData }}></div>
    </OverviewContent>
  );
};
export default connect(Overview);

const OverviewContent = styled.div`
  h2 {
    font-weight: bold;
    text-transform: uppercase;
    color: #008B39;
  }
  h3 {
    font-weight: bold;
  }
  h4 {
    font-weight: bold;
    font-size: 20px;
  }
  p {
    font-size: 15px;
    padding:0 1.1rem;
  }
  ul{
    list-style: none;
    padding-left: 2rem;
    li{
      animation-delay:0.5s;
      position: relative;
      border-bottom:solid 1px #f3f3f3;
      padding-top:20px;
      h3{
        color:#212605;
        margin: 0;
      }
      div{
        padding: 1.1rem;
        p{
          transition:all 0.25s ease-in-out;
          margin-bottom:20px;
        }
      }
    }
    li::after{
      width:20px;
      height: 20px;
      left: -30px;
      top:20px;
      background-repeat:no-repeat;
      font-size:20px;
      background-color: #ffffff;
      position:absolute;
      content: url(${radioicon});
    }
    li::before{
      padding-top:0;
      top:20px;
      left:-21px;
      position: absolute;
      content:"";
      border-left:1px solid #d5d5d5;
      width:0;
      height:100%;
    }
  }
`;
