import { connect, styled, css } from "frontity";
import React from "react";
import Link from "@frontity/components/link";

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
        <ItemTour>
          <div css={boxEspecial}>
            <Link>
              <img
                src="https://www.x-tremetourbulencia.com/wp-content/uploads/2022/04/salkantay-trek-1.webp"
                css={backimg}
              />
              <div id="titleSpecial1" css={titleSpecial}>
                TOur
              </div>
              <div id="titleMore1" css={titleMore}>
                <div css={btn}>Hola</div>
              </div>
            </Link>
          </div>
        </ItemTour>
        <ItemTour>
          <div css={boxEspecial}>
            <Link>
              <img
                src="https://www.x-tremetourbulencia.com/wp-content/uploads/2022/04/inca-trail.webp"
                css={backimg}
              />
              <div id="titleSpecial1" css={titleSpecial}>
                TOur
              </div>
              <div id="titleMore1" css={titleMore}>
                <div css={btn}>Hola</div>
              </div>
            </Link>
          </div>
        </ItemTour>
        <ItemTour>
          <div css={boxEspecial}>
            <Link>
              <img
                src="https://www.x-tremetourbulencia.com/wp-content/uploads/2022/04/lares-trek.webp"
                css={backimg}
              />
              <div id="titleSpecial1" css={titleSpecial}>
                TOur
              </div>
              <div id="titleMore1" css={titleMore}>
                <div css={btn}>Hola</div>
              </div>
            </Link>
          </div>
        </ItemTour>
        <ItemTour>
          <div css={boxEspecial}>
            <Link>
              <img
                src="https://www.x-tremetourbulencia.com/wp-content/uploads/2022/04/choquequirao-trek-1.webp"
                css={backimg}
              />
              <div id="titleSpecial1" css={titleSpecial}>
                TOur
              </div>
              <div id="titleMore1" css={titleMore}>
                <div css={btn}>Hola</div>
              </div>
            </Link>
          </div>
        </ItemTour>
        <ItemTour>
          <div css={boxEspecial}>
            <Link>
              <img
                src="https://www.x-tremetourbulencia.com/wp-content/uploads/2022/04/ausangate-trek.webp"
                css={backimg}
              />
              <div id="titleSpecial1" css={titleSpecial}>
                TOur
              </div>
              <div id="titleMore1" css={titleMore}>
                <div css={btn}>Hola</div>
              </div>
            </Link>
          </div>
        </ItemTour>
      </ContentDayliTours>
    </Section>
  );
};
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
  @media (min-width: 780px) {
    width: 960px;
  }
`;
const ContentDayliTours = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;
const ItemTour = styled.div`
  padding: 0.2rem;
  width: 100%;
  @media(min-width:768px){
    width: 19.3%;
    padding: 0.15rem;
  }
  @media(min-width:1024px){
    width: 19.5%;
    padding: 0.15rem;
  }
`;
//class
let boxEspecial = css`
  width: 100%;
  overflow: hidden;
  background: #000;
  position: relative;
  background: rgba(0, 0, 0, 1);
  :hover #titleSpecial1 {
    top: 31%;
  }
  :hover #titleMore1 {
    opacity: 1;
    top: 50%;
  }
`;
let backimg = css`
  opacity: 0.75;
  max-width: 100%;
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
`;
let titleSpecial = css`
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 2.1rem;
  color: #fff;
  font-family: "Oswald", sans-serif;
  text-shadow: 1px 1px 2px #000;
  line-height: 40px;
  transition:.3s;
`;
let titleMore = css`
  position: absolute;
  top: 80%;
  left: 0px;
  right: 0px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  opacity: 0;
  transition:.3s;
`;


let btn = css`
transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;