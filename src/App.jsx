import { Header } from "./assets/components/Header"
import { Pokemons } from "./assets/components/Pokemons"
import { Search } from "./assets/components/Search"

function App() {

  const valorDoFiltro = 'mewtwo'

  return (
    <div className="App">
      <Header />
      <Search />
      <Pokemons valorDoFiltro={valorDoFiltro}/>
    </div>
  )
}

export default App
