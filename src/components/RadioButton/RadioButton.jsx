import css from "./RadioButton.module.css";
import clsx from "clsx";
import icons from "../../assets/icons/icons.svg";

const RadioButton = ({ name, value, checked, onChange, icon, label }) => {
  const processClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChange(name, checked ? null : value);
  };

  return (
    <label
      className={clsx(css.filterButton, checked && css.active, css[icon])}
      onClick={processClick}
    >
      <input
        type="radio"
        name={name}
        checked={checked}
        readOnly
        className={css.hiddenInput}
      />
      <svg className={css.icon}>
        <use href={`${icons}#icon-${icon}`} />
      </svg>
      {label}
    </label>
  );
};

export default RadioButton;
