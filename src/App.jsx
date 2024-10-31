import "bootstrap/dist/js/bootstrap.bundle.min.js";
import s from "./style.module.css";
import "./App.css";
import { TVShowAPI } from "./api/tv-show";
import { TVShowListItem } from "./components/TvShowListItem/TVShowListItem";
import { useState } from "react";
import { useEffect } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";

// Composants enfants

import { TVShowDetail } from "./components/TvShowDetail/TVShowDetail";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();
    if (populars.length > 0) {
      setCurrentTVShow(populars[0]);
    }
  }

  function setCurrentTvShowFromRecommendation(tvShow) {
    alert(JSON.stringify(tvShow));
  }

  // le hook useEffect se lancer au moins une fois (au niveau de chargement dans le DOM du component)
  useEffect(() => {
    fetchPopulars();
  }, []);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              title={"WhatToWatch"}
              subtitle={"Find a show you may like"}
              image={logo}
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>
        {currentTVShow && (
          <>
            <TVShowListItem
              tvShow={currentTVShow}
              onClickItem={setCurrentTvShowFromRecommendation}
            />
            <TVShowListItem
              tvShow={currentTVShow}
              onClickItem={setCurrentTvShowFromRecommendation}
            />
            <TVShowListItem
              tvShow={currentTVShow}
              onClickItem={setCurrentTvShowFromRecommendation}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
