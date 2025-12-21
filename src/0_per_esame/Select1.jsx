import React, { useState } from 'react'

const Select1 = () => {
    const [citta, setCitta] = useState("")

    const cambioCitta = (e) => {
        setCitta(e.target.value)
    }

  return (
    <div>
        <h2>Scegli citta</h2>
        <select onChange={cambioCitta} value={citta}>
            <option value="">Seleziona ..</option>
            <option value="Roma">Roma</option>
            <option value="Milano">Milano</option>
        </select>
        <p>
            {citta && `Hai scelto ${citta}`}
        </p>
    </div>
  )
}

export default Select1