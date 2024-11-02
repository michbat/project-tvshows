import "bootstrap/dist/js/bootstrap.bundle.min.js";
import s from "./style.module.css";
import "./App.css";
import { TVShowAPI } from "./api/tv-show";
import { useState } from "react";
import { useEffect } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";
import { TVShowDetail } from "./components/TvShowDetail/TVShowDetail";
import { TVShowList } from "./components/TvShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();
    if (populars.length > 0) {
      setCurrentTVShow(populars[0]);
    }
  }

  async function fetchRecommendations(tvShowid) {
    const recommendations = await TVShowAPI.fetchRecommendations(tvShowid);
    if (recommendations.length > 0) {
      setRecommendationList(recommendations.slice(0, 10));
    }
  }

  async function searchTVShow(tvShowName) {
    const searchResponses = await TVShowAPI.fetchByTitle(tvShowName);
    if (searchResponses.length > 0) {
      setCurrentTVShow(searchResponses[0]);
    }
  }

  // Cette useEffect va se lancer qu'une seule fois ([]) après un premier render (alors currentTvShow est indefined)
  useEffect(() => {
    fetchPopulars();
  }, []);

  // Cette useEffect va se lancer à chaque fois que la propriété currentTVshowChange (ne se lance qu'après le premier render initial)

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

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
            <SearchBar onSubmit={searchTVShow} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>
        {recommendationList && recommendationList.length > 0 && (
          <TVShowList
            tvShowList={recommendationList}
            onClickItem={setCurrentTVShow}
          />
        )}
      </div>
    </div>
  );
}

export default App;
