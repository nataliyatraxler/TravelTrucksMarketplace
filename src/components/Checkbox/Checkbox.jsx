import css from "./Checkbox.module.css";
import clsx from "clsx";
import icons from "../../assets/icons/icons.svg";

const Checkbox = ({ name, checked, onChange, label }) => {
  return (
    <label className={clsx(css.filterButton, { [css.active]: checked })}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={css.hiddenInput}
      />
      <svg className={css.icon}>
        <use href={`${icons}#icon-${name}`} />
      </svg>
      {label}
    </label>
  );
};

export default Checkbox;
