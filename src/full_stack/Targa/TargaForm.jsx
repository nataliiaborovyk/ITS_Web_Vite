// src/components/EsercizioTarga/TargaForm.jsx
import React, { useState } from "react";
import { listaTarghe } from "./ListaTarghe";
import ItemTarga from "./ItemTarga";

const TargaForm = () => {
  // dichiaro componente
  const [data, setData] = useState(listaTarghe);

  // funzione per aggiungere array all'oggetto di liste
  const addItem = (item) => {
    // uso i valori precedentemente inseriti, li espando con lo spread syntax
    // e aggiungo l'elemento corrente
    setData((prev) => [...prev, item]);
  };

  return (
    <div className="card">
      <div className="form-group">
        <table className="table table-sm table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Targa</th>
              <th scope="col">Modello</th>
              <th scope="col">Proprietario</th>
              <th scope="col">Scadenza Assicurazione</th>
            </tr>
          </thead>

          <tbody>
            {/* Itero sull'oggetto di liste tramite i suoi elementi e i loro indici */}
            {data.map((item, index) => (
              // Per ogni elemento creo un tag tr con la key = item.id
              // Se l'indice dell'elemento è pari la casella viene colorata
              // secondo la proprietà "table-info",
              // se è dispari secondo "table-danger"
              <tr
                key={item.id ?? index}
                className={
                  index % 2 === 0 ? "table-info" : "table-danger"
                }
              >
                {/* Per ogni item creo una casella estraendo i valori associati
                    alle relative chiavi */}
                <td>{item.id}</td>
                <td>{item.targa}</td>
                <td>{item.modello}</td>
                <td>{item.proprietario}</td>
                <td>{item.scadenzaAssicurazione}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Componente padre di ItemTarga */}
      <ItemTarga onAddItem={addItem} />
    </div>
  );
};

export default TargaForm;
