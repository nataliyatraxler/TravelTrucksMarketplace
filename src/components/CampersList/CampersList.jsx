import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import Camper from "../Camper/Camper";
import css from "./CampersList.module.css";

export default function CampersList() {
  const campers = useSelector(selectCampers);

  return (
    <ul className={css.camperList}>
      {campers.map((camper) => (
        <li key={camper.id} className={css.camperItem}>
          <Camper camper={camper} />
        </li>
      ))}
    </ul>
  );
}
