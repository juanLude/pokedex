import {pokeApi} from '../../config/api/pokeApi';
import type {Pokemon} from '../../domain/entities/pokemon';
import type {
  PokeAPIPokemon,
  PokePaginatedResponse,
} from '../../infrastructure/interfaces/pokeapi.interfaces';
import {PokemonMapper} from '../../infrastructure/mappers/pokemon.mapper';

// export const sleep = async () => {
//   return new Promise(resolve => setTimeout(resolve, 2000));
// };

export const getPokemons = async (
  page: number,
  limit: number = 20,
): Promise<Pokemon[]> => {
  // await sleep();
  try {
    const url = `/pokemon?offset=${page}&limit=${limit}`;
    const {data} = await pokeApi.get<PokePaginatedResponse>(url);

    const pokemonPromises = data.results.map(info => {
      return pokeApi.get<PokeAPIPokemon>(info.url);
    });
    console.log(data);
    const pokeApiPokemons = await Promise.all(pokemonPromises);
    const pokemonsPromises = pokeApiPokemons.map(item =>
      PokemonMapper.pokeApiPokemonToEntity(item.data),
    );

    return await Promise.all(pokemonsPromises);
  } catch (error) {
    throw new Error('Error getting pokemons');
  }
};
