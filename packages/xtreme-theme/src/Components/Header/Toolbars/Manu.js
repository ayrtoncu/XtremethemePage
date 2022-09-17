import { connect, styled } from 'frontity';
import React from 'react';
const Manu = () =>{
    return(
        <ContainerFlex>Manuuu</ContainerFlex>
    )
}
export default connect(Manu);

const ContainerFlex = styled.div`
justify-content:space-between;
flex-wrap:wrap;
max-width:1600px;
width:100%;
display:flex; 
`;