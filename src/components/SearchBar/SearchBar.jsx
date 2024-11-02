import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import PropTypes from "prop-types";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim().length !== "") {
      onSubmit(e.target.value);
    }
  }

  return (
    <>
      <SearchIcon size={20} className={s.icon} />
      <input
        className={s.input}
        type="text"
        placeholder="Search a tv show you may like"
        onKeyUp={submit}
      />
    </>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
