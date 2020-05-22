import React from 'react';
import styled from '@emotion/styled';

const Mensaje=styled.p`
    font-family:'Bebas Neue', cursive;
    padding:1rem;
    background-color:#b7322c;
    color:#FFF;
    font-size:22px;
    text-transform:uppercase;
    font-weight:bold;
    text-align:center;
`;

const Error = ({mensaje}) => {
    return ( 
        <Mensaje>{mensaje}</Mensaje>
     );
}
 
export default Error;