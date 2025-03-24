import css from "./Feature.module.css";
import icons from "../../assets/icons/icons.svg";

const Feature = ({ icon, description }) => {
  return (
    <div className={css.feature}>
      <svg className={css.featureIcon}>
        <use href={`${icons}#icon-${icon}`} />
      </svg>
      <p className={css.featureDescription}>{description}</p>
    </div>
  );
};

export default Feature;
