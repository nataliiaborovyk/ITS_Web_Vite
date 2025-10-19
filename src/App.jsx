import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCrud from './Components/UserCrud'
import UserCrud1 from './Components/UserCrud1'
import Saluto from './compiti/Saluto'
import CardUtente1 from './compito_estate/esercizio_2/CardUtente1'
import MenuRistorante from './compito_estate/esercizio_3/MenuRistorante'
import Termostato from './compito_estate/esercizio_4/Termostato'
import TodoApp from './compito_estate/todolist/TodoApp'
import MainComponent from './compito_estate/useContext/MainComponent'
import ProvaRouter from './Router/ProvaRouter'
import Testo from './esercizi base useState/Testo'
import Mondo from './esercizi base useState/Mondo'
import Echo from './esercizi base useState/Echo'
import Pizza from './esercizi base useState/Pizza'


function App() {


  return (
    <>
    <div className = "container pu-3">

      {/* <TodoApp></TodoApp> */}
      {/* <MainComponent></MainComponent> */}

      {/* <ProvaRouter></ProvaRouter> */}
      <Testo></Testo>
      <br/>
      <Mondo></Mondo>
      <br/>
      <Echo></Echo>
      <br/>
      <Pizza></Pizza>
    </div>

    </>
  )
}

export default App
