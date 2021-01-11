import React, { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList/PokemonList";
import Pagination from "../components/PokemonList/Pagination";
import styles from "./App.module.scss";
import axios from "axios";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((pokeResponse) => {
        setLoading(false);
        setNextPageUrl(pokeResponse.data.next);
        setPrevPageUrl(pokeResponse.data.previous);
        setPokemon(pokeResponse.data.results.map((p) => p.name));
      });
    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }


  return (
    <>
      <div class={styles.main}>
      <PokemonList pokemon={pokemon}/>
      </div>
        {loading && <LoadingComponent/>}
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
