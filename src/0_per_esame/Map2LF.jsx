import React from 'react'

const Map2LF = ({titolo, docente, difficolta,select, elim}) => {
        const style={
        lista: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "30px"
        }
    }
  return (
    <li style={style.lista}>
        {titolo} - {docente} - {difficolta}
        <button onClick={select}>Select</button>
        <button onClick={elim}>Elimina</button>
    </li>
  )
}

export default Map2LF