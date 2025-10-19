import React, { createContext, useState, useContext } from "react";
const data = [
  { id: 1, name: "omar" },
  { id: 2, name: "tazio" },
  { id: 3, name: "gianluca" },
  { id: 4, name: "anna" },
];

const AppContext=createContext();    // 1) crea il contenitore


const MainComponent = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => {
    setPeople(people.filter((el) => el.id !== id));
  };
    // 2) Provider: rende disponibili people e removePeople ai figli
  return (
    <AppContext.Provider value={{people, removePeople}}>
    <div>
      <h3>Passaggio di Proprietà a cascata </h3>
      <Elenco  />
    </div>
    </AppContext.Provider>
  );
};

const Elenco = () => {
    // 3) useContext: prende i dati dal Provider più vicino
    const {people, removePeople} = (useContext(AppContext));
  return (
    <div>
      {people.map((el, index) => {
        return <Persona key={index} {...el} removePeople={removePeople} />;
      })}
    </div>
  );
};

const Persona = ({ id, name }) => {
    const {removePeople}  = useContext(AppContext)
  return (
    <div className="item">
      <h5> {name} </h5>
      <button className="button delete-button" onClick={() => removePeople(id)}>
        {" "}
        x{" "}
      </button>
    </div>
  );
};

export default MainComponent;