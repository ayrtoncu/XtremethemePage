import { connect,styled,css } from 'frontity';
import React from 'react';
import Link from '@frontity/components/link';

const ToursIncaTrail = () => {
  return (
    <SectionRowContent>
      <Item>
        <Link css={packageCard}>
          <div css={packageCardHeading}></div>
          <div css={packageCardContent}></div>
          <div css={packageCardFooter }></div>
        </Link>
      </Item>
    </SectionRowContent>
  );
}

export default connect(ToursIncaTrail);

const SectionRowContent = styled.div`
  margin-top:40px;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  paddin:8px;
  @media(min-width: 768px){
    flex: 0 0 50%;
    max-width:50%;
    position: relative;
  }
  @media(min-width: 992px){
    flex:0 0 33.333333%;
    max-width:33.333333%;
  }
`;
//class
let packageCard = css`
  border-radius: 5px;
  border: 1px solid #f0f0f0;
  overflow: hidden;
  background-color: #fff;
  display: block;
  color:#555;
`;
let packageCardHeading = css`
  position: relative;
`;
let packageCardContent = css`
  padding: 2rem 2rem 0rem;
`;
let packageCardFooter = css`
  display: flex;
  padding: 2rem;
  -webkit-box-pack: justify;
  justify-content:space-between;
  -webkit-box-align:center;
  align-items:center;
  font-family:"Poppins", sans-serif;
`;