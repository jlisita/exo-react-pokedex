import {useState} from "react";
import Pokemon from './Pokemon'

const RandomPokemon  = ({pokemons}) => {

    const[display,setDisplay] = useState(0); 

    const updateDisplay = () => {
        console.log("click")
        setDisplay(display+1);
    };


    const randomIndex = Math.round(Math.random() * (pokemons.length-1)); 
    const randomPokemon = pokemons[randomIndex];

    return (
        <section>
            <h2>Pokémon aléatoire</h2>
            <div className='cardGallery'>
                <Pokemon pokemon = {randomPokemon} displayImg = {true}/>  
            </div> 
            <button onClick = {updateDisplay}>Refresh</button>
        </section>
    );
};

export default RandomPokemon ;