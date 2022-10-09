import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'

import './Update.css'

export default function Update() {

  const { id } = useParams()
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState(12)
  const [newIngredient, setNewIngredient] = useState('')
  const [currentIngredients, setCurrentIngredients] = useState([])
  const ingredientInput = useRef(null)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
      if (doc.exists) {
        setIsPending(false)
        setTitle(doc.data().title)
        setMethod(doc.data().method)
        setCookingTime(doc.data().time)
        setCurrentIngredients(doc.data().ingredients)
      } else {
        setIsPending(false)
        setError('Could not find that recipe')
      } 
    })

    return () => unsub()

  },[id])


    const handleAdd = (e) => {
        e.preventDefault()
        const ing = newIngredient.trim()
    
        if (ing && !currentIngredients.includes(ing)) {
          setCurrentIngredients(prev => [...prev, ing])
        }
        setNewIngredient('')
        ingredientInput.current.focus()
      }

  return (
    <div className='update'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>{isPending}</p>}
      <h2 className='page-title'>Update recipe</h2>

      <form >
        <label>
          <span>Recipe title:</span>
          <input 
            type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className='ingredients'>
            <input 
              type="text" 
              onChange={e => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className='update--btn'>add</button>
          </div>
        </label>
        <p>Current ingredients: {currentIngredients.map(ingredient => (
          <em key={ingredient}>{ingredient} <button className='deleteIng'>(x)</button>, </em>
        ))}</p>

        <label>
          <span>Recipe method:</span>
          <input 
            type="text"
            onChange={e => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input 
            type="number"
            onChange={e => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className='update--btn'>Update</button>
      </form>
    </div>
  )
}