import css from "./VehicleDetailsList.module.css";

export default function VehicleDetailsList({ details }) {
  const { form, length, width, height, tank, consumption } = details;

  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const detailItems = [
    { label: "Form", value: capitalize(form) },
    { label: "Length", value: length },
    { label: "Width", value: width },
    { label: "Height", value: height },
    { label: "Tank", value: tank },
    { label: "Consumption", value: consumption },
  ];

  return (
    <div className={css.detailsList}>
      {detailItems.map((item) => (
        <div key={item.label} className={css.detailItem}>
          <span className={css.label}>{item.label}</span>
          <span className={css.value}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
