import css from "./CamperReviews.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCurrentCamper } from "../../redux/campers/selectors";
import { fetchCamper } from "../../redux/campers/operations";
import BookingForm from "../BookingForm/BookingForm";
import ReviewList from "../ReviewList/ReviewList";

export default function CamperReviews() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCurrentCamper);

  useEffect(() => {
    if (!camper || id != camper.id) {
      dispatch(fetchCamper(id));
    }
  }, [dispatch, id, camper]);

  return (
    <div className={css.container}>
      <div className={css.reviews}>
        {camper && <ReviewList reviews={camper.reviews} />}
      </div>
      <div className={css.formBlock}>
        <h3 className={css.formTitle}>Book your campervan now</h3>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
        <BookingForm />
      </div>
    </div>
  );
}
