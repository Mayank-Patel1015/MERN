import './App.css';
import { useState } from "react";
import axios from 'axios'

function App() {

  const [pokemon, setPokemon] = useState({})

  const handleFetch = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=808&offset=0")
      .then(
        res => {
          setPokemon(res.data.results)
          console.log(pokemon)
        }
      )
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <button onClick={handleFetch}>Fetch Pokemon</button>
      {
        pokemon.map((p) => {
          return (
            <li>{p.name}</li>
          )
        })
      }
    </div>
  );
}

// "https://pokeapi.co/api/v2/pokemon?limit=808&offset=0"

export default App;
