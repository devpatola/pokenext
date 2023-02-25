import React from "react";
import Image from "next/image";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o PokeNext</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        incidunt ad aperiam voluptates, itaque et numquam sequi amet facilis
        minus rerum dolorem fuga eius modi, non minima dignissimos accusantium
        adipisci?
      </p>
      <Image
        src={"/images/charizard.png"}
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
