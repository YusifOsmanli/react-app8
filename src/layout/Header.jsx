import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../Context'
import "./Header.css"

const Header = () => {
    const{handleSearch}=useContext(MainContext)
  return (
    <div className='header__div'>
        <h2>
            Supro.
        </h2>
        <ul className='header__ul'>
            <li className='header__li'>
               <Link className='header__link' to = ''>Home</Link>
            </li>
            <li>
                <Link className='header__link' to= 'favourites'>Favourites</Link>
            </li>
            <li>
                <Link className='header__link' to= 'basket'>Basket</Link>
            </li>
        </ul>
        <input className='header__input' type="text" placeholder='Search entire store here...'  onChange={handleSearch}/>
    </div>
  )
}

export default Header