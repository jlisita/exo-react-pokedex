const ListAllPokemons = ({pokemons}) => {
    return (
        <>
            {pokemons.map((pokemon) => {
                return(
                    <div className="pokemon">
                        <img src={pokemon.image} alt="image" width="200px"/>
                        <h3>{pokemon.name}</h3>
                        <p>type: {pokemon.type}</p>
                        <p>date de capture: {pokemon.capturedAt}</p>
                    </div>
                )
            })}
        </>
    );
};

export default ListAllPokemons;