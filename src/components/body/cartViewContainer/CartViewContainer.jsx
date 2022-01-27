import React, { useContext } from 'react';
import CartContext from '../../../context/CartContext';
import ItemsCartList from './ItemCartList/ItemsCartList';
import { Link } from 'react-router-dom';
import NotificationContext from '../../../context/NotificationContext';


const CartViewContainer = () => {
    const { clearItems, values, getCount, getTotal } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);

    const checkout = () => {
        setNotification('succes', `¡Finalizaste tu compra! ¡compraste ${getCount()} productos a $${getTotal()}!`);
    };

    return (
        <div className="containerCart">
            {values.itemCart.length !== 0 ? (
                <div>
                    <button className="boton" onClick={clearItems}>
                        Borrar todos los items
                    </button>
                    <ItemsCartList items={values.itemCart} total={getTotal()} />
                    <Link to="/checkout" onClick={checkout}>
                        <button className="boton">Terminar Compra</button>
                    </Link>
                </div>
            ) : (
                <div>
                    <Link to="/">
                        <button className="boton2">Volver a la tienda</button>
                    </Link>
                    <h2>Tu carrito está vacío</h2>
                    <h3 className='central'>¿No sabés qué comprar? ¡Miles de productos te esperan!</h3>
                </div>
            )}
        </div>
    );
};

export default CartViewContainer;
