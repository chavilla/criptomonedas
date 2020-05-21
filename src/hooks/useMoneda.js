import React,{Fragment,useState} from 'react';

const useMoneda=()=>{

    //state de nuestro hook
    const [state,setstate]=useState('');

    //Interfaz o elemento que retornaremos 
    const Seleccionar=()=>(
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="COP">Peso Colombiano</option>
            </select>
        </Fragment>
    );
  //Retorna nuestro state, la interfaz, y la funcion q modifica el state
    return [state,Seleccionar,setstate];
}

export default useMoneda;