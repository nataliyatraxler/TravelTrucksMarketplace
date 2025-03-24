import css from "./Button.module.css";

export default function Button({
  message,
  onClick = undefined,
  type = "button",
}) {
  return (
    <button type={type} className={css.button} onClick={onClick}>
      {message}
    </button>
  );
}
