const Pokemon = ({pokemon}) => {
    return (
        <artcile>
            <img src={pokemon.image} alt="image" />
            <h3>{pokemon.name}</h3>
            <p>type: {pokemon.type}</p>
            <p>date de capture: {pokemon.capturedAt}</p>
        </artcile>
    );
};

export default Pokemon;