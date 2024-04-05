import {useState} from "react";

const PokemonSelector = () => {

    const[pokemonName,setPokemonName] = useState("");

    const pokemonNameUpdate = (e) => {
        setPokemonName(e.currentTarget.value);
    };

    return (
        <section>
            <label name="name">nom du pokemon <input type = "text" onChange = {pokemonNameUpdate} ></input> </label>
            <p>Allez {pokemonName}, à l'attaque !</p>
        </section>
    );
};

export default PokemonSelector;