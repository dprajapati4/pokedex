import axios from 'axios';
import { useState } from 'react';
import { Linkedin, Github, Code } from 'grommet-icons';
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
    console.log('e', e);

    if (e.target.id === 'surprise') {
      setSearchTerm(Math.floor(Math.random() * (899 - 1) + 1));
    }

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

  const randomize = (e) => {
    const randomNum = Math.floor(Math.random() * (899 - 1) + 1);
  };

  console.log('sear', searchTerm);
  return (
    <div className="App">
      <header className="header">
        <h1>Pokedex</h1>
      </header>
      <form>
        <label htmlFor="search-bar">Enter Pokemon Name or Number </label>
        <input
          type="text"
          id="search-bar"
          name="search-bar"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          {' '}
          Search{' '}
        </button>
        <br />
        <br />
        <button id="surprise" type="submit" onClick={handleSubmit}>
          Surprise Me{' '}
        </button>
      </form>

      {isLoading ? (
        <div> Pokemon data is loading! </div>
      ) : (
        pokemon && <PokemonEntry pokemon={pokemon} />
      )}

      <footer id="footer">
        Built by Deep Prajapati
        <div className="icons">
          <a
            id="linkedIn"
            href="https://www.linkedin.com/in/deepprajapati/
          "
          >
            <Linkedin size="medium" color= '#0e76a8' padding="2px" />{' '}
          </a>

          <a
            id="github"
            href="https://github.com/dprajapati4/pokedex"
          >
            <Github size="medium" />{' '}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
