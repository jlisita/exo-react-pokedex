import { useState } from 'react';
import './App.css';

const Pokemon = ({pokemon, displayImg}) => {

    const [nbrLikes, addLike] = useState(0);

    const updateLikes = () => {
        addLike(nbrLikes+1);
    };

    const className = (displayImg == true)  ? "pokemonCard" : ""

    return (
        <article className={className } >
            {(displayImg == true) ? <img src={pokemon.image} alt="image" width="200px"/> : <></>}
            <h3>{pokemon.name}</h3>
            <p>type: {pokemon.type}</p>
            <p>date de capture: {pokemon.capturedAt}</p>
            <p>Ce pokémon a {nbrLikes} likes</p>
            <button onClick = {updateLikes}>Like</button>
        </article>
    );
};

export default Pokemon;