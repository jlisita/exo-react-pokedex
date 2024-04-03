import './App.css';
import Header from './Header';
import Footer from './Footer';
import LastCapturedPokemons from './LastCapturedPokemons'
import RandomPokemon from './RandomPokemon ';
import FirePokemons from './FirePokemons'

const App = () => {
  return (
    <div className = ".App">
      <Header/>
      <LastCapturedPokemons/>
      <RandomPokemon/>
      <FirePokemons/>
      <Footer/>
    </div>
  );
}

export default App;
