import React from 'react'

const CardUtente1  = (props) => {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
            <img src={props.imgUrl} className="card-img-top" alt="im" />
            <div className="card-body">
                <h5 className="card-title">{props.nome}</h5>
                <p className="card-text">
                {props.email}
                </p>
                <a href="#" className="btn btn-primary">
                Go somewhere
                </a>
            </div>
            </div>

            {/* <h5>{props.nome}</h5>
            <p>{props.email}</p>
                   
            <img src={props.imgUrl}/> */}
        </div>
    )
}

export default CardUtente1;