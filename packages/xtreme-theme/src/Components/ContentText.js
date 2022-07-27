import React from 'react'
import ContentText  from './componentsStyles'
const TextSection = (props) => {
  return (
    <ContentText>
      <h2>
          <span
            css={css`
              color: rgba(6, 95, 70);
            `}
          >
            XTREME TOURBULENCIA
          </span>{" "}
          Local Specialists on the <br/><span
            css={css`
              color: rgba(6, 95, 70);
              line-height: 1.5;
            `}
          > Inca Trail Hiking!</span>
        </h2>
        <div
          css={css`
          font-size 1.7remM
          display: block;
          margin-top: 14px;
          font-weight:100;
        `}
        >
          <strong>Xtreme Tourbulencia</strong> Travel Agency is a Peruvian
          company interested in the development and promote sustainable tourism,
          protecting the local environment and culture. We offer a variety of
          tours and adventure expeditions in the whole of Peru. Our tours are
          all designed with the highest level of customer service and
          responsible tourism. We look forward to sharing Peru’s amazing
          outdoors and deep culture heritage with you!
        </div>
    </ContentText >
  );
}
export default TextSection;