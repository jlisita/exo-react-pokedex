const Pokemon = ({pokemon}) => {
    return (
        <artcile className = "pokemon">
            <img src={pokemon.image} alt="image" width="200px"/>
            <h3>{pokemon.name}</h3>
            <p>type: {pokemon.type}</p>
            <p>date de capture: {pokemon.capturedAt}</p>
        </artcile>
    );
};

export default Pokemon;