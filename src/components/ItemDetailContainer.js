import React, { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail"
import products from './products'

export const getProducts1 = () =>{
    return new Promise ((resolve) =>{
        setTimeout (() =>{
            resolve(products[4])
        }, 3000)
    })
}

function ItemDetailContainer() {
    const[products, setProducts] = useState([])

        useEffect (() =>{
            getProducts1().then((products) => {
            setProducts(products);});
        });

    return (
        <div>
            <h1>ItemDetailContainer</h1>
            <ItemDetail key={products.id} product={products}/>
        </div>
    )
}

export default ItemDetailContainer
