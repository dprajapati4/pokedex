import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Pokedex</h1>
      </header>
      <form>
        <label htmlFor='search-bar'>Enter Pokemon Name or Number</label>
        <input type='text' id='search-bar' name='search-bar' />
        <button type='submit'> Search </button>
      </form>
    </div>
  );
}

export default App;
