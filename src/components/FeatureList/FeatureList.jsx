import Feature from "../Feature/Feature";
import css from "./FeatureList.module.css";

export default function FeatureList({ features }) {
  const {
    transmission,
    engine,
    kitchen,
    AC,
    TV,
    bathroom,
    microwave,
    radio,
    refrigerator,
    gas,
    water,
  } = features;

  return (
    <div className={css.features}>
      {transmission === "automatic" && (
        <Feature icon="transmission" description="Automatic" />
      )}
      {engine === "petrol" && <Feature icon="engine" description="Petrol" />}
      {kitchen && <Feature icon="kitchen" description="Kitchen" />}
      {AC && <Feature icon="AC" description="AC" />}
      {TV && <Feature icon="TV" description="TV" />}
      {bathroom && <Feature icon="bathroom" description="Bathroom" />}
      {microwave && <Feature icon="microwave" description="Microwave" />}
      {radio && <Feature icon="radio" description="Radio" />}
      {refrigerator && (
        <Feature icon="refrigerator" description="Refrigerator" />
      )}
      {gas && <Feature icon="gas" description="Gas" />}
      {water && <Feature icon="water" description="Water" />}
    </div>
  );
}
