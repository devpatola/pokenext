import React from "react";

export async function getStaticPaths() {
  const maxPokemon = 251;
  const endpoint = "https://pokeapi.co/api/v2/pokemon/";

  const response = await fetch(`${endpoint}/?limit=${maxPokemon}`);
  const data = await response.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: {
        pokemonId: (index + 1).toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.pokemonId;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return {
    props: {
      pokemon: data,
    },
  };
}

export default function PokemonId({ pokemon }) {
  return (
    <>
      <p>{pokemon.name}</p>
    </>
  );
}
