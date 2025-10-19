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
import TodoApp from './todolist/TodoApp'
import MainComponent from './useContext/MainComponent'
import ProvaRouter from './Router/ProvaRouter'
import Testo from './esercizi base useState/Testo'
import Mondo from './esercizi base useState/Mondo'
import Echo from './esercizi base useState/Echo'
import Pizza from './esercizi base useState/Pizza'
import Array from './es_intermedie/Array'
import Array2 from './es_intermedie/Array2'
import Filter from './es_intermedie/Filter'
import  Includes  from './es_intermedie/Includes'
import Liste from './es_intermedie/Liste'
import Checkbox_sempl from './es_intermedie/Checkbox_sempl'
import Checkbox from './es_intermedie/Checkbox'
import CheckBox_Array from './es_intermedie/CheckBox_Array'
import UseEffect_contatore from './es_intermedie/UseEffect_contatore'

function App() {


  return (
    <>
    <div className = "container pu-3">

      {/* <TodoApp></TodoApp> */}
      {/* <MainComponent></MainComponent> */}

      {/* <ProvaRouter></ProvaRouter> */}
      {/* <Testo></Testo>
      <br/>
      <Mondo></Mondo>
      <br/>
      <Echo></Echo>
      <br/>
      <Pizza></Pizza>
      <br/>
      <Array/>
      <br/>
      <Array2/>
      <br/>
      <Filter/>
      <br/>
      <Includes></Includes>
      <br/> 
      <Liste></Liste>
      <br/>
      <Checkbox_sempl/>
      <Checkbox/>
    <CheckBox_Array/> */}
    <UseEffect_contatore/>

    </div>

    </>
  )
}

export default App
