import ReviewCard from "../ReviewCard/ReviewCard";
import css from "./ReviewList.module.css";

const ReviewList = ({ reviews }) => {
  return (
    <div className={css.reviewList}>
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
