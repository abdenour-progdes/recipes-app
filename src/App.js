import React, { useEffect, useState } from "react";
import Card from "./components/card";

const App = () => {
  const appId = "c0036659";
  const appKey = "a80a017565807050d26872ce0c66ca99";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(getRecipe, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getsearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <h1>recipe</h1>
        <form onSubmit={getsearch} className="form-inline">
          <input
            className="form-control mr-sm-2"
            value={search}
            onChange={updateSearch}
          ></input>
          <button type="submit" className="btn btn-primary m-2">
            search
          </button>
        </form>
      </nav>
      <div className="container align-items-center">
        {recipes.map((r, index) => (
          <Card key={index} card={r.recipe}></Card>
        ))}
      </div>
    </React.Fragment>
  );
};

export default App;
