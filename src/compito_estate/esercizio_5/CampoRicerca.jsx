import React, { useState } from 'react'

const CampoRicerca  = () =>  {

    const [testoRicerca, setTestoRicerca] = useState('')


    return (
        <div>
            <label>Cerca:</label>
            <input
            type="text"
            placeholder="Scrivi qui..."
            value={testoRicerca}
            onChange={ (e) => setTestoRicerca(e.target.value) }
            />

            <p>Stai cercando: {testoRicerca}</p>
        </div>

    );
}

export default CampoRicerca