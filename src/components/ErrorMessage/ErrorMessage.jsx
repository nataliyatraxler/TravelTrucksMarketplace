import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div>
      <h2 className={css.fetchError}>
        Oops, something went wrong, please, try again later
      </h2>
    </div>
  );
}
