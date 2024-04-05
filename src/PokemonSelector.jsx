import {useState} from "react";

const PokemonSelector = ({pokemons}) => {

    const[pokemonName,setPokemonName] = useState("");
    const[message,setMessage] = useState("");

    const addPokemonName = (e) => {

        if(pokemons.find((pokemon) => {
            return pokemon.name == e.currentTarget.value;
        }) == undefined)
        {
            console.log("nouveau pokémon");
            setPokemonName(e.currentTarget.value);
            setMessage(`Allez ${pokemonName}, à l'attaque !`)
        }
        else
        {
            console.log("existe déjà");
            setPokemonName("");
            setMessage(`${e.currentTarget.value} existe déjà !`)
        }   
    };

    return (
        <section>
            <h2>Ajout de nouveau Pokémon</h2>
            <label name="name"> Choisissez le nom du pokémon à ajouter dans votre team: <input type = "text" onChange = {addPokemonName} ></input> </label>
            <p>{message}</p>
        </section>
    );
};

export default PokemonSelector;