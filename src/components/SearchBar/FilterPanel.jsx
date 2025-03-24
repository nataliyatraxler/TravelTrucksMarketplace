import css from "./FilterPanel.module.css";
import icons from "../../assets/icons/icons.svg";
import { useId, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import RadioButton from "../RadioButton/RadioButton";
import Button from "../Button/Button";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { selectFilters } from "../../redux/filters/selectors";
import { useSelector, useDispatch } from "react-redux";
import { resetFilters } from "../../redux/filters/slice";
import { defaultParams } from "../../utils/params";

export default function FilterPanel({ handleSearch }) {
  const locationId = useId();
  const dispatch = useDispatch();
  const filtersFromRedux = useSelector(selectFilters);
  const [filterValues, updateFilters] = useState(filtersFromRedux);

  const resetAllFilters = () => {
    dispatch(resetFilters());
    updateFilters(defaultParams);
  };

  const onLocationUpdate = (e) => {
    const { name, value } = e.target;
    updateFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleFeatureOption = (name, value) => {
    updateFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const selectVehicleType = (name, value) => {
    updateFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitFilterForm = (e) => {
    e.preventDefault();
    handleSearch(filterValues);
    e.target.reset();
  };

  return (
    <form className={css.filterTitlePanel} onSubmit={submitFilterForm}>
      <div className={css.regionGroup}>
        <label className={css.regionLabel} htmlFor={locationId}>
          Location
          <div className={css.regionInputBox}>
            <svg
              className={`${css.regionIcon} ${
                filterValues.location ? css.filled : ""
              }`}
            >
              <use href={`${icons}#icon-Map`} />
            </svg>
            <input
              id={locationId}
              type="text"
              name="location"
              value={filterValues.location || ""}
              onChange={onLocationUpdate}
              placeholder="Ukraine, Kyiv"
              className={css.regionInput}
            />
          </div>
        </label>
      </div>

      <div className={css.filterTitleSection}>
        <p className={css.filterTitle}>Filters</p>
        <h3 className={css.filterTitleGroupTitle}>Vehicle equipment</h3>
        <div className={css.dividerLine}></div>
        <div className={css.filterOptions}>
          <Checkbox
            name="AC"
            checked={filterValues.AC}
            onChange={() => toggleFeatureOption("AC", !filterValues.AC)}
            icon="wind"
            label="AC"
          />
          <Checkbox
            name="transmission"
            checked={filterValues.transmission == "automatic"}
            onChange={() =>
              toggleFeatureOption(
                "transmission",
                filterValues.transmission == "automatic" ? "" : "automatic"
              )
            }
            label="Automatic"
          />

          <Checkbox
            name="kitchen"
            checked={filterValues.kitchen}
            onChange={() => toggleFeatureOption("kitchen", !filterValues.kitchen)}
            label="Kitchen"
          />
          <Checkbox
            name="TV"
            checked={filterValues.TV}
            onChange={() => toggleFeatureOption("TV", !filterValues.TV)}
            label="TV"
          />
          <Checkbox
            name="bathroom"
            checked={filterValues.bathroom}
            onChange={() =>
              toggleFeatureOption("bathroom", !filterValues.bathroom)
            }
            label="Bathroom"
          />
          <Checkbox
            name="microwave"
            checked={filterValues.microwave}
            onChange={() =>
              toggleFeatureOption("microwave", !filterValues.microwave)
            }
            label="Microwave"
          />
          <Checkbox
            name="radio"
            checked={filterValues.radio}
            onChange={() => toggleFeatureOption("radio", !filterValues.radio)}
            label="Radio"
          />
          <Checkbox
            name="refrigerator"
            checked={filterValues.refrigerator}
            onChange={() =>
              toggleFeatureOption("refrigerator", !filterValues.refrigerator)
            }
            label="Refrigerator"
          />
          <Checkbox
            name="gas"
            checked={filterValues.gas}
            onChange={() => toggleFeatureOption("gas", !filterValues.gas)}
            label="Gas"
          />
          <Checkbox
            name="water"
            checked={filterValues.water}
            onChange={() => toggleFeatureOption("water", !filterValues.water)}
            label="Water"
          />
          <Checkbox
            name="engine"
            checked={filterValues.engine == "petrol"}
            onChange={() =>
              toggleFeatureOption(
                "engine",
                filterValues.engine == "petrol" ? "" : "petrol"
              )
            }
            label="Petrol"
          />
        </div>

        <h3 className={css.filterTitleGroupTitle}>Vehicle type</h3>
        <div className={css.dividerLine}></div>
        <div className={css.filterOptions}>
          <RadioButton
            name="form"
            value="panelTruck"
            checked={filterValues.form === "panelTruck"}
            onChange={selectVehicleType}
            icon="van"
            label="Van"
          />
          <RadioButton
            name="form"
            value="fullyIntegrated"
            checked={filterValues.form === "fullyIntegrated"}
            onChange={selectVehicleType}
            icon="integrated"
            label="Fully Integrated"
          />
          <RadioButton
            name="form"
            value="alcove"
            checked={filterValues.form === "alcove"}
            onChange={selectVehicleType}
            icon="alcove"
            label="Alcove"
          />
        </div>
      </div>
      <div className={css.panelActionGroup}>
        <Button message="Search" type="submit" />
        <SecondaryButton message="Clear Filters" onClick={resetAllFilters} />
      </div>
    </form>
  );
}
