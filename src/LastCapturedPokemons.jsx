import Pokemon from './Pokemon'

const LastCapturedPokemons = ({pokemons}) => {

      const lastCapturedPokemons = pokemons.sort((a,b)=> {
        return new Date(b.capturedAt) - new Date(a.capturedAt); 
      }).slice(0,3);

    return (
        <section>
            <h2>Derniers Pokemons capturés</h2>
            <div className='pokemons'>
                {lastCapturedPokemons.map((pokemon) => {
                    return (
                        <Pokemon pokemon = {pokemon}/>
                    );
                })}
            </div>
        </section>
    );
};

export default LastCapturedPokemons;