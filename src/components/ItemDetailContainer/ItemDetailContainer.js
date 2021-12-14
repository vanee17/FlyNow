import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getProductById} from '../ItemListContainer/products'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const[product, setProduct] = useState([])

    const {paramId} = useParams()

        useEffect (() =>{
            getProductById(paramId).then(Item => {
            setProduct(Item)
    })
    return(() =>{
        setProduct()
        })
    },[paramId])

    return (
        <div>
            <h1>ItemDetailContainer</h1>
            <ItemDetail  product={product}/>
        </div>
    )
}

export default ItemDetailContainer
