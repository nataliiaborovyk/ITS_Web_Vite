import React from 'react'

const Array2 = () => {

const pizza = [
    {id:1, nome:'Margherita'},
    {id:2, nome:'4 formaggi'},
    {id:3, nome:'Capricciosa'}
]

  return (
    <div className='container'>
        <h3>Es.2 Menu Pizza</h3>

        {pizza.map(
            (p) => (
                    <div className='row' key={p.id}>
                        <div className='col-6 border'>Id: {p.id}</div>
                        <div className='col-6 border'>Nome pizza: {p.nome}</div>
                    </div>
                )
        )}

    </div>
  )
}

export default Array2