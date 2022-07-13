//Seccion de Xtreme Excellence Cajas 3 * 2
<Row>
  <div css={col}>
    <a css={givesBackBox}>
      <div css={givesBackBoxImage}>
        <picture>
          <source srcSet="https://www.x-tremetourbulencia.com/wp-content/uploads/2021/08/indigenous-women-responsible.jpeg" />
          <img></img>
        </picture>
      </div>
      <div css={givesBackBoxContent}>
        <div css={givesBackBoxTitle}>Camping Equipament</div>
        <div css={givesBackBoxSubtitle}>The Best Camping Equipament</div>
      </div>
    </a>
  </div>
  <div css={col}>
    <a css={givesBackBox}>
      <div css={givesBackBoxImage}>
        <picture>
          <source srcSet="https://www.x-tremetourbulencia.com/wp-content/uploads/2021/08/indigenous-women-responsible.jpeg" />
          <img></img>
        </picture>
      </div>
      <div css={givesBackBoxContent}>
        <div css={givesBackBoxTitle}>Camping Equipament</div>
        <div css={givesBackBoxSubtitle}>The Best Camping Equipament</div>
      </div>
    </a>
  </div>
  <div css={col}>
    <a css={givesBackBox}>
      <div css={givesBackBoxImage}>
        <picture>
          <source srcSet="https://www.x-tremetourbulencia.com/wp-content/uploads/2021/08/indigenous-women-responsible.jpeg" />
          <img></img>
        </picture>
      </div>
      <div css={givesBackBoxContent}>
        <div css={givesBackBoxTitle}>Camping Equipament</div>
        <div css={givesBackBoxSubtitle}>The Best Camping Equipament</div>
      </div>
    </a>
  </div>
  <div css={col}>
    <a css={givesBackBox}>
      <div css={givesBackBoxImage}>
        <picture>
          <source srcSet="https://www.x-tremetourbulencia.com/wp-content/uploads/2021/08/indigenous-women-responsible.jpeg" />
          <img></img>
        </picture>
      </div>
      <div css={givesBackBoxContent}>
        <div css={givesBackBoxTitle}>Camping Equipament</div>
        <div css={givesBackBoxSubtitle}>The Best Camping Equipament</div>
      </div>
    </a>
  </div>
  <div css={col}>
    <a css={givesBackBox}>
      <div css={givesBackBoxImage}>
        <picture>
          <source srcSet="https://www.x-tremetourbulencia.com/wp-content/uploads/2021/08/indigenous-women-responsible.jpeg" />
          <img></img>
        </picture>
      </div>
      <div css={givesBackBoxContent}>
        <div css={givesBackBoxTitle}>Camping Equipament</div>
        <div css={givesBackBoxSubtitle}>The Best Camping Equipament</div>
      </div>
    </a>
  </div>
  <div css={col}>
    <a css={givesBackBox}>
      <div css={givesBackBoxImage}>
        <picture>
          <source srcSet="https://www.x-tremetourbulencia.com/wp-content/uploads/2021/08/indigenous-women-responsible.jpeg" />
          <img></img>
        </picture>
      </div>
      <div css={givesBackBoxContent}>
        <div css={givesBackBoxTitle}>Camping Equipament</div>
        <div css={givesBackBoxSubtitle}>The Best Camping Equipament</div>
      </div>
    </a>
  </div>
</Row>;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
//class
let col = css`
  padding: 0.2rem;
  width: 100%;

  @media (min-width: 768px) {
    flex: 0 0 32.5%;
    max-width: 33.33333%;
  }
`;

let givesBackBox = css`
  width: 100%;
  height: 100%;
  background-color: lightgreen;
  overflow: hidden;
  border-radius: 3px;
  position: relative;
  display: block;
`;
let givesBackBoxImage = css`
  position: relative;
  padding: 0 !important;
  img {
    display: block;
    width: 100%;
    height: 120px;
    object-fit: cover;
    transition: 0.5s;
  }
`;
let givesBackBoxContent = css`
  position: absolute;
  padding: 0 !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  display: flex;
  flex-direction: column;
`;
let givesBackBoxTitle = css`
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 4px;
  padding: 0 !important;
`;
const givesBackBoxSubtitle = css`
  font-size: 15px;
  padding: 0 !important;
`;
