import { Link } from 'react-router-dom'

import './RecipeList.css'

export default function RecipeList({ recipies }) {

  if (recipies.lenght === 0) return <p className='error'>No recipies to load...</p>

  return (
    <div className='recipe-list'>
        {recipies.map(recipe => (
            <div key={recipe.id} className="card">
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make</p>
                <div>{recipe.method.substring(0,100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
            </div>
        ))}
    </div> 
  )
}
