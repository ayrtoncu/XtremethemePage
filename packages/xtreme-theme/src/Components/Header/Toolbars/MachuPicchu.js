import { connect, styled } from 'frontity';
import React from 'react';
const MachuPicchu = () =>{
    return(
        <ContainerFlex>MachuPicchuuu</ContainerFlex>
    )
}
export default connect(MachuPicchu);

const ContainerFlex = styled.div`
justify-content:space-between;
flex-wrap:wrap;
max-width:1600px;
width:100%;
display:flex; 
`;