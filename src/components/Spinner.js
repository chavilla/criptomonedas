import React from 'react';
import styled from '@emotion/styled';
import './Spinner.css'; 

const Spinner = () => {
    return ( 
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
       
     );
}
 
export default Spinner;