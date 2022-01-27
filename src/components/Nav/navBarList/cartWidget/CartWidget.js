import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Context from '../../../../context/CartContext';
import persona from '../../../img/persona.png'

const CartWidget = () => {
    const { getCount } = useContext(Context);

    return (
        <div className="carrito">
        <Link to={'/cart'}><button><img src={persona} to="/cart" alt="logo"/>{getCount()}</button>
            
        </Link>
        </div>
    );
};

export default CartWidget;
