import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptoMoneda from '../hooks/useCriptoMoneda';

const Boton=styled.input`
margin-top: 20px;
font-weight:bold;
font-size:20px;
padding:10px;
background-color: #66a2fe;
border:none;
width:100%;
border-radius:10px;
color:#fff;
transition: background-color .3s ease;

&:hover{
    cursor:pointer;
    background-color: #326AC0;
}

`;

const Formulario = () => {
    const MONEDAS=[
        {codigo:'USD', nombre:'Dólar de Estadounidense'},
        {codigo:'COP', nombre:'Peso Colombiano'},
        {codigo:'EUR', nombre:'Euro'},
        {codigo:'GBP', nombre:'Libra Esterlina'}
    ];
    //Utilizar useMoneda
    const [moneda,SelectMoneda]=useMoneda('Elige tu moneda','',MONEDAS);
    //Utilizar criptomoneda
    const [criptomoneda,SelectCriptomoneda]=useCriptoMoneda('Elige Criptomoneda','');

    return ( 
        <form>
            <SelectMoneda/>
            <SelectCriptomoneda/>
            <Boton
            type='submit'
            value='calcular'
            />
        </form>
     );
}
 
export default Formulario;