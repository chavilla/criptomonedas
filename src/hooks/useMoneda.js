import React,{Fragment,useState} from 'react';
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

//Nombre nuestro hook y tenemos que exportarlo
const useMoneda=(label,stateInicial,opciones)=>{

    //state de nuestro hook
    const [state,setstate]=useState(stateInicial);

    //Interfaz o elemento que retornaremos 
    const Seleccionar=()=>(
        <Fragment>
            <Label>{label}</Label>
            <Select
            onChange={e=>setstate(e.target.value)}
            value={state}
            >
                <option value="">--Seleccione--</option>
                {opciones.map(opcion=>(
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </Select>
        </Fragment>
    );

  //Retorna nuestro state, la interfaz, y la funcion q modifica el state
    return [state,Seleccionar,setstate];
}

export default useMoneda;