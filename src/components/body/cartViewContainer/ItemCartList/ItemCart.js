import React, { useContext } from 'react';
import CartContext from '../../../../context/CartContext';

const ItemCart = ({ item, count }) => {
    const { removeItemCart } = useContext(CartContext);

    const removeItem = () => {
        removeItemCart(item.id);
    };

    return (
<tbody>
            <tr>
                <td className="tabla1" >
                    <img src={item.img} alt="Imagen" className='imagen2'/>
                </td>
                <td className="tabla1">
                    <h1> {item.name} </h1>
                </td>
                <td className="tabla1">
                    <h2 className="Count">{count}</h2>
                </td>
                <td className="tabla1">
                    <h2 className="Price">${item.price * count}</h2>
                </td>
                <td className="tabla1">
                    <i onClick={removeItem} className="x">x</i>
                </td>
            </tr>
        </tbody>
    );
};

export default ItemCart;
