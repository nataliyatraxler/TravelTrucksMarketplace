import css from "./CamperFeatures.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCurrentCamper } from "../../redux/campers/selectors";
import { fetchCamper } from "../../redux/campers/operations";
import FeatureList from "../FeatureList/FeatureList";
import VehicleDetailsList from "../VehicleDetailsList/VehicleDetailsList";
import BookingForm from "../BookingForm/BookingForm";

export default function CamperFeatures() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCurrentCamper);

  const { form, length, width, height, tank, consumption, ...features } =
    camper;

  useEffect(() => {
    if (!camper || id != camper.id) {
      dispatch(fetchCamper(id));
    }
  }, [dispatch, id, camper]);

  return (
    <div className={css.container}>
      <div className={css.features}>
        <div className={css.featureBlock}>
          <FeatureList features={features} />
        </div>
        <div className={css.vehicleDetails}>
          <h3 className={css.vehicleDetailsTitle}>Vehicle Details</h3>
          <div className={css.horizontalLine}> </div>
          <VehicleDetailsList
            details={{ form, length, width, height, tank, consumption }}
          />
        </div>
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
