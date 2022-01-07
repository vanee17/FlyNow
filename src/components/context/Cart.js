import React from 'react'
import ItemCart from './ItemCart'

const Cart = ({items}) => {
    return (
        <div>
        {<div>
            {items.map(item=><ItemCart key={item.product.id} item={item.product} quantity={item.quantity} />)}
        </div>}
        </div>
    )
}

export default Cart

