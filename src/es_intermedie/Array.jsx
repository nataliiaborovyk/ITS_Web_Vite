import React from 'react'

const Array = () => {

const colori = [
    {id:1, colore: 'red'},
    {id:2, colore: 'green'},
    {id:3, colore: 'blue'},
    {id:4, colore: 'yellow'},
    {id:5, colore: 'purple'}
]

  return (
    <div className='container mt-3'>
        <h3>Colori disponibili:</h3>

        {colori.map( 
            (p) => ( 
                // g-2 aggiunge spazio tra colonne/righe, me-2 / ms-2 aggiungono piccoli spazi interni
                // d-flex align-items-center centra verticalmente il contenuto.
                    <div className='row mb-2 g-2' key = {p.id}> 
                        <div className='col-6 border'>
                            <strong className='ms-2'> ID: </strong> 
                             {p.id} 
                        </div>
                        
                        <div 
                            className='col-6 border d-flex align-items-center' 
                            style={{color:p.colore}}>
                                Nome colore = {p.colore}
                        </div>
                    </div>
                    )
        )}
    </div>
  )
}

export default Array