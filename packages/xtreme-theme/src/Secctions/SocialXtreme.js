import { withTheme } from '@emotion/react';
import { connect, styled,css } from 'frontity';
import React from 'react';
import Link from '@frontity/components/link'

const SocialXtreme = () => {
  return (
    <Section>
      <ContainerSocial>
        <ContainerSocialGrid>
          <Link link='/'>
            <div css={block}>
              <div css={blockContent}>
                <div css={icon}>
                  <img/>
                </div>
                <div css={textjustify}>
                  <h3>Title</h3>
                  <p css={textWith}>holaqwe qwe qwe qw </p>
                </div>
              </div>
              <img css={imgBack} src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp'/>
            </div>
          </Link>
          <Link css={col2Span} link='/'>
            <div css={block}>
              <div css={blockContent}>
                <div css={icon}>
                  <img/>
                </div>
                <div css={textjustify}>
                  <h3>Title</h3>
                  <p css={textWith}>holaqwe qwe qwe qw </p>
                </div>
              </div>
              <img css={imgBack} src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp'/>
            </div>
          </Link>
          <Link link='/'>
            <div css={block}>
              <div css={blockContent}>
                <div css={icon}>
                  <img/>
                </div>
                <div css={textjustify}>
                  <h3>Title</h3>
                  <p css={textWith}>holaqwe qwe qwe qw </p>
                </div>
              </div>
              <img css={imgBack} src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp'/>
            </div>
          </Link>
          <Link css={col2Span} link='/'>
            <div css={block}>
              <div css={blockContent}>
                <div css={icon}>
                  <img/>
                </div>
                <div css={textjustify}>
                  <h3>Title</h3>
                  <p css={textWith}>holaqwe qwe qwe qw </p>
                </div>
              </div>
              <img css={imgBack} src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp'/>
            </div>
          </Link>
          <Link link='/'>
            <div css={block}>
              <div css={blockContent}>
                <div css={icon}>
                  <img/>
                </div>
                <div css={textjustify}>
                  <h3>Title</h3>
                  <p css={textWith}>holaqwe qwe qwe qw </p>
                </div>
              </div>
              <img css={imgBack} src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp'/>
            </div>
          </Link>
          <Link link='/'>
            <div css={block}>
              <div css={blockContent}>
                <div css={icon}>
                  <img/>
                </div>
                <div css={textjustify}>
                  <h3>Title</h3>
                  <p css={textWith}>holaqwe qwe qwe qw </p>
                </div>
              </div>
              <img css={imgBack} src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp'/>
            </div>
          </Link>
        </ContainerSocialGrid>
      </ContainerSocial>
    </Section>
  )
}
export default connect(SocialXtreme);

const Section = styled.div`
  padding: 30px 0 30px 0;
  float: left;
  width: 100%;
  clear: both;
  position: relative;
`;
const ContainerSocial = styled.div`
  padding-bottom: 2.5rem;
  max-width: 100%;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  @media(min-width: 768px){
    width: 90%;
  }
  @media(min-width: 1024px){
    width: 80%;
  }
`;
const ContainerSocialGrid = styled.div`
  gap:1rem;
  grid-template-rows: repeat(6, minmax(0, 1fr));
  grid-template-columns:repeat(1, minmax(0, 1fr));
  grid-auto-flow:column;
  width:100%;
  display:grid;
  position: relative;
  @media(min-width:768px){
    grid-template-rows:repeat(4, minmax(0, 1fr));
    grid-template-columns:repeat(2, minmax(0, 1fr));
  }
  @media(min-width:1024px){
    grid-template-rows:repeat(2, minmax(0, 1fr));
    grid-template-columns:repeat(4, minmax(0, 1fr));
  }
`;

//class
let block = css`
  object-position:center;
  object-fit:cover;
  border-radius: 0.5rem;
  grid-template-columns:repeat(1, minmax(0, 1fr));
  width:100%;
  height:100%;
  display:grid;
  img
`;
let blockContent = css`
color:rgba(255, 255, 255, 1);
padding-bottom:0.75rem;
padding-top:2.5rem;
padding-left:1rem;
padding-right:1rem;
background-color:rgba(0, 0, 0, 0.5);
border-radius:0.5rem;
justify-content:center;
align-items:center;
flex-direction:column;
display:flex;
grid-row-start:1;
grid-column-start:1;
z-index:10;
position:relative;
`;
let imgBack = css`
object-position:center;
object-fit:cover;
border-radius:0.5rem;
width:100%;
height:100%;
display:flex;
grid-row-start:1;
grid-column-start:1;
position:relative;
max-width:100%;
vertical-align:middle;
`;
let icon = css`
padding:1.5rem;
border-color: rgba(255, 255, 255, 1);
border-width:1px;
border-radius:9999px;
width:6rem;
height: 6rem;
display:flex;
`;
let textjustify = css`
justify-items: center;
display: grid;
`;
let textWith = css`
color:rgba(255, 255, 255,1)
`;
let col2Span = css`
  @media(min-width:768px){
    grid-column: span 2 / span 2;
  }
`;