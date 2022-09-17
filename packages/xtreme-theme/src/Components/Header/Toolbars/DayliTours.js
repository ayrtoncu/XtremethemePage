import { connect, styled } from 'frontity';
import React from 'react';
const DayliTours = () =>{
    return(
        <ContainerFlex>DayliTOurrssss</ContainerFlex>
    )
}
export default connect(DayliTours);

const ContainerFlex = styled.div`
justify-content:space-between;
flex-wrap:wrap;
max-width:1600px;
width:100%;
display:flex; 
`;