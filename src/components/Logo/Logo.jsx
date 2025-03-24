import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
import icons from "../../assets/icons/icons.svg";

export default function Logo() {
  return (
    <NavLink to="/" className={css.logoLink}>
      <svg className={css.logo}>
        <use href={`${icons}#icon-logo`} />
      </svg>
    </NavLink>
  );
}
