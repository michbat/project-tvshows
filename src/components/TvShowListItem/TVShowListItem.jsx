import PropTypes from "prop-types";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";

export function TVShowListItem({ tvShow = {}, onClickItem }) {
  return (
    <div onClick={()=>onClickItem(tvShow)} className={s.container}>
      <img
        className={s.img}
        src={`${SMALL_IMG_COVER_BASE_URL}${tvShow.backdrop_path}`}
        alt={tvShow.name}
      />
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
}

TVShowListItem.propTypes = {
  tvShow: PropTypes.shape({
    name: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
  }).isRequired,
  onClickItem: PropTypes.func.isRequired

};
