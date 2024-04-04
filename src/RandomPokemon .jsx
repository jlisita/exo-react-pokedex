import Pokemon from './Pokemon'

const RandomPokemon  = ({pokemons}) => {

      const randomIndex = Math.round(Math.random() * (pokemons.length-1)); 
      console.log(randomIndex);
      const randomPokemon = pokemons[randomIndex];

    return (
        <section>
            <h2>Pokemon aléatoire</h2>
            <div className='pokemons'>
                <Pokemon pokemon = {randomPokemon} displayImg = {true}/>  
            </div> 
        </section>
    );
};

export default RandomPokemon ;