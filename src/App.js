import React, {useState} from 'react';
import PokemonList from './PokemonList';

function App() {
  const [pokemon, setPokemon] = useState(["bulbasaur"])

  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
