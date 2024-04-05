import { useState } from 'react';

const Pokedex = () => {


    const [listPokemon, setListPokemon] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let newPokemon = event.target.name.value;
        const newPokedex = [...listPokemon, newPokemon];
        setListPokemon(newPokedex);
    }
        return (
            <section>
                <h2>Pokédex</h2>
                <ul>
                    {listPokemon.map( (pokemon) => {
                        return (
                            <li>{pokemon}</li>
                        )
                    })}
                </ul>
                <form onSubmit = {handleSubmit}>
                    <label>Entrer le nom: <input type="text" name = "name"/></label>
                    <input type = "submit"/>
                </form>
            </section>
        );  
};

export default Pokedex;