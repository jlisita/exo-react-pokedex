import Pokemon from './Pokemon'

const FirePokemons = ({pokemons}) => {

      const firePokemons = pokemons.filter((element) => {
        return (
            element.type === "Fire"
        );
      });
    return (
        <section>
            <h2>Pokemons de type Feu</h2>
            <div className='pokemons'>
                {firePokemons.map((pokemon) => {
                    return (
                        <Pokemon pokemon = {pokemon}/>
                    );
                })}
            </div>
        </section>
    );
};

export default FirePokemons;