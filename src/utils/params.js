export const defaultParams = {
  location: "",
  AC: false,
  transmission: "",
  kitchen: false,
  TV: false,
  bathroom: false,
  microwave: false,
  radio: false,
  refrigerator: false,
  gas: false,
  water: false,
  engine: "",
  form: "",
};
export const filterParams = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) => value !== "" && value !== null && value !== false
    )
  );
};
