import { NavLink } from "react-router-dom";
import css from "./Menu.module.css";
import { buildLinkClass } from "../../utils/utils";

export default function Menu() {
  return (
    <div className={css.menu}>
      <NavLink to="/" className={(props) => buildLinkClass({ ...props, css })}>
        Home
      </NavLink>

      <NavLink
        to="/catalog"
        className={(props) => buildLinkClass({ ...props, css })}
      >
        Catalog
      </NavLink>
    </div>
  );
}
