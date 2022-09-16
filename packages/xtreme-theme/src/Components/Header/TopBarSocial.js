import { connect, styled } from 'frontity';
import React from 'react';

const TopBarSocial = () => {
  return (
    <ContainerTopBar>
      <span css={notification}> Coronavirus 2022</span>
    </ContainerTopBar>
  );
}

export default connect(TopBarSocial);

const ContainerTopBar = styled.div`
background-color:#0095ce;
padding:2px 0 10px;
text-align:center!important;
width:100%;
margin-right:auto;
margin-left: auto;
`;

//Clases
let notification = css`
  color: #ffffff;
  font-size: 13px;
  display: inline-block;
  border-bottom: 1px solid #fff;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: .2px;
`;