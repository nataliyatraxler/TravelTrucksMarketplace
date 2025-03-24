import css from "./Layout.module.css";

import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className={css.container}>{children}</main>;
    </>
  );
}
