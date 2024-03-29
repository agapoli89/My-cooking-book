import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Trashcan from '../assets/delete.svg'
import { projectFirestore } from '../firebase/config'

import './RecipeList.css'

export default function RecipeList({ recipies }) {
  const { mode } = useTheme()

  if (recipies.lenght === 0) return <p className='error'>No recipies to load...</p>

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <div className='recipe-list'>
        {recipies.map(recipe => (
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.time} minutes to make</p>
                <div>{recipe.method.substring(0,100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                <img 
                  className='delete'
                  src={Trashcan}
                  onClick={() => handleClick(recipe.id)}
                />
            </div>
        ))}
    </div> 
  )
}
