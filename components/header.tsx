import { FunctionalComponent } from "preact/src/index.d.ts";

const Header: FunctionalComponent = () => {
  return (
    <header>
      <a href="/">
        <button type="button">Todos</button>
      </a>
      <a href="/favorites">
        <button type="button">Favoritos</button>
      </a>
    </header>
  );
};

export default Header
