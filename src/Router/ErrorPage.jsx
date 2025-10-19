import React from 'react'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const navigate=useNavigate();
  return (
    <div>
        <p>Questa pagina non esiste </p>
        <button className="btn btn-success" onClick={()=>navigate("/")}>Torna alla home</button>
        {"        "}
        <button className="btn btn-success" onClick={()=>navigate(-1)}>Torna alla pagina precedente</button>
    </div>
  )
}

export default ErrorPage