import CartContext from './context/CartContext'
import persona from './img/persona.png'
import {useContext} from 'react'
import { Link } from 'react-router-dom'

function CartWidget  () {
        const {values} = useContext(CartContext)
        
        return(
                <>
        <div className="carrito">
                <Link to={'/cart'}><button><img src={persona} to="/cart" alt="logo"/>{values.quantity}</button></Link>
                </div>
                </>
        )
        }
export default CartWidget