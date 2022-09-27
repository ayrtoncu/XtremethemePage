import { connect ,css, styled} from 'frontity';
import React from 'react';
import checkIcon from '../../assets/icons/check-icon.svg'

const PackingList = ({ packingListData }) => {
  return (
    <IncludeContent>
      <List list={packingListData}></List>
    </IncludeContent>
  );
}

export default connect(PackingList);
const List = ({ list }) => {
  return (
    <div>
      <h3>WHAT DO I NEED TO BRING?</h3>
      <ul>
        {list.map(function (list, index) {
          return <li key={index}>{list.list}</li>;
        })}
      </ul>
    </div>
  );
};

const IncludeContent = styled.div`
  h2{
    font-weight: bold;
    text-transform: uppercase;
    color: #008B39;
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
      content: url(${checkIcon});
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