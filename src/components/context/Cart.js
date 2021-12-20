import React from 'react'


const Cart = (items) => {
    return (
        <div>
            {items.map(item=><itemCart key={item.product.id} item={item.product}/>)}
        </div>
    )
}

export default Cart

