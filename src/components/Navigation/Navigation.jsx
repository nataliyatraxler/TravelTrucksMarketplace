import css from "./Navigation.module.css";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Logo />
        <Menu />
      </nav>
    </header>
  );
}
