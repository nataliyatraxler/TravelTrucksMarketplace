import css from "./Camper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";
import icons from "../../assets/icons/icons.svg";
import FeatureList from "../FeatureList/FeatureList";
import Button from "../Button/Button";
import RatingLocation from "../RatingLocation/RatingLocation";

export default function Camper({ camper }) {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews,
    ...features
  } = camper;

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.ids);
  const isFavorite = favorites.includes(id);
  const reviewsCount = reviews.length;
  const goToRoute = useNavigate();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  const handleShowMore = () => {
    goToRoute(`/catalog/${id}`);
  };

  return (
    <div className={css.card}>
      <img src={gallery[0].thumb} alt={name} className={css.image} />
      <div className={css.details}>
        <div className={css.title}>
          <h2 className={css.titleDetails}>{name}</h2>
          <div className={css.priceContainer}>
            <h2 className={css.titleDetails}>€{price.toFixed(2)}</h2>
            <button
              className={`${css.favoriteButton} ${
                isFavorite ? css.favorite : ""
              }`}
              onClick={handleFavoriteClick}
            >
              <svg className={css.favoriteIcon}>
                <use href={`${icons}#icon-heart`} />
              </svg>
            </button>
          </div>
        </div>

        <RatingLocation
          reviewsCount={reviewsCount}
          rating={rating}
          location={location}
        />
        <p className={css.description}>{description}</p>

        <FeatureList features={features} />

        <div className={css.showMoreBtn}>
          <Button message="Show More" onClick={handleShowMore} />
        </div>
      </div>
    </div>
  );
}
