import PropTypes from "prop-types";
import s from "./style.module.css";

export function Logo({ image, title, subtitle }) {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={image} alt="logo" />
        <span className={s.title}>{title}</span>
      </div>
      <span className={s.subtitle}>{subtitle}</span>
    </>
  );
}

Logo.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
