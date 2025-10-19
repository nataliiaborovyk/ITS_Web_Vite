import React from 'react'
import piatti from '../../dati/piatti'

const MenuRistorante = () =>  {
    return (
        <ul>

            <h5>Menu</h5>

            {piatti.map((p) => (
                <li key={p.id} className="list-group-item d-flex justify-content-between">
                    <span>{p.nome}</span>
                    <span className='badge bg-success'>{p.prezzo}</span>
                     
                </li>
            ))}
            
        </ul>
    )
}

export default MenuRistorante


