import axios from "axios";
import { useState } from "react";

const PokemonEntry = ({ pokemon }) => {

  const [move, setMove] = useState('');

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const handleClickMove = async (e) => {
    e.preventDefault();
    console.log('the event', e)
    // const response = await axios.get(e)

  }


  console.log(pokemon.moves[0])
  return (
    <div className="pokemon-container">
      <h2 id="title">{capitalize(pokemon.name)}</h2>
      <div className="image-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h3>About</h3>
      <div className="details">
        <div className="info">
          <p>
            <strong>Weight: </strong> {pokemon.weight} hg
          </p>
          <p>
            <strong>Height: </strong> {pokemon.height} dm
          </p>
          <p>
            <strong>Type: </strong>
            {pokemon.types.map((type) => {
              return (
                <p className="type" key={type.type.name} pokemon-type={type.type.name}>
                  {capitalize(type.type.name)}
                </p>
              );
            })}
          </p>
        </div>
        <div className="moves">
          <h4>List of Moves</h4>
          <ul id="move-list">
            {pokemon.moves.map((move) => {
              return <button id="moves-bttn" onClick={handleClickMove}> <li key={move.move.name}>{move.move.name} </li></button>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonEntry;
