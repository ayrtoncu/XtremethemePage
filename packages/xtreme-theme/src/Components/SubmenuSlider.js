import { connect, styled, css } from "frontity";
import React, { useState } from "react";
import Link from "@frontity/components/link";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link
        css={sidebarLink}
        link={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div>
          {/* {item.icon} */}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>

        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>

      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link css={dropdownLink} link={item.path} key={index}>
              {/* {item.icon} */}
              <SidebarLabel>{item.title}</SidebarLabel>
            </Link>
          );
        })}
    </>
  );
};
export default SubMenu;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;
let sidebarLink = css`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
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

// {subnav &&
//   item.subNav.map((item, index) => {
//     return (
//       <Link css={dropdownLink} link={item.path} key={index}>
//         {/* {item.icon} */}
//         <SidebarLabel>{item.title}</SidebarLabel>
//       </Link>
//     );
//   })}
