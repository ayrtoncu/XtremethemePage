import { connect, styled } from 'frontity';
import React from 'react';
const AlternativeTrek = () =>{
    return(
        <ContainerFlex>Alternativos</ContainerFlex>
    )
}
export default connect(AlternativeTrek);

const ContainerFlex = styled.div`
justify-content:space-between;
flex-wrap:wrap;
max-width:1600px;
width:100%;
display:flex; 
`;