import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { effect } from "solid-js/web";
import { client } from "./graphql/client";
import { gql } from "graphql-request";

gql`
  query getUser {
    messages {
      user
      content
      id
    }
  }
`;

const App: Component = () => {
  effect(() => {
    client.getUser().then((data) => console.log(data));
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
