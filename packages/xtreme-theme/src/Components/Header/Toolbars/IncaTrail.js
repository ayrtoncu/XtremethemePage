import { connect, styled } from 'frontity';
import React from 'react';
const IncaTrail = () =>{
    return(
        <ContainerFlex>IncaTrail</ContainerFlex>
    )
}
export default connect(IncaTrail);

const ContainerFlex = styled.div`
justify-content:space-between;
flex-wrap:wrap;
max-width:1600px;
width:100%;
display:flex; 
`;