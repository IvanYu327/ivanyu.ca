import { Component } from "solid-js";
import styles from "./App.module.css";
import Card from "./components/Card";
import { RouteSectionProps } from "@solidjs/router";
import Line from "./components/Line";

export default function App({ children }: RouteSectionProps) {
  return (
    <div class={styles.App}>
      <h1 class="text-3xl font-bold">Header!</h1>
      <Line />
      {children}
      <h1 class="text-3xl font-bold">Footer!</h1>
    </div>
  );
}
