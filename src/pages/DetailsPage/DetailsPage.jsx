import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Suspense } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import clsx from "clsx";
import Layout from "../../components/Layout/Layout";
import css from "./DetailsPage.module.css";
import { fetchCamper } from "../../redux/campers/operations";
import {
  selectCurrentCamper,
  selectLoading,
  selectError,
} from "../../redux/campers/selectors";
import RatingLocation from "../../components/RatingLocation/RatingLocation";
import Loader from "../../components/Loader/Loader";
import GalleryModal from "../../components/GalleryModal/GalleryModal";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function DetailsPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const loadingStatus = useSelector(selectLoading);
  const fetchError = useSelector(selectError);
  const storedCamper = useSelector(selectCurrentCamper);
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    if (!storedCamper || id != storedCamper.id) {
      dispatch(fetchCamper(id));
    } else if (!camper || storedCamper.id != camper.id) {
      setCamper(storedCamper);
    }
  }, [dispatch, id, storedCamper, camper]);

  const getLinkClass = (path) => {
    return clsx(css.link, {
      [css.active]: location.pathname === path,
    });
  };

  return (
    <Layout>
      <div className={css.details}>
        {loadingStatus && <Loader />}
        {fetchError && !camper && <ErrorMessage message={fetchError} />}
        {camper && (
          <div>
            <h2 className={css.title}>{camper.name}</h2>
            <RatingLocation
              reviewsCount={camper.reviews.length}
              rating={camper.rating}
              location={camper.location}
            />
            <h2 className={css.price}>€{camper.price.toFixed(2)}</h2>
            <GalleryModal gallery={camper.gallery} name={camper.name} />
            <p className={css.description}>{camper.description}</p>
            <ul className={css.menu}>
              <li>
                <Link
                  className={getLinkClass(`/catalog/${id}/features`)}
                  to={`/catalog/${id}/features`}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className={getLinkClass(`/catalog/${id}/reviews`)}
                  to={`/catalog/${id}/reviews`}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <div className={css.horizontalLine}> </div>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        )}
      </div>
    </Layout>
  );
}
