import axios from 'axios';
import { useState } from 'react';
import './App.css';

import PokemonEntry from './components/PokemonEntry';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = useState();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      const { data } = response;
      setPokemon(data);
      setIsLoading(false);
      setSearchTerm('');
    } catch (error) {
      console.log('Error fetching pokemon data', error);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Pokedex</h1>
      </header>
      <form>
        <label htmlFor="search-bar">Enter Pokemon Name or Number</label>
        <input
          type="text"
          id="search-bar"
          name="search-bar"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}> Search </button>
      </form>

      {isLoading ? (
        <div> Pokemon data is loading! </div>
      ) : (
        pokemon && <PokemonEntry pokemon={pokemon} />
      )}
    </div>
  );
}

export default App;
