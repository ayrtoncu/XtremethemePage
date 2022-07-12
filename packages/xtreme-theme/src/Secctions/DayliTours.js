import { connect,styled,css } from 'frontity';
import React from 'react';

const DayliTours = () => {
  return (
    <Section>
            <ContentText>
        <h2>
          <span
            css={css`
              color: rgba(6, 95, 70);
            `}
          >
            DAYLI TOURS
          </span>
        </h2>
      </ContentText>
      <ContentDayliTours>
        
        </ContentDayliTours>
    </Section>
  )
}
export default connect(DayliTours);

const Section = styled.div`
  border-top: 1px solid #e1e1e1;
  padding: 60px 0 30px 0;
  float: left;
  width: 100%;
  clear: both;
  position: relative;
`;
const ContentText = styled.div`
  text-align: center;
  margin-top: 0;
  width: 100%;
  padding-bottom: 0;
  margin: auto;
  h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 5px;
    margin-top: 0;
    text-transform: uppercase;
    letter-spacing: 0;
  }
  @media (min-width:780px){
    width: 960px;
  }
`;
const ContentDayliTours = styled.div`
  flex-wrap:wrap;
  display: flex;
  margin-left:0.5rem;
  margin-rigth:0.5rem;
`;
