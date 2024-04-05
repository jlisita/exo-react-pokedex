import { useState } from 'react';

const Pokedex = () => {


    const [listPokemon, setListPokemon] = useState([]);

    const newPokemon = (event) => {
        event.preventDefault();
        let name = event.target.name.value;
        let arr = [];
        listPokemon.forEach((el) => { arr.push(el)})
        arr.push(name);
        console.log(arr)
        setListPokemon(arr);
    }

        return (
            <section>
                <h2>Pokédex</h2>
                <ul>
                    { listPokemon.map( (pokemon) => {
                        return (
                            <li>{pokemon}</li>
                        )
                    })}
                </ul>
                <form onSubmit = {newPokemon}>
                    <label>Entrer le nom: <input type="text" name = "name"/></label>
                    <input type = "submit"/>
                </form>
            </section>
        );  
};

export default Pokedex;