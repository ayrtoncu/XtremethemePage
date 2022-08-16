import React, {useState} from "react";
import { connect, styled,css } from "frontity";
import { Sectiondiv, Container } from "../Components/componentsStyles";

const TabsforTours = ({data}) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  // console.log(typeof (data))
  console.log(Object.keys(data))
  data=['overview','itinerario','includes','travel_info','packing_list ']
  // console.log(data.itinerario)
  return (
    <Sectiondiv>
      <Container>
        <div className="tab">
          <button onClick={() => toggleTab(1)}>hoja 1 </button>
          <button onClick={() => toggleTab(2)}>hoja 2</button>
          <button onClick={() => toggleTab(3)}>hoja 3</button>
        </div>
        <div css={toggleState === 1 ? tabContentActive : tabContent}>
          <p>hola mundo 1 </p>
        </div>
        <div css={toggleState === 2 ? tabContentActive : tabContent}>
          <p>hola mundo 2</p>
        </div>
        <div css={toggleState === 3 ? tabContentActive : tabContent}>
          <p>hola mundo 3</p>
        </div>
      </Container>
    </Sectiondiv>
  );
};
export default connect(TabsforTours);

let tabContent = css`
background: white;
padding: 20px;
width: 100%;
height: 100%;
display: none;
`;
let tabContentActive = css`
display: block;
`;