import css from "./SecondaryButton.module.css";

export default function SecondaryButton({ message, onClick }) {
  return (
    <button className={css.button} onClick={onClick}>
      {message}
    </button>
  );
}
