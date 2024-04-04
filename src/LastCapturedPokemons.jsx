import Pokemon from './Pokemon'

const LastCapturedPokemons = ({pokemons}) => {

      const lastCapturedPokemons = pokemons.sort((a,b)=> {
        return new Date(b.capturedAt) - new Date(a.capturedAt); 
      }).slice(0,3);

    return (
        <section>
            <h2>Derniers Pokemons capturés</h2>
            <div className='cardGallery'>
                {lastCapturedPokemons.map((pokemon) => {
                    return (
                        <Pokemon pokemon = {pokemon} displayImg = {true}/>
                    );
                })}
            </div>
        </section>
    );
};

export default LastCapturedPokemons;