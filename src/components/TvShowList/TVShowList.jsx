import PropTypes from "prop-types";
import { TVShowListItem } from "../TvShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <>
      <div className={s.title}>You may also like</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={s.tv_show_list_item} key={tvShow.id}>
              <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </>
  );
}

TVShowList.propTypes = {
  tvShowList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClickItem: PropTypes.func.isRequired,
};
