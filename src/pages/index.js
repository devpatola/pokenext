import styles from "@/styles/Home.module.css";

export async function getStaticProps() {
  const maxPokemon = 251;
  const endpoint = "https://pokeapi.co/api/v2/pokemon/";

  const response = await fetch(`${endpoint}/?limit=${maxPokemon}`);
  const data = await response.json();

  data.results.forEach((pokemon, index) => {
    pokemon.id = index + 1;
  });

  return {
    props: {
      pokemon: data.results,
    },
  };
}

export default function Home({ pokemon }) {
  return (
    <div>
      <h1>PokeNext</h1>
      <ul>
        {pokemon.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
