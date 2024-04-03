const FirePokemons = ({pokemons}) => {

      const firePokemons = pokemons.filter((element) => {
        return (
            element.type === "Fire"
        );
      });
    return (
        <section>
            <h2>Pokemons de type Feu</h2>
            {firePokemons.map((element) => {
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

export default FirePokemons;