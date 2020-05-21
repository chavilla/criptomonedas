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

const useCriptoMoneda=(label,stateInicial)=>{

    const [state,setstate]=useState('');
    const SelectCripto=()=>(
        <Fragment>
            <Label>{label}</Label>
            <Select>
                <option value="">Bitcoing</option>
            </Select>
        </Fragment>
       
    );

    return [state,SelectCripto]

}

export default useCriptoMoneda;