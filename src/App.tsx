import type { Component } from "solid-js";

import styles from "./App.module.css";
import Card from "./components/Card";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Card />
    </div>
  );
};

export default App;
