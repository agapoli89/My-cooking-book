import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

import './Navbar.css'

import Searchbar from './Searchbar'

export default function Navbar() {

  const { color } = useContext(ThemeContext)

  return (
    <div className='navbar' style={{ background: color }}>
        <nav>
            <Link to ="/" className='brand'>
                <h1>My cooking book</h1>
            </Link>
            <Searchbar />
            <Link to="/create">Create recipe</Link>
        </nav>
    </div>
  )
}
