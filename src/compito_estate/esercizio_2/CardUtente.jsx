import React from 'react'

const CardUtente  = (props) => {
    return (
        <div>
            <h5>{props.nome}</h5>
            <p>{props.email}</p>
                   
            <img src={props.imgUrl}/>
        </div>
    )
}

export default CardUtente;