import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Card from "@/components/Card";

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
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src={"/images/pokeball.png"}
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemon.map(({ name, id }) => (
          <Card key={id} pokemon={{ name, id }} />
        ))}
      </div>
    </>
  );
}
