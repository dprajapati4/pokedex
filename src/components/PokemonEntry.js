const PokemonEntry = ({ pokemon }) => {
  console.log('the poek', pokemon);

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className="pokemon-container">
      <h2 id="title">{capitalize(pokemon.name)}</h2>
      <div className="image-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          // height="200px"
        />
      </div>
      <h3>About</h3>
      <div className="details">
        <p> <strong>Weight: </strong> {pokemon.weight}</p>
        <div className="moves">
          <h4>Moves</h4>
          <ul>
            {pokemon.moves.map((move) => {
              return <li key={move.move.name}>{move.move.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonEntry;
