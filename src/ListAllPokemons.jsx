import Pokemon from './Pokemon'

const ListAllPokemons = ({pokemons}) => {
    return (
        <section>
        <h2>Liste de tout les pokemons</h2>
            {pokemons.map((pokemon) => {
                return(
                        <Pokemon pokemon = {pokemon} displayImg = {false}/> 
                )
            })}
        </section>
    );
};

export default ListAllPokemons;