const LastCapturedPokemons = ({pokemons}) => {

      const lastCapturedPokemons = pokemons.sort((a,b)=> {
        return new Date(b.capturedAt) - new Date(a.capturedAt); 
      }).slice(0,3);

    return (
        <section>
            <h2>Derniers Pokemons capturés</h2>
            {lastCapturedPokemons.map((element) => {
                return (
                    <>
                        <img src={element.image} alt="image" />
                        <h3>{element.name}</h3>
                        <p>type: {element.type}</p>
                        <p>date de capture: {element.capturedAt}</p>
                    </>
                );
            })}
        </section>
    );
};

export default LastCapturedPokemons;