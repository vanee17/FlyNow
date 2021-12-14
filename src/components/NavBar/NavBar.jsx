import React from 'react'
import './NavBar.css'
import '../CartWidget'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import { getCategories } from '../ItemListContainer/products'
import { useEffect, useState } from 'react'

const NavBar = () => {

    const[categories, setCategories] = useState([])

        useEffect(() =>{
            getCategories().then(categories =>{
                setCategories(categories)
            })
        },[])
console.log(categories)
    return (
        <div>
            <ul className="navContainer">
                <Link className='title' to={'/'}>FlyNow!</Link>
                    <Link className="list" to={'/'}>PLANES</Link>
                    <div> 
                        {categories.map(cat=><Link className="list" key={cat.id} to={`/category/${cat.id}`}>{cat.description}</Link>)}
                    </div>
                    <CartWidget/>
            </ul>

        </div>
    )
}
export default NavBar
