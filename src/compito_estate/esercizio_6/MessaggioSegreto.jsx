import React, { useState } from 'react'

const MessaggioSegreto  = () =>  {

    const [mostra, setMostra]= useState(false)


    return (
        <div>
            <button onClick={ () => setMostra(!mostra) }>
                {mostra ? "Nascondi messagio" : "Mostra messagio"}
            </button>

            {mostra && <p>Questo è un messagio segreto</p>}
        </div>

    )
}

export default MessaggioSegreto
