import { useState } from 'react';
import { Header } from "./assets/components/Header";
import { Pokemons } from "./assets/components/Pokemons";
import { Search } from "./assets/components/Search";

function App() {

  const [valorDoFiltro, setValorDoFiltro] = useState("")

  return (
    <div className="App">
      <Header />
      <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
      <Pokemons valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
    </div>
  )
}

export default App
