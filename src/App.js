import "./App.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import CharacterGrid from "./components/CharacterGrid";
import Search from "./components/Search";

import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      // console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
