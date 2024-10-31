import PropTypes from "prop-types";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import s from "./style.module.css";

export function TVShowDetail({ tvShow = {} }) {
  const rating = parseFloat((tvShow.vote_average / 2).toFixed(2));
  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating}/>
        <div className={s.rating}>{rating}</div>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}

TVShowDetail.propTypes = {
  tvShow: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
