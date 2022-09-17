import { connect, styled } from 'frontity';
import React from 'react';
const VacationPackages = () =>{
    return(
        <ContainerFlex>VacationPackagesss</ContainerFlex>
    )
}
export default connect(VacationPackages);

const ContainerFlex = styled.div`
justify-content:space-between;
flex-wrap:wrap;
max-width:1600px;
width:100%;
display:flex; 
`;