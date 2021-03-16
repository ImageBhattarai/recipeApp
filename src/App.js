import {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipe();
  }, [query])

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const getSearch = e => {
    setSearch(e.target.value)
  }

  const findRecipe = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }


  return (
    <>
      <form className="form" onSubmit={findRecipe}>
        <input className="form-input" type="text" onChange={getSearch} value={search} />
        <button type="submit" className="form-button">Search</button>
      </form>
      <div className="row-container">
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} 
            image={recipe.recipe.image} 
            calories={recipe.recipe.calories} 
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </>
  )
}

export default App;
