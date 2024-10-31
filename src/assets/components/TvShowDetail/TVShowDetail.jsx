import PropTypes from "prop-types";
import s from "./style.module.css";

export function TVShowDetail({ tvShow = {} }) {
  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating}>{(tvShow.vote_average / 2).toFixed(2)}</div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}

TVShowDetail.propTypes = {
  tvShow: PropTypes.shape({
    name: PropTypes.string.isRequired,
    // Add other properties of tvShow if needed
  }).isRequired,
};
