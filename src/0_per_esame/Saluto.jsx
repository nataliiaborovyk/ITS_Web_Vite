import React from 'react'


const Saluto = (props) => {


    return(
        <div>
            <h1>{props.ora === undefined
                ? "ora non fornita"
                : props.ora<18 ? "Buongiorno": "Buonasera" }  </h1>
            <h1>Mi chiamo {props.nome}, ho {props.eta}.</h1>
            <p>Vivo a {props.citta}</p>
        </div>
    )
}

export default Saluto