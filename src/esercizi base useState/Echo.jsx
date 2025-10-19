import React, { useState } from 'react'

const Echo = () => {

const [testo, setTesto] = useState('')

  return (
    <div>
        <input 
        type='text'
        placeholder='Scrivi qui...'
        value={testo}
        onChange={ (e) => setTesto(e.target.value)}
        style={{margin: '10px'}}>
        </input>
        Hai scritto: {testo}
    </div>
  )
}

export default Echo