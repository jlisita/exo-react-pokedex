import Pokemon from './Pokemon'

const ListAllPokemons = ({pokemons}) => {
    return (
        <>
            {pokemons.map((pokemon) => {
                return(
                        <Pokemon pokemon = {pokemon} displayImg = {false}/> 
                )
            })}
        </>
    );
};

export default ListAllPokemons;