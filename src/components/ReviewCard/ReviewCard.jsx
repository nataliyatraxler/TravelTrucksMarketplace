import css from "./ReviewCard.module.css";
import clsx from "clsx";
import icons from "../../assets/icons/icons.svg";

const ReviewCard = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;

  const getFirstLetter = (name) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase();
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={clsx({
            [css.starFilled]: i <= rating,
            [css.starEmpty]: i > rating,
          })}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="16px"
          height="16px"
        >
          <use href={`${icons}#icon-star`} />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className={css.review}>
      <div className={css.topBlock}>
        <div className={css.image}>
          <h2 className={css.imageLetter}>{getFirstLetter(reviewer_name)}</h2>
        </div>
        <div className={css.reviewContent}>
          <h3 className={css.reviewerName}>{reviewer_name}</h3>
          <div className={css.rating}>{renderStars(reviewer_rating)}</div>
        </div>
      </div>
      <p className={css.comment}>{comment}</p>
    </div>
  );
};

export default ReviewCard;
