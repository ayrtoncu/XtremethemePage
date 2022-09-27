import { connect, styled, loadable } from "frontity";
import { useState } from "react";
// import menubar from "../Icons/326672_menu_icon.svg";
// import closemenu from "../Icons/cancel_black_24dp.svg";
import SidebarData from "../Dataset/SidebarData";
// import SubMenu from "../Components/SubmenuSlider";
const menubar = loadable(() => import('../Icons/326672_menu_icon.svg'));
const closemenu = loadable(() => import('../Icons/cancel_black_24dp.svg'));
// const SidebarData = loadable(() => import('../Dataset/SidebarData'));
const SubMenu = loadable(() => import('../Components/SubmenuSlider'));

const SidebarMovil = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <MobileIconOpen onClick={showSidebar}>
        <img src={menubar} />
      </MobileIconOpen>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <MobileIconClose onClick={showSidebar}>
            <img src={closemenu}></img>
          </MobileIconClose>
          {/* data */}
          {SidebarData.map(function (item, index) {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </div>
  );
};

export default connect(SidebarMovil);
const MobileIconOpen = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
    align-items: center;
    cursor: pointer;
    margin-left: 20px;
    width: 25px;
    float: left;
    transition: all 0.2s ease;
    margin-top: 20px;
  }
`;
const MobileIconClose = styled.div`
  display: none;
  margin-left: 2rem;
  font-size: 2rem;
  margin-top: 10px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.nav`
  background: #ffffff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;
