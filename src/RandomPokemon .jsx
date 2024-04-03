const RandomPokemon  = ({pokemons}) => {

      const randomIndex = Math.round(Math.random() * (pokemons.length-1)); 
      console.log(randomIndex);
      const randomPokemon = pokemons[randomIndex];
      console.log(randomPokemon);


    return (
        <section>
            <h2>Pokemon aléatoire</h2>
            <img src={randomPokemon.image} alt="image" />
            <h3>{randomPokemon.name}</h3>
            <p>type: {randomPokemon.type}</p>
            <p>date de capture: {randomPokemon.capturedAt}</p>      
        </section>
    );
};

export default RandomPokemon ;