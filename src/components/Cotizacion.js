import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv=styled.div`
    padding:1rem;
    background-color:#fff;
    margin-top:.5rem;
    border-radius:10px;
    font-family:Arial, Helvetica, sans-serif;

`;

const Info=styled.p`
    font-size:18px;
`;

const Precio=styled.span`
font-size: 22px;
font-weight:bold;
`;

const Cotizacion = ({resultado}) => {
    if (Object.keys(resultado).length===0) return null;
    
    return ( 
        <ResultadoDiv>
            <Info>El precio es <Precio>{resultado.PRICE}</Precio></Info>
            <Info>Precio más alto del día: <Precio>{resultado.HIGHDAY}</Precio></Info>
            <Info>Precio más bajo del día: <Precio>{resultado.LOWDAY}</Precio></Info>
            <Info>Variación últimas 24 horas:  <Precio>{resultado.CHANGEPCT24HOUR}</Precio></Info>
            <Info>Última actualización: <Precio>{resultado.LASTUPDATE}</Precio></Info>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;