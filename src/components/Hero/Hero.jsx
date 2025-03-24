import css from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

import heroJpg1x from "../../assets/images/hero.jpg";
import heroJpg2x from "../../assets/images/hero@2x.jpg";
import heroWebp1x from "../../assets/images/hero.webp";
import heroWebp2x from "../../assets/images/hero@2x.webp";
import heroAvif1x from "../../assets/images/hero.avif";
import heroAvif2x from "../../assets/images/hero@2x.avif";
import Button from "../Button/Button";

export default function Hero() {
  const goToRoute = useNavigate();
  const processClick = () => {
    goToRoute("/catalog");
  };
  return (
    <div className={css.heroContainer}>
      <picture>
        <source
          srcSet={`${heroAvif1x} 1x, ${heroAvif2x} 2x`}
          type="image/avif"
        />
        <source
          srcSet={`${heroWebp1x} 1x, ${heroWebp2x} 2x`}
          type="image/webp"
        />
        <img
          src={heroJpg1x}
          srcSet={`${heroJpg1x} 1x, ${heroJpg2x} 2x`}
          alt="Hero"
          className={css.heroImage}
        />
      </picture>
      <div className={css.heroContent}>
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <h2 className={css.heroText}>
          You can find everything you want in our catalog
        </h2>
        <Button message="View Now" onClick={processClick} />
      </div>
    </div>
  );
}
