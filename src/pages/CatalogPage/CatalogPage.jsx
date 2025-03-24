import { Toaster } from "react-hot-toast";
import Layout from "../../components/Layout/Layout";
import FilterPanel from "../../components/SearchBar/FilterPanel";
import CampersList from "../../components/CampersList/CampersList";
import css from "./CatalogPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectLoading,
  selectError,
  selectHasCampers,
  selectTotal,
  selectCurrentPage,
} from "../../redux/campers/selectors";
import { fetchCampers } from "../../redux/campers/operations";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { updateCurrentPage } from "../../redux/campers/slice";
import { updateFilters } from "../../redux/filters/slice";
import { useSearchParams } from "react-router-dom";
import { filterParams } from "../../utils/params";
import { selectFilters } from "../../redux/filters/selectors";

export default function CatalogPage() {
  const loadingStatus = useSelector(selectLoading);
  const fetchError = useSelector(selectError);
  const hasCampers = useSelector(selectHasCampers);
  const dispatch = useDispatch();
  const total = useSelector(selectTotal);
  const currentPage = useSelector(selectCurrentPage);
  const hasMore = total > currentPage * 4;
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useSelector(selectFilters);

  useEffect(() => {
    const filteredParams = filterParams(filters);
    if (filteredParams) {
      setSearchParams({ ...filteredParams, page: currentPage });
    }
    if (!hasCampers) {
      dispatch(
        fetchCampers({ params: Object.fromEntries(searchParams.entries()) })
      );
    }
  }, [dispatch, currentPage, filters, hasCampers, searchParams, setSearchParams]); // ✅ fixed here

  const handleLoadMore = () => {
    dispatch(
      fetchCampers({
        page: currentPage + 1,
        params: Object.fromEntries(searchParams.entries()),
      })
    );
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page: currentPage + 1,
    });
    dispatch(updateFilters(Object.fromEntries(searchParams.entries())));
    dispatch(updateCurrentPage(currentPage + 1));
  };

  const handleSearch = (params) => {
    dispatch(updateCurrentPage(1));
    setSearchParams({ ...filterParams(params), page: 1 });
    dispatch(updateFilters({ ...filterParams(params) }));
    dispatch(fetchCampers({ params, page: 1 }));
  };

  return (
    <Layout>
      <Toaster />
      <div className={css.container}>
        <FilterPanel handleSearch={handleSearch} />
        <div className={css.gallery}>
          {loadingStatus && !fetchError && <Loader />}
          {!loadingStatus && fetchError && <ErrorMessage />}
          {!loadingStatus && !fetchError && hasCampers ? (
            <>
              <CampersList />
              {hasMore && (
                <div className={css.loadMore}>
                  <SecondaryButton
                    message="Load more"
                    onClick={handleLoadMore}
                  />
                </div>
              )}
            </>
          ) : (
            !loadingStatus &&
            !fetchError && (
              <div className={css.notAvailableContainer}>
                <h2 className={css.notAvailable}>No campers found</h2>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  );
}
