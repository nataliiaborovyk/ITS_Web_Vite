import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saluto from './0_per_esame/Saluto'
import UserAlbumsPhotos from './in_classe_19_12/UserAlbumsPhotos'
import Contatore from './0_per_esame/Contatore'
import Eventi from './0_per_esame/Eventi'
import Evento2 from './0_per_esame/Evento2'
import Evento3 from './0_per_esame/Evento3'
import Map2 from './0_per_esame/Map2'
import MapListaCorsiPadre from './0_per_esame/MapListaCorsiPadre'
import Map2LP from './0_per_esame/Map2LP'
import ChildrenPropsPadre from './0_per_esame/ChildrenPropsPadre'

function App() {


  return (
    <>
    <div className = "container pu-3">
    {/* <UserAlbumsPhotos/> */}

    {/* <Saluto nome="Alice" eta={30} citta="Roma" ora={8}/>
    <Saluto nome="Bob" eta={20} citta="Milano" /> */}

    {/* <Contatore/> */}

    {/* <Eventi/>

    <Evento2/>
    <Evento3/> */}
    {/* <Map2/> */}
    {/* <MapListaCorsiPadre/> */}
    {/* <Map2LP/> */}
    <ChildrenPropsPadre/>
    </div>

    </>
  )
}

export default App
