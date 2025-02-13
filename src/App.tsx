import { RouteSectionProps } from "@solidjs/router";
import Footer from "./components/Footer";
import Header from "./components/Header";

import styles from "./App.module.css";

export default function App({ children }: RouteSectionProps) {
  return (
    <div class="min-h-screen flex flex-col px-5 sm:px-10 min-w-[300px] max-w-[640px] mx-auto">
      <Header />
      <main class="flex-grow" classList={{ [styles["fade-in"]]: true }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
