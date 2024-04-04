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
            <div className='cardGallery'>
                {firePokemons.map((pokemon) => {
                    return (
                        <Pokemon pokemon = {pokemon} displayImg = {true}/>
                    );
                })}
            </div>
        </section>
    );
};

export default FirePokemons;