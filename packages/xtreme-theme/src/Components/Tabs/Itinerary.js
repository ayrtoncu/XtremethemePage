import { connect, css, styled } from 'frontity'
import React,{useState} from 'react';
import iconOpen from '../../Icons/menuicons/expand_more_white_24dp.svg';
import iconClose from '../../Icons/menuicons/expand_less_white_24dp.svg';

const Itinerary = ({ itineraryData }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  // console.log(itineraryData);
  return (
    <>
      {itineraryData.map(function (item, index) {
        console.log(item);
        return (
          <>{}</>
        )
      })}
      {/* <div>
        <div css={sidebarLink} onClick={itineraryData.subNav && showSubnav}>
          <div>
            <SidebarLabel>{{__html: itineraryData[0].title_itinetary }}</SidebarLabel>
          </div>
          <div>
            {itineraryData.subNav && subnav
              ? iconOpen
              : itineraryData.subNav
              ? iconClose
              : null}
          </div>
        </div>
      </div> */}
      {subnav &&
        itineraryData.subNav.map((item, index) => {
          return (
            <Link css={dropdownLink} link={item.path} key={index}>
              {/* {item.icon} */}
              <SidebarLabel>{item.title}</SidebarLabel>
            </Link>
          );
        })}
      {/* <div dangerouslySetInnerHTML={{ __html: itineraryData[0].title_itinetary }}></div> */}
    </>
  )
}

export default connect(Itinerary);
const SidebarLabel = styled.span`
  margin-left: 16px;
`;
let sidebarLink = css`
  background-color: #008B39;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 8%), 0 2px 10px 0 rgb(0 0 0 / 2%);
  margin-top: 7px;
  border-left: solid 5px #FFD000;
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #FFD000;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

let dropdownLink = css`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;