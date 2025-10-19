import React, { useState } from 'react'

const Checkbox_sempl = () => {


const [stato, setStato] = useState(false)

  return (
    <div>
        <label>
            <input
                type='checkbox'
                checked={stato}
                onChange={ (e) => setStato(e.target.checked)}/>
            Accetto di studiare
        </label>

        <p> Stato: {stato ? 'Si': 'No'}</p>
    </div>
  )
}

export default Checkbox_sempl