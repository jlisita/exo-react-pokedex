import './App.css';
const Pokemon = ({pokemon, displayImg}) => {

    const className = (displayImg == true)  ? "pokemonCard" : ""

    return (
        <article className={className } >
            {(displayImg == true) ? <img src={pokemon.image} alt="image" width="200px"/> : <></>}
            <h3>{pokemon.name}</h3>
            <p>type: {pokemon.type}</p>
            <p>date de capture: {pokemon.capturedAt}</p>
        </article>
    );
};

export default Pokemon;