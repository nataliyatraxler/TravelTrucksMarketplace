import { Bars } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.overlay}>
      <Bars
        height="80"
        width="80"
        color="var(--Main)"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
}
