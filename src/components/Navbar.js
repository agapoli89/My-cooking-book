import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

import './Navbar.css'

import Searchbar from './Searchbar'

export default function Navbar() {

  const { color, changeColor } = useTheme()

  return (
    <div className='navbar' style={{ background: color }}>
        <nav onClick={() => changeColor('pink')}>
            <Link to ="/" className='brand'>
                <h1>My cooking book</h1>
            </Link>
            <Searchbar />
            <Link to="/create">Create recipe</Link>
        </nav>
    </div>
  )
}
