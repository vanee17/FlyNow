import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';

import ItemCount from '../itemCount/ItemCount';
import CartContext from '../../../../context/CartContext';
import NotificationContext from '../../../../context/NotificationContext';

const ItemDetail = ({ item }) => {
    const { addItemCart } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);

    const [purchase, setPurchase] = useState(false);

    const onAdd = (count) => {
        let itemCart = addItemCart({ item, count });
        if (itemCart) {
            setNotification('succes', `¡Haz añadido ${count} dias en ${item.name} a tu carrito!`);
            setPurchase(true);
        } else {
            setNotification('error', `¡Los Cupos Estan Llenos!`);
            setPurchase(false);
        }
    };

    return (
        <div>
            <h2> {item.name} </h2>
            <div className="card">
            <img className="imagen1"src={item.img} alt={item.name}/>
            <div>
            <h5>
                Caracteristicas: {item.information}
            </h5>
            <h5>Stock Disponible:</h5> {item.stock}{!purchase ? (<ItemCount getStock={item.stock} onAdd={onAdd} getInitial={1} />) : (
                <div>
                    <br/>
                    <div>
                        <Link className="boton" to={'/'}>Seleccionar otro Artículo</Link>
                    </div>
                    <br/>
                    <div>
                        <Link className="boton" to={'/cart'}>Ir al Carrito</Link>
                    </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    );
};

export default ItemDetail;
