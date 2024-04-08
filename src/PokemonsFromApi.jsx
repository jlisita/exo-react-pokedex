import { useState } from 'react';

const PokemonsFromApi = () => {

    const[pokemons, setPokemon] = useState(null);

    fetch("https://pokebuildapi.fr/api/v1/pokemon")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setPokemon(data)
    });

    return (
        <section>
            <h2>Liste complète des 981 pokemons</h2>
            {!pokemons ? (
            <p>Pokemons en cours de chargement</p>
             ) : (
            <>
            {pokemons.map((pokemon) => {
                return (
                    <article>
                    {pokemon.name}
                    </article>
                );
            })}
            </>
             )}
        </section>
    );
};

export default PokemonsFromApi;