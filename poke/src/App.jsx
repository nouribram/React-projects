import { useState } from "react"
import { Header } from "./components/Header"
import { SideNav } from "./components/SideNav"
import { PokeCard  } from "./components/SideNav"

function App() {
  
   const {selectedPokemon, setSelectedPokemon } = useState(0)
  
   return (
    <>
       <Header/>
       <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={selectedPokemon}/>
       <PokeCard selectedPokemon={selectedPokemon}/>
    </>
  )
}

export default App
