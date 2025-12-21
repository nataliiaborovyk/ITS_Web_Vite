import React, { useState } from 'react'

const Form2 = () => {

    const [nome, setNome] = useState("")
    const [eta, setEta] = useState("")
    const [nomeConf, setNomeConf] = useState("")
    const [etaConf, setetaConf] = useState("")


    const set_nome = (e)=>{
        setNome(e.target.value)
    }

    const set_eta=(e)=>{
        setEta(e.target.value)
    }
    const gestSubmit =(e)=>{
        e.preventDefault()
        setNomeConf(nome)
        setetaConf(eta)
        setNome("")
        setEta("")
    }
  return (
    <div>
        <form onSubmit={gestSubmit}>
            <input onChange={set_nome} value={nome} placeholder='Nome'></input>
            <input onChange={set_eta} value={eta} placeholder='Eta'></input>
            <button type="submit">Invia</button>

            <p>
                {nomeConf &&
                    etaConf &&
                        `Nome: ${nomeConf}, eta: ${etaConf}`
                }
            </p>
        </form>
    </div>
  )
}

export default Form2