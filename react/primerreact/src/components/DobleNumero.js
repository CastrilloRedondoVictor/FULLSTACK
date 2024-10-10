
import { useState } from 'react';

function DobleNumero(){

    // var variable = 'VARIABLE ANTES';
    const [variable, setVariable] = useState('ANTES');

    const numDoble = (num) => {
        let doble = num*2;
        cambiarVariable()
        console.log(doble)
    }

    const cambiarVariable = () => {
        console.log(variable)
        // variable = 'CAMBIO VALOR'
        setVariable('CAMBIO')
        console.log(variable)
    }

    return(
        <div>
            <h1>Ejemplo  metodos parametro</h1>
            <button onClick = {() => { numDoble(2) }}>DUPLICAR 2</button>
            <button onClick = {() => { numDoble(3) }}>DUPLICAR 3</button>
            <h2>{variable}</h2>
            <button onClick = {() => { cambiarVariable() }}>CAMBIAR VARIABLE</button>
        </div>
    )

}

export default DobleNumero;
