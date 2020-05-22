import React,{useState,Fragment} from 'react';
import styled from '@emotion/styled';

const Label=styled.label`
font-family:'Bebas Neue', cursive;
color:#fff;
text-transform:uppercase;
font-weight:bold;
font-size:1.8rem;
margin-top:2rem;
display:block;
`;

const Select=styled.select`
width:100%;
display:block;
padding:1rem;
-webkit-appearance:none;
border-radius:5px;
border:none;
`

const useCriptoMoneda=(label,stateInicial,opciones)=>{

    const [state,setstate]=useState(stateInicial);
    //Aplicar destructurin a las opciones
    const SelectCripto=()=>(
        <Fragment>
            <Label>{label}</Label>
            <Select
            onChange={e=>setstate(e.target.value)}
            >
                <option value="">Seleccionar criptomoneda</option>
                {opciones.map(opcion=>(
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
       
    );

    return [state,SelectCripto,setstate]

}

export default useCriptoMoneda;