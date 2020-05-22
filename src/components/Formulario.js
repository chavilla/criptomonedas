import React,{useEffect,useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptoMoneda from '../hooks/useCriptoMoneda';
import axios from 'axios';
import Error from './Error';

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

const Formulario = ({setMoneda,setCriptomoneda}) => {

    //States del formulario
    const [listaCripto, setlistaCripto] = useState([]);
    const [error,setError]=useState(false);

    //Opciones para pasarlas al formulaio
    const MONEDAS=[
        {codigo:'USD', nombre:'Dólar de Estadounidense'},
        {codigo:'COP', nombre:'Peso Colombiano'},
        {codigo:'EUR', nombre:'Euro'},
        {codigo:'GBP', nombre:'Libra Esterlina'}
    ];
    //Utilizar useMoneda
    const [moneda,SelectMoneda,setstateMoneda]=useMoneda('Elige tu moneda','',MONEDAS);
    //Utilizar criptomoneda
    const [criptomoneda,SelectCriptomoneda,setstateCripto]=useCriptoMoneda('Elige Criptomoneda','',listaCripto);

    useEffect(() => {
        //https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD
        const consultarApi=async ()=>{
            const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const respuesta=await axios.get(url);
            setlistaCripto(respuesta.data.Data)
        }
        consultarApi();
    }, []);

    //cuando el usuario pulsa el formulario
    const cotizarMoneda=e=>{
        e.preventDefault();
        
        //Validar los campos
        if (moneda.trim()==='' || criptomoneda.trim()==='') {
            setError(true);
            return;
        }
        //Si pasa la validacion
        setError(false);

        //Guardar moneda y criptomoneda
        setMoneda(moneda);
        setCriptomoneda(criptomoneda);

        setstateMoneda('');
        setstateCripto('');
    }

    return ( 
        <form
        onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios"/>:null}
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